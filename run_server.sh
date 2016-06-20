#!/usr/bin/env bash
set -eu

docker-machine env default
eval $(docker-machine env default)
docker-compose up --build -d
echo IP address: $(docker-machine ip default)
