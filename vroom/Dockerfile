FROM ubuntu:18.04

RUN	apt-get update
RUN mkdir -p /src
RUN cd /src

ENV VROOM_BRANCH master
RUN	apt-get install -qq \
		build-essential \
		g++ \
		git-core \
		libboost-all-dev \
		make \
		pkg-config && \
	git clone https://github.com/GIScience/vroom.git /src/vroom && \
	mkdir -p /src/vroom/bin && \
	cd /src/vroom/src && \
	make && \
	cp /src/vroom/bin/vroom /usr/local/bin/

RUN	cd /

ENV VROOM_EXPRESS_BRANCH master
#RUN apt-get update && \
RUN	apt-get install -qq \
		npm \
		nodejs && \
	git clone https://github.com/VROOM-Project/vroom-express.git /vroom-express && \
	cd /vroom-express && \
	npm install

#COPY config.js /vroom-express/src/config.js

RUN	apt-get clean && cd /

EXPOSE 3000
CMD ["npm", "start", "--prefix", "/vroom-express"]
