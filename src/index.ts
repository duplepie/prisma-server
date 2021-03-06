import { GraphQLServer } from 'graphql-yoga'
import { PrismaClient } from '.prisma/client'
import resolvers from './resolvers'

const prisma = new PrismaClient()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
})

server.start(({port: process.env.PORT}), () => console.log(`Server is running on http://localhost:${process.env.PORT}`))
