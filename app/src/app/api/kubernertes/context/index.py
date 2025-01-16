from fastapi import Request, HTTPException
from kubernetes import client, config

import subprocess
from typing import Optional, Literal
from pydantic import BaseModel
from app.kube_client.run_proxy import run_kubectl_proxy
import asyncio

# Configs can be set in Configuration class directly or using helper utility
config.load_kube_config()


class KubernetesContext(BaseModel):
    name: str
    namespace: Optional[str] = "default"

class GetKubernetesContext(BaseModel):
    action: Literal["all","current"]

def run_kubectl_command(command: list[str]) -> str:
    try:
        result = subprocess.run(command, text=True, capture_output=True, check=True)
        return result.stdout
    except subprocess.CalledProcessError as e:
        raise HTTPException(status_code=500, detail=f"Error running kubectl: {e.stderr}")

async def GET(request:Request,action:Literal["all","current"]):
    """Retrieve all Kubernetes contexts."""
    if action == "all":
        """Retrieve all Kubernetes contexts and tag the current one."""
        contexts = config.list_kube_config_contexts()
        return {"contexts": contexts[0],"current_context":contexts[1]}

    """Retrieve the current Kubernetes context."""
    output = run_kubectl_command(["kubectl", "config", "current-context"])
    return {"current_context": output.strip()}

async def POST(request:Request,context: KubernetesContext):
    """Set a new Kubernetes context."""
    command = [
        "kubectl", "config", "use-context", context.name,
    ]
    output = run_kubectl_command(command)
    asyncio.sleep(1)
    run_kubectl_proxy()
    return {"message": f"Context '{context.name}' set successfully", "output": output}
