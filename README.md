
# Docker Application to solve Vehicle Routing Problem using OpenRouteService and VROOM

## TSP Travel Salesman Problem

*1 vehicle 2 optimal routes to cross all positions*

![TSP Algorithm](/data/tsp.png)

## VRP Vehicle Routing Problem

*2 Vechicles, the numbers above the markers represent the quantity of material to be loaded on the vehicle*

![VRP Algorithm](/data/vrp.png)

References to OpenRouteService Optimization API
https://openrouteservice.org/dev/#/api-docs/optimization/post


## Configuration files

- ./docker-compose.yml
- ./ors/config.json
- ./vroom/conf/config.yml
- ./ors-proxy/config.js

### Config documentation

https://github.com/GIScience/openrouteservice/wiki/Configuration-(app.config) 

### Enable ORS proxy

in file  vroom/conf/config.yml replace 'ors' with 'ors-proxy'

# Setup

Download this reporitory
```bash
git clone https://github.com/DigitalCommonsLab/docker-ors-vroom.git
cd docker-ors-vroom
```

Download OpenRouteService
```bash
git clone https://github.com/DigitalCommonsLab/openrouteservice.git ./ors/openrouteservice
cp ./ors/config.json ./ors/openrouteservice/docker/conf/config.json
```

add custom Openstreetmap test data in OpenRouteService data dir

```bash
cp ./data/mezzocorona.osm.pbf ./ors/openrouteservice/docker/data/mezzocorona.osm.pbf
docker-compose up -d
```
first time the images building require some minutes...

monitoring of routing engines(optional)
```bash
docker logs -f smartbin-ors
```

monitoring data packets from VROOM to ORS
```bash
docker-compose logs -f ors-proxy
```

## Testing OpenRouteService API

brownser in:
http://localhost:8080

vehicles actives: "vehicles-hgv","bike",


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


### TODO

include custom parameters in file ./ors/HeavyVehicleFlagEncoder.java
