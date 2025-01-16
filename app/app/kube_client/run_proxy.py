
import subprocess
import os
import psutil


def find_process_using_port(port):
    """Find the process using a specific port."""
    for proc in psutil.process_iter(['pid', 'name']):
        try:
            for conn in proc.connections(kind='inet'):
                if conn.laddr.port == port:
                    return proc.pid
        except (psutil.AccessDenied, psutil.NoSuchProcess):
            continue
    return None


def kill_process(pid):
    """Kill a process by its PID."""
    try:
        os.kill(pid, 9)  # 9 is the signal number for SIGKILL
        print(f"Process with PID {pid} killed.")
    except OSError as e:
        print(f"Error killing process with PID {pid}: {e}")


def run_kubectl_proxy(port=8080):
    """Run kubectl proxy in the background, ensuring no conflict on the specified port."""
    print("Trying kubectl proxy on port")
    existing_pid = find_process_using_port(port)
    if existing_pid:
        print(f"Port {port} is already in use by PID {existing_pid}. Killing the process...")
        kill_process(existing_pid)

    try:
        print(f"Starting kubectl proxy on port {port}...")
        subprocess.Popen([
            "kubectl", "proxy", f"--port={port}", "--accept-hosts=.*"
        ], stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        print(f"kubectl proxy is running on port {port}.")
    except FileNotFoundError:
        print("Error: kubectl is not installed or not found in PATH.")