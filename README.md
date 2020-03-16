
# Docker VRP(Vehicle Routing Problem) OpenRouteService with VROOM

Use OpenRouteService Optimization API with VROOM
https://openrouteservice.org/dev/#/api-docs/optimization/post


## Configuration

./ors/config.json

### config documentation

https://github.com/GIScience/openrouteservice/wiki/Configuration-(app.config) 



# Setup

Download OpenRouteService
```bash
git clone https://github.com/DigitalCommonsLab/openrouteservice.git ./ors/openrouteservice
cp ./ors/config.json ./ors/openrouteservice/docker/conf/config.json
```

add custom Openstreetmap test data in OpenRouteService data dir

```bash
cp ./data/povo.osm.gz ./ors/openrouteservice/docker/data/povo.osm.gz
docker-compose up -d
```
first time the images building require some minutes...

monitoring of routing engines
```bash
docker logs -f smartbin-ors
```

## Testing OpenRouteService API

brownser in:
http://localhost:8080


## Testing VROOM API

brownser in:
http://localhost:8081


## Testing OpenRouteService in Map

brownser in:
http://localhost:8082


## Testing VROOM in Map

upload json file problems inside jupyter/data/xxx.json

brownser in:
http://localhost:8083


## Testing Algorithms in Jupyter notebook

* *./jupyter/test.ipynb* python notebook to test Routing Algorithms by OpenRouteService python binding

brownser in:
http://localhost:8084


### Testing OpenRouteService via python

OpenRouteService python binding, clone or install via pip
https://github.com/DigitalCommonsLab/openrouteservice-py

```bash
pip install openrouteservice

import openrouteservice as ors

client = ors.Client(base_url='http://ors:8080/ors', key='')

#TSP only openrouteservice routing engine
route = client.directions(...)

#VRP vroom vrp engine
routes = client.optimization(...)

```

### Create random testing data for VROOM

simple VRP problem to test vroom instance(on port 3000)

brownser in:
http://localhost:8083

```bash
git clone https://github.com/VROOM-Project/vroom-scripts.git

cd vroom-scripts/src/

./random_problem.py -j2 --top 46.07 --bottom 46.02 --left 11.14 --right 11.18

```