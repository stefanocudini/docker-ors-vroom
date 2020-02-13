#!/bin/bash
#

curl -d @vroom-problem.json -X POST -H "Content-Type: application/json" http://localhost:8083
