from fastapi import FastAPI, Request
import httpx
from starlette.responses import Response
from starlette.requests import Request
from starlette.middleware.cors import CORSMiddleware
from starlette.routing import WebSocketRoute
from starlette.websockets import WebSocket

import json
from pathlib import Path
import os
from app.kube_client.run_proxy import run_kubectl_proxy,find_process_using_port,kill_process

# Define the target server for proxying requests
TARGET_URL = "https://registry.hub.docker.com"
KUBE_TARGET = "http://localhost:8080"

async def proxy(path: str, request: Request, response: Response):
    """
    Proxy the GET request to Docker Hub registry without modifying the headers or body.
    """
    target_url = f"{TARGET_URL}/{path}"

    # Send the request to Docker Hub
    async with httpx.AsyncClient() as client:
        proxy = await client.get(target_url, params=request.query_params)

    # Set the body and status code in the response to match Docker Hub's response
    response.body = proxy.content
    response.status_code = proxy.status_code
    response.headers["Content-Type"] = "application/json"

    return response

async def proxy_kube(path: str, request: Request, response: Response):
    """
    Proxy the GET request to Docker Hub registry without modifying the headers or body.
    """
    target_url = f"{KUBE_TARGET}/{path}"

    # Send the request to Docker Hub
    async with httpx.AsyncClient() as client:
        proxy = await client.get(target_url, params=request.query_params)

    # Set the body and status code in the response to match Docker Hub's response
    response.body = proxy.content
    response.status_code = proxy.status_code
    response.headers["Content-Type"] = "application/json"

    return response

# Function to extend the app by adding routes (following your exact pattern)
def extend_app(app: FastAPI):
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],  # Replace with your allowed origins
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    app.add_api_route("/api/docker/{path:path}", methods=["GET"], endpoint=proxy)
    app.add_api_route("/api/kube/{path:path}", methods=["GET","POST","DELETE","PUT"], endpoint=proxy_kube)
    print("Trying kubectl proxy on port")
    run_kubectl_proxy()

    @app.on_event("shutdown")
    def shutdown_event():
        print("Application is shutting down...")
        existing_pid = find_process_using_port(8080)
        if existing_pid:
            print(f"kill {8080} kube proxy use by PID {existing_pid}. Killing the process...")
            kill_process(existing_pid)
        # Perform any necessary cleanup or logging here

