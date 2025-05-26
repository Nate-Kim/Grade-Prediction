#!/usr/bin/env bash

PORT=8080

docker build -t frontend . && \
echo "ATTEMPTING LAUNCH -> http://localhost:$PORT" && \
docker run -p $PORT:80 frontend 
