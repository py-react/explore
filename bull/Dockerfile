FROM ubuntu:latest

RUN apt update
RUN apt upgrade
RUN apt install -y curl
# RUN apt install -y nodejs python3 python3-pip python3.12-venv npm curl
# RUN apt install -y git
RUN curl -fsSL https://get.docker.com -o get-docker.sh
RUN . ./get-docker.sh --dry-run
CMD ["dockerd","--tlsverify","--tlscacert=/tls_docker/ca.pem","--tlscert=/tls_docker/server-cert.pem","--tlskey=tls_docker/server-key.pem","-H=0.0.0.0:2376"]