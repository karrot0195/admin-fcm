#!/bin/bash

while true;
do
    curl -X POST -H "Content-Type: application/json" \
    "http://127.0.0.1:3000/send"
    sleep 2
done 