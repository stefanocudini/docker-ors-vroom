#!/bin/bash
curl -X POST \
'http://localhost:8080/ors/v2/directions/driving-hgv' \
-H 'Content-Type: application/json; charset=utf-8' \
-H 'Accept: application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8' \
-d '{"coordinates":[[11.1066,46.217],[11.118207,46.214912],[11.127262,46.211972],[11.112628,46.217585],[11.1066,46.217]],"geometry_simplify":false,"continue_straight":false}'
