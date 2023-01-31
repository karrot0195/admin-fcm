#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
-d '{"id": "'$1'", "token": "'$2'"}' \
"http://localhost:3000/token"