import { Context } from '../utils'

export const Query = {
  coin(parent, { coinId }, ctx: Context) {
    return ctx.prisma.coin({ coinId })
  },

  coins(parent, args, ctx: Context) {
    return ctx.prisma.coins
  },

  searchCoin(parent, { text }, ctx: Context) {
    const where = {
      coinId_contains: text
    }

    return ctx.prisma.coins({ where })
  },

  syncCoins(parent, args, ctx: Context) {
    return
  }
}
