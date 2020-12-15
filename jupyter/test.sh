#!/bin/bash
#
curl -vX POST http://localhost:8081/optimization \
 --header "Content-Type: application/json" \
 -d @data/mezzocorona_2jobs.json