
# Docker VRP(Vehicle Routing Problem) OpenRouteService with VROOM

Use OpenRouteService Optimization API with VROOM
https://openrouteservice.org/dev/#/api-docs/optimization/post

## Setup

```bash
git clone https://github.com/DigitalCommonsLab/openrouteservice.git ./ors/openrouteservice
docker-compose up -d
docker logs -f smartbin-ors
```

## Testing OpenRouteService in Map

brownser in:
http://localhost:8081/


## Testing OpenRouteService/VROOM in Jupyter

* *./notebooks/povo.ipynb* python notebook to test Routing Algorithms by ORS python binding

brownser in:
http://localhost:8081/


### Testing OpenRouteService

OpenRouteService python binding, clone or install via pip
https://github.com/DigitalCommonsLab/openrouteservice-py

```bash
pip install openrouteservice
```

### Testing VROOM

simple VRP problem to test vroom instance(on port 3000)

* vroom/test.json example of vroom problem
* vroom/test.sh send test.json to vroom

tools for testinv vroom generating random problems
```bash
git clone https://github.com/VROOM-Project/vroom-scripts.git

cd vroom-scripts/src/

./random_problem.py -j2 --top 46.07 --bottom 46.02 --left 11.14 --right 11.18

```

usage: random_problem.py [-h] [-j JOBS] [-o OUTPUT] [--top TOP]
                         [--bottom BOTTOM] [--left LEFT] [--right RIGHT]
                         [-s SEED] [--uniform] [--geojson] [--csv]

Generate random problem

optional arguments:
  -h, --help            show this help message and exit
  -j JOBS, --jobs JOBS  number of jobs to generate
  -o OUTPUT, --output OUTPUT
                        output file name
  --top TOP             bounding box max latitude
  --bottom BOTTOM       bounding box min latitude
  --left LEFT           bounding box min longitude
  --right RIGHT         bounding box max longitude
  -s SEED, --seed SEED  number used for seeding the random generation
  --uniform             use an uniform distribution (default is normal)
  --geojson             also write a geojson file with all generated points
  --csv                 also write a csv file with coordinates for all
                        generated points


