FROM ubuntu:18.04

RUN	apt-get update -qq

RUN	apt-get install -qq \
	git-core \
	npm \
	nodejs 

#PATCH https://github.com/npm/cli/issues/681
RUN npm install -g npm@latest

RUN	git clone https://github.com/DigitalCommonsLab/vroom-frontend.git /vroom-app

WORKDIR /vroom-app

RUN	npm install && npm run build

RUN mv bundle.js src/map.js

EXPOSE 80

CMD ["npm","run","serve"]
