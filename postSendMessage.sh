#!/bin/bash

while true;
do
    curl -X POST -H "Content-Type: application/json" \
    "http://localhost:3000/send"
    sleep 2
done 