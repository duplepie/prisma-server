FROM node
WORKDIR /usr/src/server
COPY . .
RUN yarn && yarn build
EXPOSE $SERVER_PORT