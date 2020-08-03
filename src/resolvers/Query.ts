import { Context } from '../utils'
import { Coin, QuerySearchCoinArgs } from '../types'

export const Query = {
  coin(parent: Coin, coinId: string, ctx: Context) {
    return ctx.prisma.coin.findOne({
      where: {
        coin_id: coinId
      }
    })
  },

  async coins(parent: Coin, args: any, ctx: Context): Promise<Coin[]> {
    const coins = await ctx.prisma.coin.findMany()
    return coins.map(coin => ({
      id: coin.id,
      coinId: coin.coin_id,
      name: coin.name,
      symbol: coin.symbol
    } as Coin))
  },

  async searchCoin(parent: Coin, args: QuerySearchCoinArgs, ctx: Context): Promise<Coin[]> {
    const coins = await ctx.prisma.coin.findMany({
      where: {
        coin_id: {
          contains: args.text
        }
      }
    })
    return coins.map(coin => ({
      id: coin.id,
      coinId: coin.coin_id,
      name: coin.name,
      symbol: coin.symbol
    } as Coin))
  },

  syncCoins(parent: Coin, args: any, ctx: Context) {
    return
  }
}
