# docker-ors-vroom


## Setup

```bash
git clone https://github.com/DigitalCommonsLab/openrouteservice.git ./ors/openrouteservice
```
```bash
pip install openrouteservice
```

OpenRouteService python binding, clone or install via pip
https://github.com/DigitalCommonsLab/openrouteservice-py

## Testing in Jupyter

```bash
docker-compose up -d
docker logs -f smartbin-ors
```

* *./notebooks/povo.ipynb* python notebook to test Optimization Routing by ors python binding

```bash
pip install --user jupyterlab
cd notebooks
jupyter lab
```

### Testing vroom

simple vrp problem to test vroom instance(on port 3000)

* vroom/test.json example of vroom problem
* vroom/test.sh send test.json to vroom
