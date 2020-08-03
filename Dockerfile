FROM node
WORKDIR /usr/src/server
RUN yarn
COPY . .
RUN yarn build
EXPOSE $SERVER_PORT