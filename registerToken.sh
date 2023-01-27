#!/bin/bash

curl -X POST -H "Content-Type: application/json" \
-d '{"token": "111", "id": 1}' \
"http://127.0.0.1:3000/token"