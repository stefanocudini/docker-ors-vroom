# docker-ors-vroom


## Setup

```bash
git clone https://github.com/GIScience/openrouteservice.git ./ors/openrouteservice
```

* vroom/test.json example of vroom problem
* vroom/test.sh send test.json to vroom



## Testing

requirements: ORS python binding
https://github.com/giscience/openrouteservice-py

* example.ipynb python notebook to test Optimization Routing by ors python binding

```bash
pip install openrouteservice
pip install --user jupyterlab
cd examples
jupyter lab
```
