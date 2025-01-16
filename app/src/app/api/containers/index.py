from fastapi import Request
from pydantic import BaseModel
from typing import Optional,Literal,List, Dict,Any
from enum import Enum
from fastapi.responses import JSONResponse
from app.docker_client import clientContext

client = clientContext.client

class HostConfig(BaseModel):
    CpuShares: Optional[int]
    Memory: Optional[int]
    MemoryReservation: Optional[int]
    MemorySwap: Optional[int]
    PortBindings: Optional[Dict[str, Any]]

class ContainerStats(BaseModel):
    # Replace this with an appropriate type or structure for container stats
    # Assuming the stats are a dictionary for simplicity
    stats: Dict[str, Any]

class ContainerInfo(BaseModel):
    name: str
    id: str
    status: str
    created: str
    image: str
    ports: Optional[Dict[str, Any]]
    command: Optional[List[str]]
    state: Dict[str, Any]
    exit_code: Optional[int]
    network: Dict[str, Any]
    volumes: List[Dict[str, Any]]
    labels: Dict[str, Any]
    env_vars: List[str]
    stats: Optional[ContainerStats]
    host_config: HostConfig

class GetContainerResponse(BaseModel):
   containers:List[ContainerInfo]
   length:int



class ActionTypeEnum(str, Enum):
    RUN = 'run'
    RERUN = 'rerun'
    STOP = 'stop'
    PAUSE = 'pause'
    REMOVE = 'remove'
    LOGS = 'logs'
    FILES = 'files'
    COMMAND = 'command'
    UPDATE = 'update'

class DockerRequest(BaseModel):
    command: str = ''
    directory: str = '/'

class HealthCheck(BaseModel):
    test: List[str] = []  # Default to empty list if not provided
    interval: int = 30000000000  # Default interval (30 seconds)
    timeout: int = 3000000000  # Default timeout (3 seconds)
    retries: int = 3  # Default retries (3)
    startPeriod: int = 1000000000  # Default start period (1 second)

class DockerConfig(BaseModel):
    image: str
    detach: bool = True  # Default to True (run container in background)
    remove: bool = False  # Default to False (do not remove on exit)
    privileged: bool = True  # Default to True (run with extended privileges)
    init: bool = False  # Default to False (do not run init inside the container)
    tty: bool = False  # Default to False (no pseudo-TTY)
    stdinOpen: bool = False  # Default to False (do not keep STDIN open)
    readOnly: bool = False  # Default to False (container filesystem is not read-only)
    ports:Dict = {}  # Default to an empty dictionary
    volumes: List[Dict] = []  # Default to an empty list
    healthcheck: Optional[HealthCheck] = None  # Healthcheck is optional and defaults to None
    command: str = ""  # Default to an empty string (no command)
    name: str
    auto_remove: bool = False  # Default to True (automatically remove the container when it exits)
    cpuShares: str = ""
    memory: str = ""
    memoryReservation: str = ""
    memorySwap: str = ""

class UpdateDockerConfig(BaseModel):
    cpuShares: str = ""
    memory: str = ""
    memoryReservation: str = ""
    memorySwap: str = ""


class RunContainer(BaseModel):
    action: Literal[ActionTypeEnum.RUN,ActionTypeEnum.UPDATE, ActionTypeEnum.RERUN, ActionTypeEnum.PAUSE,ActionTypeEnum.REMOVE,ActionTypeEnum.STOP,ActionTypeEnum.LOGS,ActionTypeEnum.FILES,ActionTypeEnum.COMMAND]
    containerId: Optional[str] = None
    image:Optional[str] = None
    dir:Optional[DockerRequest] = None
    instanceConfig: Optional[DockerConfig] = None
    updateInstanceConfig: Optional[UpdateDockerConfig] = None


async def GET(request:Request)->GetContainerResponse:
    containers = client.containers.list(all=True)  # Get all containers (running or stopped)
    
    container_info = []
    
    for container in containers:
        try:
            # Fetch container details
            host_Config = container.attrs['HostConfig']
            container_details = {
                "name": container.name,
                "id": container.id,
                "status": container.status,
                "created": container.attrs['Created'],
                "image": container.attrs['Config']['Image'],
                "ports": container.attrs['NetworkSettings']['Ports'],
                "command": container.attrs['Config']['Cmd'],
                # "logs": container.logs(stdout=True, stderr=True, tail=10).decode('utf-8'),
                "state": container.attrs['State'],
                "exit_code": container.attrs['State'].get('ExitCode', None),
                "network": container.attrs['NetworkSettings']['Networks'],
                "volumes": container.attrs['Mounts'],
                "labels": container.attrs['Config'].get('Labels', {}),
                "env_vars": container.attrs['Config'].get('Env', []),
                "stats":container.stats(stream=False),
                "host_config":{
                    "CpuShares":host_Config["CpuShares"],
                    "Memory":host_Config["Memory"],
                    "MemoryReservation":host_Config["MemoryReservation"],
                    "MemorySwap":host_Config["MemorySwap"],
                    "PortBindings":host_Config["PortBindings"] if host_Config["PortBindings"] else container.attrs['NetworkSettings']['Ports']
                }
            }
            
            container_info.append(container_details)
        except Exception as e:
            print(f"Error retrieving info for container {container.name}: {e}")
    
    return {"containers": container_info,"length":len(container_info)}

async def POST(request:Request,body: RunContainer):
    actionType = body.action
    containers_to_remove = []
    containers_to_pause = []
    containers_to_stop = []
    containers_to_run = []
    # Get all containers that are running and match the stored names

    try:
        if actionType == ActionTypeEnum.RUN:
            config = body.instanceConfig

            # Prepare healthcheck details with defaults
            healthcheck = {
                "test": config.healthcheck.test if config.healthcheck else [],
                "interval": config.healthcheck.interval if config.healthcheck else 30000000000,
                "timeout": config.healthcheck.timeout if config.healthcheck else 3000000000,
                "retries": config.healthcheck.retries if config.healthcheck else 3,
                "startPeriod": config.healthcheck.startPeriod if config.healthcheck else 1000000000,
            } if config.healthcheck else None

            # Handle ports mapping (expose ports inside container to the host)
            mapped_ports = {}
            for obj_id, host_port_config in config.ports.items():
                mapped_ports[str(host_port_config["containerPort"])] = host_port_config["hostPort"]  # Explicitly map container port to host port

            # Use a lambda function to transform the list into the required dictionary format
            volume_dict = dict(map(lambda item: (item["source"], {"bind": item["target"], "mode": item["mode"]}), config.volumes))

            # Build the parameters dynamically from the parsed config
            # Start the container with the provided or default configuration
            container = client.containers.create(
                image=config.image,
                detach=config.detach,
                privileged=config.privileged,
                init=config.init,
                tty=config.tty,
                stdin_open=config.stdinOpen,
                read_only=config.readOnly,
                ports=mapped_ports,
                volumes=volume_dict,
                healthcheck=healthcheck,
                command=config.command,
                name=config.name,
                auto_remove=config.auto_remove,
                mem_limit = config.memory if config.memory else None,
                mem_reservation = config.memoryReservation if config.memoryReservation else None,
                memswap_limit = config.memorySwap,
                cpu_shares =  int(config.cpuShares) if config.cpuShares else None
            )
            host_Config = container.attrs['HostConfig']
            container_details = {
                "name": container.name,
                "id": container.id,
                "status": container.status,
                "created": container.attrs['Created'],
                "image": container.attrs['Config']['Image'],
                "ports": container.attrs['NetworkSettings']['Ports'],
                "command": container.attrs['Config']['Cmd'],
                # "logs": container.logs(stdout=True, stderr=True, tail=10).decode('utf-8'),
                "state": container.attrs['State'],
                "exit_code": container.attrs['State'].get('ExitCode', None),
                "network": container.attrs['NetworkSettings']['Networks'],
                "volumes": container.attrs['Mounts'],
                "labels": container.attrs['Config'].get('Labels', {}),
                "env_vars": container.attrs['Config'].get('Env', []),
                "stats":container.stats(stream=False),
                "host_config":host_Config
            }
            
            return {"error":False,"container":container_details,"message": f"Container started successfully ({container.id})"}
        

        containerId = body.containerId
        container = client.containers.get(containerId)

        if actionType == ActionTypeEnum.UPDATE:
            config = body.updateInstanceConfig
            warnings = container.update(
                mem_limit=config.memory if config.memory else None,
                cpu_shares=int(config.cpuShares)if config.cpuShares else None,
                mem_reservation=config.memoryReservation if config.memoryReservation else None,
                memswap_limit = config.memorySwap if  config.memorySwap else None
            )
            container.reload()
            if container.status == "running":
                container.restart()

            host_Config = container.attrs['HostConfig']
            container_details = {
                "name": container.name,
                "id": container.id,
                "status": container.status,
                "created": container.attrs['Created'],
                "image": container.attrs['Config']['Image'],
                "ports": container.attrs['NetworkSettings']['Ports'],
                "command": container.attrs['Config']['Cmd'],
                # "logs": container.logs(stdout=True, stderr=True, tail=10).decode('utf-8'),
                "state": container.attrs['State'],
                "exit_code": container.attrs['State'].get('ExitCode', None),
                "network": container.attrs['NetworkSettings']['Networks'],
                "volumes": container.attrs['Mounts'],
                "labels": container.attrs['Config'].get('Labels', {}),
                "env_vars": container.attrs['Config'].get('Env', []),
                "stats":container.stats(stream=False),
                "host_config":host_Config
            }
            return {"error":True,"message":f"Container updated successfully ({container.id})","warnings":warnings,"container":container_details}
        
        if actionType == ActionTypeEnum.REMOVE:
            # Stop and remove the container
            container.stop()
            container.remove()
            containers_to_remove.append(containerId)
            return {"error":False, "message":f"Removed {container.name}({container.id})","removed_containers": containers_to_remove}
        
        if actionType == ActionTypeEnum.PAUSE:
            if container.status == 'running':
                # Stop and remove the container
                container.pause()
                containers_to_pause.append(containerId)
            return {"error": False,"message":f"Paused {container.name}({container.id})", "paused_containers": containers_to_pause}
        
        if actionType == ActionTypeEnum.STOP:
            if container.status == 'running' or container.status == 'paused':
                # Stop and remove the container
                container.stop()
                containers_to_stop.append(containerId)
            return {"error": False,"message":f"Stopped {container.name}({container.id})", "stoped_containers": containers_to_stop}
        
        if actionType == ActionTypeEnum.RERUN:
            container = client.containers.get(containerId)
            container.restart()
            containers_to_run.append(containerId)
            return {"error": False, "message":f"Started {container.name}({container.id})", "started_containers": containers_to_run }
        
        if actionType == ActionTypeEnum.LOGS:
            # Retrieve the logs (you can also specify 'follow' or 'timestamps' if needed)
            logs = container.logs(stderr=True, stdout=True,stream=False)
            
            # Return logs as plain text
            return logs.decode("utf-8")
        
        if actionType == ActionTypeEnum.FILES:
            directory = body.dir.directory
            if container.status == 'running' or container.status == 'paused':
                toReturn = container.exec_run("ls -l",stdout=True, stderr=True,workdir=directory)
                return {"files": toReturn[1]}
            return {"error":False,"files":""}
        
        if actionType == ActionTypeEnum.COMMAND:
            command = body.dir.command
            directory = body.dir.directory
            if container.status == 'running':
                result = container.exec_run(command, stdout=True, stderr=True,workdir=directory)
                return result.output.decode('utf-8')
            return "Not Running"
        
    except Exception as e:
        return {"error": True, "message": e.__dict__["explanation"]}

    return {"error":True, "message": "Action not found"}
