// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCoin {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Coin {
  id: ID!
  coinId: String!
  name: String!
  symbol: String!
}

type CoinConnection {
  pageInfo: PageInfo!
  edges: [CoinEdge]!
  aggregate: AggregateCoin!
}

input CoinCreateInput {
  id: ID
  coinId: String!
  name: String!
  symbol: String!
}

type CoinEdge {
  node: Coin!
  cursor: String!
}

enum CoinOrderByInput {
  id_ASC
  id_DESC
  coinId_ASC
  coinId_DESC
  name_ASC
  name_DESC
  symbol_ASC
  symbol_DESC
}

type CoinPreviousValues {
  id: ID!
  coinId: String!
  name: String!
  symbol: String!
}

type CoinSubscriptionPayload {
  mutation: MutationType!
  node: Coin
  updatedFields: [String!]
  previousValues: CoinPreviousValues
}

input CoinSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CoinWhereInput
  AND: [CoinSubscriptionWhereInput!]
  OR: [CoinSubscriptionWhereInput!]
  NOT: [CoinSubscriptionWhereInput!]
}

input CoinUpdateInput {
  coinId: String
  name: String
  symbol: String
}

input CoinUpdateManyMutationInput {
  coinId: String
  name: String
  symbol: String
}

input CoinWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  coinId: String
  coinId_not: String
  coinId_in: [String!]
  coinId_not_in: [String!]
  coinId_lt: String
  coinId_lte: String
  coinId_gt: String
  coinId_gte: String
  coinId_contains: String
  coinId_not_contains: String
  coinId_starts_with: String
  coinId_not_starts_with: String
  coinId_ends_with: String
  coinId_not_ends_with: String
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  symbol: String
  symbol_not: String
  symbol_in: [String!]
  symbol_not_in: [String!]
  symbol_lt: String
  symbol_lte: String
  symbol_gt: String
  symbol_gte: String
  symbol_contains: String
  symbol_not_contains: String
  symbol_starts_with: String
  symbol_not_starts_with: String
  symbol_ends_with: String
  symbol_not_ends_with: String
  AND: [CoinWhereInput!]
  OR: [CoinWhereInput!]
  NOT: [CoinWhereInput!]
}

input CoinWhereUniqueInput {
  id: ID
  coinId: String
}

scalar Long

type Mutation {
  createCoin(data: CoinCreateInput!): Coin!
  updateCoin(data: CoinUpdateInput!, where: CoinWhereUniqueInput!): Coin
  updateManyCoins(data: CoinUpdateManyMutationInput!, where: CoinWhereInput): BatchPayload!
  upsertCoin(where: CoinWhereUniqueInput!, create: CoinCreateInput!, update: CoinUpdateInput!): Coin!
  deleteCoin(where: CoinWhereUniqueInput!): Coin
  deleteManyCoins(where: CoinWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  coin(where: CoinWhereUniqueInput!): Coin
  coins(where: CoinWhereInput, orderBy: CoinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Coin]!
  coinsConnection(where: CoinWhereInput, orderBy: CoinOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoinConnection!
  node(id: ID!): Node
}

type Subscription {
  coin(where: CoinSubscriptionWhereInput): CoinSubscriptionPayload
}
`