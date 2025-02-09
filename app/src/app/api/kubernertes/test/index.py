from fastapi import Request,Query
from pydantic import BaseModel
from typing import List, Dict, Any, Literal, Optional, Tuple
from kubernetes import client, config
from kubernetes.client.rest import ApiException

# Resource Usage Model
class ResourceInfo(BaseModel):
    used: str
    total: str
    percentage: int


# Node Condition Model
class ConditionInfo(BaseModel):
    type: str
    status: str
    lastTransition: str
    reason: str
    message: str


# Pod Model
class PodInfo(BaseModel):
    name: str
    status: Literal["Running", "Pending", "Failed", "Succeeded", "Unknown"]
    restarts: int
    age: str
    ip: str
    node: str
    resources: Dict[str, ResourceInfo]


# Node Model
class NodeInfo(BaseModel):
    name: str
    status: Literal["Ready", "NotReady"]
    role: Literal["master", "worker"]
    age: str
    version: str
    internalIP: str
    externalIP: str
    os: str
    architecture: str
    resources: Dict[str, ResourceInfo]
    conditions: List[ConditionInfo]
    pods: List[PodInfo]


# Service Port Model
class ServicePort(BaseModel):
    port: int
    targetPort: int
    protocol: Literal["TCP", "UDP"]


# Service Model
class ServiceInfo(BaseModel):
    name: str
    type: Literal["ClusterIP", "NodePort", "LoadBalancer"]
    clusterIP: str
    externalIP: str
    ports: List[ServicePort]
    age: str


# Namespace Model
class NamespaceInfo(BaseModel):
    name: str
    status: Literal["Active", "Terminating"]
    age: str
    services: List[ServiceInfo]
    pods: List[PodInfo]


# Cluster Resource Summary Model
class ClusterResources(BaseModel):
    cpu: ResourceInfo
    memory: ResourceInfo
    storage: ResourceInfo


# Cluster Info Model
class ClusterInfo(BaseModel):
    name: str
    version: str
    nodes: List[NodeInfo]
    namespaces: List[NamespaceInfo]
    totalResources: ClusterResources

def parse_cpu_to_millicpu(cpu_str: str) -> int:
    """Convert CPU string (e.g., '250m' or '2') into millicpu (int)."""
    if cpu_str.endswith("m"):
        return int(cpu_str.rstrip("m"))
    else:
        return int(float(cpu_str) * 1000)

def parse_memory_to_Mi(mem_str: str) -> int:
    """Convert memory string (e.g., '2048000Ki', '512Mi', '2Gi') into Mi."""
    if mem_str.endswith("Ki"):
        return int(int(mem_str.rstrip("Ki")) / 1024)
    elif mem_str.endswith("Mi"):
        return int(mem_str.rstrip("Mi"))
    elif mem_str.endswith("Gi"):
        return int(mem_str.rstrip("Gi")) * 1024
    else:
        return int(mem_str)

def get_node_metrics() -> Dict[str, Dict[str, int]]:
    """
    Retrieve live node metrics from the metrics API.
    Returns a dict keyed by node name with CPU (in millicpu) and memory (in Mi) usage.
    If the API is unavailable, returns an empty dict.
    """
    metrics = {}
    custom_api = client.CustomObjectsApi()
    try:
        nodes_metric = custom_api.list_cluster_custom_object(
            group="metrics.k8s.io", version="v1beta1", plural="nodes"
        )
        for item in nodes_metric.get("items", []):
            node_name = item["metadata"]["name"]
            cpu_str = item["usage"]["cpu"]
            mem_str = item["usage"]["memory"]
            if cpu_str.endswith("m"):
                cpu_usage = int(cpu_str.rstrip("m"))
            else:
                cpu_usage = int(float(cpu_str) * 1000)
            mem_usage = parse_memory_to_Mi(mem_str)
            metrics[node_name] = {"cpu": cpu_usage, "memory": mem_usage}
    except (ApiException, Exception) as e:
        print(e,"<========Error while fetching node metric")
        pass
    return metrics

def get_effective_request(container, namespace_default_requests: Dict[str, str]) -> Tuple[str, str]:
    """
    Return the effective CPU and memory request for a container.
    Falls back to the LimitRange defaults if the container spec doesn't show a request.
    """
    requests_dict = container.resources.requests or {}
    print(container.resources,"findMe")
    cpu_req = requests_dict.get("cpu") or namespace_default_requests.get("cpu", "0")
    mem_req = requests_dict.get("memory") or namespace_default_requests.get("memory", "0")
    return cpu_req, mem_req

def get_effective_limit(container) -> Tuple[str, str]:
    """
    Return the effective CPU and memory request for a container.
    Falls back to the LimitRange defaults if the container spec doesn't show a request.
    """
    requests_dict = container.resources.limits or {}
    cpu_limit = requests_dict.get("cpu") or "0"
    mem_limit = requests_dict.get("memory") or "0"
    return cpu_limit, mem_limit

async def GET(request: Request, namespace: Optional[str] = Query(None)):
    config.load_kube_config()
    v1 = client.CoreV1Api()
    version_info = client.VersionApi().get_code()
    
    # Get cluster version
    cluster_version = version_info.git_version

    # Retrieve live node metrics if available
    node_metrics = get_node_metrics()

    # Get Nodes
    nodes = v1.list_node().items
    node_info_list = []
    total_cpu = total_memory = total_storage = 0
    used_cpu = used_memory = used_storage = 0

    for node in nodes:

        cpu_total = node.status.capacity.get("cpu", "0")
        memory_total = node.status.capacity.get("memory", "0")
        storage_total = node.status.capacity.get("ephemeral-storage", "0")
        total_cpu = parse_cpu_to_millicpu(cpu_total)
        total_mem = parse_memory_to_Mi(memory_total)
        total_storage = (int(int(storage_total.rstrip("Ki")) / 1024)
                         if storage_total.endswith("Ki") else 0)

        # Determine node role based on label
        role = "master" if "node-role.kubernetes.io/master" in node.metadata.labels else "worker"
        node_name = node.metadata.name

        # Use live metrics if available; otherwise, usage remains zero.
        used_cpu = node_metrics.get(node_name, {}).get("cpu", 0)
        used_mem = node_metrics.get(node_name, {}).get("memory", 0)
        cpu_percentage = round((used_cpu / total_cpu) * 100) if total_cpu > 0 else 0
        mem_percentage = round((used_mem / total_mem) * 100) if total_mem > 0 else 0

        node_info = {
            "name": node_name,
            "status": "Ready" if any(
                condition.type == "Ready" and condition.status == "True"
                for condition in node.status.conditions
            ) else "NotReady",
            "role": role,
            "age": str(node.metadata.creation_timestamp),
            "version": node.status.node_info.kubelet_version,
            "internalIP": next((addr.address for addr in node.status.addresses if addr.type == "InternalIP"), "N/A"),
            "externalIP": next((addr.address for addr in node.status.addresses if addr.type == "ExternalIP"), "N/A"),
            "os": node.status.node_info.os_image,
            "architecture": node.status.node_info.architecture,
            "resources": {
                "cpu": {
                    "used": f"{used_cpu / 1000:.2f}",
                    "total": f"{total_cpu / 1000:.2f}" if total_cpu else "0",
                    "percentage": cpu_percentage
                },
                "memory": {
                    "used": f"{used_mem}Mi",
                    "total": f"{total_mem}Mi",
                    "percentage": mem_percentage
                },
                "storage": {
                    "used": "0Mi",  # Not computed in this example
                    "total": f"{total_storage}Mi",
                    "percentage": 0
                }
            },
            "conditions": [
                {
                    "type": condition.type,
                    "status": condition.status,
                    "lastTransition": str(condition.last_transition_time),
                    "reason": condition.reason,
                    "message": condition.message
                } for condition in node.status.conditions
            ],
            "pods": []  # Will be populated later
        }
        node_info_list.append(node_info)

    # Get Namespaces (filter if namespace is provided)
    namespaces = [v1.read_namespace(namespace)] if namespace else v1.list_namespace().items
    namespace_info_list = []

    for ns in namespaces:

        namespace_default_requests: Dict[str, str] = {}
        try:
            limit_ranges = v1.list_namespaced_limit_range(ns.metadata.name).items
            for lr in limit_ranges:
                if lr.spec.limits:
                    for limit in lr.spec.limits:
                        if limit.type == "Container":
                            default_req = getattr(limit, "default_request", None)
                            if default_req:
                                namespace_default_requests.update(default_req)
        except Exception:
            pass

        namespace_info = {
            "name": ns.metadata.name,
            "status": ns.status.phase,
            "age": str(ns.metadata.creation_timestamp),
            "services": [],
            "pods": []
        }

        # Get Services in this namespace
        services = v1.list_namespaced_service(ns.metadata.name).items
        for svc in services:
            ports = []
            for p in svc.spec.ports:
                target_port = int(p.target_port) if isinstance(p.target_port, (int, float)) else None
                ports.append({
                    "port": p.port,
                    "targetPort": target_port,
                    "protocol": p.protocol
                })

            namespace_info["services"].append({
                "name": svc.metadata.name,
                "type": svc.spec.type,
                "clusterIP": svc.spec.cluster_ip,
                "externalIP": svc.status.load_balancer.ingress[0].ip if svc.status.load_balancer.ingress else "N/A",
                "ports": ports,
                "age": str(svc.metadata.creation_timestamp)
            })

        # Get Pods in this namespace
        pods = v1.list_namespaced_pod(ns.metadata.name).items
        for pod in pods:
            pod_cpu_limit = 0
            pod_mem_limit = 0
            pod_cpu_usage = 0
            pod_mem_usage = 0
            if pod.spec.containers:
                for container in pod.spec.containers:
                    cpu_req, mem_req = get_effective_request(container, namespace_default_requests)
                    cpu_limit, mem_limit = get_effective_limit(container)
                    pod_cpu_limit += parse_cpu_to_millicpu(cpu_limit)
                    pod_mem_limit += parse_memory_to_Mi(mem_limit)
                    pod_cpu_usage += parse_cpu_to_millicpu(cpu_req)
                    pod_mem_usage += parse_memory_to_Mi(mem_req)

            pod_info = {
                "name": pod.metadata.name,
                "status": pod.status.phase,
                "restarts": sum(container.restart_count for container in pod.status.container_statuses or []),
                "age": str(pod.metadata.creation_timestamp),
                "ip": pod.status.pod_ip or "N/A",
                "node": pod.spec.node_name,
                "resources": {
                    "cpu": {"used": f"{pod_cpu_usage/1000:.2f}", "total": f"{pod_cpu_limit/1000:.2f}", "percentage": 0},
                    "memory": {"used": f"{pod_mem_usage}Mi", "total": f"{pod_mem_limit}Mi", "percentage": 0},
                }
            }
            namespace_info["pods"].append(pod_info)

            # Attach pod to its node
            for node in node_info_list:
                if node["name"] == pod.spec.node_name:
                    node["pods"].append(pod_info)

        namespace_info_list.append(namespace_info)

    # Compute overall resource usage percentages
    total_resources = {
        "cpu": {"used": f"{used_cpu}", "total": f"{total_cpu}", "percentage": (used_cpu / total_cpu) * 100 if total_cpu else 0},
        "memory": {"used": f"{used_memory}Mi", "total": f"{total_memory}Mi", "percentage": (used_memory / total_memory) * 100 if total_memory else 0},
        "storage": {"used": f"{used_storage}Mi", "total": f"{total_storage}Mi", "percentage": (used_storage / total_storage) * 100 if total_storage else 0},
    }

    # Final response
    cluster_info = {
        "name": "your-cluster-name",
        "version": cluster_version,
        "nodes": node_info_list,
        "namespaces": namespace_info_list,
        "totalResources": total_resources
    }

    return cluster_info