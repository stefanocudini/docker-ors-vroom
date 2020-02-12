#!/bin/bash
#-v /home/z4k/routing-engines/vroom/config.js:/vroom-express/src/config.js
docker run --name vroom -d -p 8083:3000 vroom-ors
