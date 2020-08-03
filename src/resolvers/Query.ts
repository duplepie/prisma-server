import { ApiCoin, CoinIso, Context } from '../utils'
import { Coin, QueryCoinArgs, QuerySearchCoinArgs } from '../types'

export const Query = {
  async coin(parent: any, args: QueryCoinArgs, ctx: Context) {
    const coin = await ctx.prisma.coin.findOne({
      where: {
        coin_id: args.coinId
      }
    })
    return coin ? CoinIso.get(coin) : coin
  },

  async coins(parent: any, args: any, ctx: Context): Promise<Coin[]> {
    const coins = await ctx.prisma.coin.findMany()
    return coins.map(CoinIso.get)
  },

  async searchCoin(parent: any, args: QuerySearchCoinArgs, ctx: Context): Promise<Coin[]> {
    const coins = await ctx.prisma.coin.findMany({
      where: {
        coin_id: {
          contains: args.text
        }
      }
    })
    return coins.map(CoinIso.get)
  },
}
