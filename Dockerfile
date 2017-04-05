FROM node:6.10

RUN mkdir -p /tmp
WORKDIR /tmp
COPY ./package.json /tmp/
RUN npm install

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/ && \
  chown -R node:node /usr/src/app/
USER node

CMD ["npm", "start"]
