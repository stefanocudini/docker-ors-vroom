# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
ARG BASE_CONTAINER=jupyter/minimal-notebook
ARG NB_UID=1001

FROM $BASE_CONTAINER

USER root

# ffmpeg for matplotlib anim
RUN apt-get update && \
    apt-get install -y --no-install-recommends curl net-tools iputils-ping ffmpeg && \
    rm -rf /var/lib/apt/lists/*

USER $NB_UID

# Install facets which does not have a pip or conda package at the moment
RUN fix-permissions /home/$NB_USER

RUN pip install openrouteservice
RUN pip install folium
RUN pip install requests
RUN pip install polyline

#TODO add ping for tests

#COPY povo.ipynb .
#COPY povo.geojson .

#TODO CMD ["echo","STARTED JUPYTER at http://localhost:8888/"]
