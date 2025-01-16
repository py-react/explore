import type { io_k8s_api_core_v1_AttachedVolume } from './io_k8s_api_core_v1_AttachedVolume';
import type { io_k8s_api_core_v1_ContainerImage } from './io_k8s_api_core_v1_ContainerImage';
import type { io_k8s_api_core_v1_NodeAddress } from './io_k8s_api_core_v1_NodeAddress';
import type { io_k8s_api_core_v1_NodeCondition } from './io_k8s_api_core_v1_NodeCondition';
import type { io_k8s_api_core_v1_NodeConfigStatus } from './io_k8s_api_core_v1_NodeConfigStatus';
import type { io_k8s_api_core_v1_NodeDaemonEndpoints } from './io_k8s_api_core_v1_NodeDaemonEndpoints';
import type { io_k8s_api_core_v1_NodeRuntimeHandler } from './io_k8s_api_core_v1_NodeRuntimeHandler';
import type { io_k8s_api_core_v1_NodeSystemInfo } from './io_k8s_api_core_v1_NodeSystemInfo';
import type { io_k8s_apimachinery_pkg_api_resource_Quantity } from './io_k8s_apimachinery_pkg_api_resource_Quantity';

/**
 * NodeStatus is information about the current status of a node.
 */
export type io_k8s_api_core_v1_NodeStatus = {
	/**
	 * List of addresses reachable to the node. Queried from cloud provider, if available. More info: https://kubernetes.io/docs/concepts/nodes/node/#addresses Note: This field is declared as mergeable, but the merge key is not sufficiently unique, which can cause data corruption when it is merged. Callers should instead use a full-replacement patch. See https://pr.k8s.io/79391 for an example. Consumers should assume that addresses can change during the lifetime of a Node. However, there are some exceptions where this may not be possible, such as Pods that inherit a Node's address in its own status or consumers of the downward API (status.hostIP).
	 */
	addresses?: Array<io_k8s_api_core_v1_NodeAddress>;
	/**
	 * Allocatable represents the resources of a node that are available for scheduling. Defaults to Capacity.
	 */
	allocatable?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Capacity represents the total resources of a node. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
	 */
	capacity?: Record<string, io_k8s_apimachinery_pkg_api_resource_Quantity>;
	/**
	 * Conditions is an array of current observed node conditions. More info: https://kubernetes.io/docs/concepts/nodes/node/#condition
	 */
	conditions?: Array<io_k8s_api_core_v1_NodeCondition>;
	/**
	 * Status of the config assigned to the node via the dynamic Kubelet config feature.
	 */
	config?: io_k8s_api_core_v1_NodeConfigStatus;
	/**
	 * Endpoints of daemons running on the Node.
	 */
	daemonEndpoints?: io_k8s_api_core_v1_NodeDaemonEndpoints;
	/**
	 * List of container images on this node
	 */
	images?: Array<io_k8s_api_core_v1_ContainerImage>;
	/**
	 * Set of ids/uuids to uniquely identify the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#info
	 */
	nodeInfo?: io_k8s_api_core_v1_NodeSystemInfo;
	/**
	 * NodePhase is the recently observed lifecycle phase of the node. More info: https://kubernetes.io/docs/concepts/nodes/node/#phase The field is never populated, and now is deprecated.
 * 
 * Possible enum values:
 * - `"Pending"` means the node has been created/added by the system, but not configured.
 * - `"Running"` means the node has been configured and has Kubernetes components running.
 * - `"Terminated"` means the node has been removed from the cluster.
	 */
	phase?: 'Pending' | 'Running' | 'Terminated';
	/**
	 * The available runtime handlers.
	 */
	runtimeHandlers?: Array<io_k8s_api_core_v1_NodeRuntimeHandler>;
	/**
	 * List of volumes that are attached to the node.
	 */
	volumesAttached?: Array<io_k8s_api_core_v1_AttachedVolume>;
	/**
	 * List of attachable volumes in use (mounted) by the node.
	 */
	volumesInUse?: Array<string>;
};


