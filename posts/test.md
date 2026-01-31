# VIKTIGA GREJER

## CURL

### POST

curl -X POST <https://api.restful-api.dev/objects> -H "Content-Type: application/json" -d '{"name":"lofijeff","data":{"type":"Bajskorv"}}' | jq

### GET (all)

curl <https://api.restful-api.dev/objects>

### GET (id)

curl <https://api.restful-api.dev/objects/{id}>

### DELETE (id)

curl -X DELETE <https://api.restful-api.dev/objects/{id}>
