import { Context } from '../utils'

export const Mutation = {
  async addCoin(parent, { coinId, symbol, name }, ctx: Context, info) {
    return ctx.prisma.createCoin({
      coinId,
      symbol,
      name
    })
  }
}
