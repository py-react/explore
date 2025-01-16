import docker

import docker
import ssl

# Path to the client certificates
tls_config = docker.tls.TLSConfig(
    client_cert=('/Users/ai/Documents/tls_docker/cert.pem', '/Users/ai/Documents/tls_docker/key.pem'),
    ca_cert='/Users/ai/Documents/tls_docker/ca.pem',
    verify=True,
)

# Initialize the Docker client
client = docker.DockerClient(
    base_url='tcp://app.docker.com:2377',  # Remote Docker host
    tls=tls_config
)

# Test the connection
try:
    info = client.info()  # Try fetching Docker information
    print("Successfully connected to the remote Docker daemon")
    print(info)
except docker.errors.DockerException as e:
    print(f"Error connecting to Docker: {e}")



# openssl req -subj "/CN=app.docker.com" -sha256 -new -key server-key.pem -out server.csr

# echo subjectAltName = DNS:app.docker.com,IP:10.10.10.20,IP:127.0.0.1 >> extfile.cnf

# dockerd \
#     --tlsverify \
#     --tlscacert=/tls_docker/ca.pem \
#     --tlscert=/tls_docker/server-cert.pem \
#     --tlskey=tls_docker/server-key.pem \
#     -H=0.0.0.0:2376

# docker --tlsverify \
#     --tlscacert=ca.pem \
#     --tlscert=cert.pem \
#     --tlskey=key.pem \
#     -H=app.docker.com:2377 version