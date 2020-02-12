FROM ubuntu:18.04

ENV VROOM_BRANCH master
RUN mkdir -p /src && \
	cd /src && \
	apt-get update && \
	apt-get install -qq \
		build-essential \
		g++ \
		git-core \
		libboost-all-dev \
		make \
		pkg-config && \
	git clone https://github.com/GIScience/vroom.git && \
	cd /src/vroom && \
	mkdir -p /src/vroom/bin && \
	cd /src/vroom/src && \
	make && \
	cp /src/vroom/bin/vroom /usr/local/bin && \
	apt-get clean && \
	cd /

RUN git clone https://github.com/VROOM-Project/vroom-express.git /vroom-express

#RUN mkdir /vroom-express
#ADD ./vroom-express /vroom-express

#TODO volume

ENV VROOM_EXPRESS_BRANCH master
RUN apt-get update && \
	apt-get install -qq \
		npm \
		nodejs && \
	cd /vroom-express && \
	npm install && \
	apt-get clean

#COPY config.js /vroom-express/src/config.js
#used volumes on run

EXPOSE 3000
CMD ["npm", "start", "--prefix", "/vroom-express"]

