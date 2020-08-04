#! /bin/bash
yarn build
heroku container:push --app=martintupy-prisma-server web
heroku container:release --app=martintupy-prisma-server web