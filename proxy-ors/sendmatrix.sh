  curl -X POST \
  'http://localhost:8080/ors/v2/matrix/driving-hgv' \
  -H 'Content-Type: application/json; charset=utf-8' \
  -H 'Accept: application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8' \
  -d '{"locations":[[11.106600,46.217000],[11.105100,46.218500],[11.092029,46.217317],[11.087930,46.216129],[11.091685,46.210576],[11.096470,46.213442],[11.112628,46.217585],[11.118207,46.214912],[11.127262,46.211972],[11.122541,46.209864]]}'
