FROM ubuntu:18.04

RUN	apt-get update -qq

RUN apt-get install -qq \
	git-core \
	npm \
	nodejs

RUN	git clone https://github.com/DigitalCommonsLab/openrouteservice-app.git /ors-app
#RUN git clone https://github.com/GIScience/openrouteservice-app.git /ors-app && \
#	cd /ors-app && \
#	git fetch --tags && \
#	git checkout -q $ORSAPP_RELEASE

WORKDIR /ors-app

RUN	npm install -g bower
RUN	npm install -g grunt-cli
RUN	npm install
RUN	node_modules/bower/bin/bower install --allow-root
RUN	cd /ors-app/bower_components/angularjs-slider
RUN	cd /ors-app && npm install

# RUN cd /ors-app && \
# 	grunt less:development && \
# 	grunt prettier && \
# 	grunt copy:sliderLess && \
# 	grunt run_grunt:sliderMakeCss && \
# 	grunt browserify:turf && \
# 	grunt ngtemplates && \
# 	grunt ngconstant:local

EXPOSE 3035

CMD ["grunt", "ors"]
