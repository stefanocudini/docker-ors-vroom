import requests

headers = {
    'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8',
    'Authorization': 'your-api-key',
    'Content-Type': 'application/json; charset=utf-8'
}
call = requests.post('http://localhost:8081/', json=body, headers=headers)

print(call.status_code, call.reason)
print(call.text)