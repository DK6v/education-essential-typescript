FROM node:22-slim AS build

SHELL [ "/bin/bash", "-c" ]
ENV SHELL="/bin/bash"

RUN \
# exit immediately if any command exits with a non-zero status
set -e; \
echo "----- Install prerequisites -----"; \
export DEBIAN_FRONTEND=noninteractive; \
apt-get update && \
apt-get install --assume-yes \
  procps \
  python3; \
echo "----- DONE -----";

RUN \
set -e; \
echo "----- Install packages -----"; \
npm install -g \
  npm@11.2.0 \
  typescript \
  jest @types/jest \
  jest-bench @types/benchmark \
  pkg \
  postject; \
echo "----- DONE -----";

RUN \
echo "----- Cleanup -----"; \
apt-get autoremove -y; \
apt-get clean; \
rm -rf /tmp/* /var/lib/apt/lists/*; \
echo "----- DONE -----"

WORKDIR /docker
ENV PATH=$PATH:/docker:/docker/bin

COPY ./*.sh ./bin/* ./bin/
RUN chmod +x ./bin/*

WORKDIR /code

CMD [ "/bin/bash", "-i" ]
ENTRYPOINT [ "entrypoint.sh" ]
