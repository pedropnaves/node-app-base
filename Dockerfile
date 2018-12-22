#################
# BUILD/PACKAGE #
#################
FROM node:8.14.1-alpine

ENV APP_HOME "/opt/projects/nodejs"
ADD package.json /tmp/package.json
RUN cd /tmp && npm install && npm install pm2 -g
RUN mkdir -p ${APP_HOME} && cp -a /tmp/node_modules ${APP_HOME}/

WORKDIR ${APP_HOME}
ADD ./ ${APP_HOME}

RUN export NODE_ENV= \
    && rm -rf target \
    && npm run build \
    && cp -a ./bin target \
    && cp -a ./app.js target \
    && cp -a ./.env target

ENV NODEJS_PORT 3000
EXPOSE ${NODEJS_PORT}

ENTRYPOINT [ "/bin/sh" ,"/opt/projects/nodejs/entrypoint.sh" ]

