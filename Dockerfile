FROM node
WORKDIR /usr/src/app
COPY . .
RUN yarn && yarn build
EXPOSE $SERVER_PORT