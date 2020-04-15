#!/bin/bash

ncat -k -l -p 9000 -c "echo 'HTTP/1.1 200 OK\nContent-type: application/json\nconnection: close\\n'; echo '{\"ciao\":true}'"
