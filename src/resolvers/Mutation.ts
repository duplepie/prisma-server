import { ApiCoin, CoinIso, Context } from '../utils'
import { Coin, MutationAddCoinArgs } from '../types'
import fetch from 'node-fetch'

export const Mutation = {
  async addCoin(parent: any, args: MutationAddCoinArgs, ctx: Context): Promise<Coin | null> {
    const foundCoin = await ctx.prisma.coin.findOne({
      where: {
        coin_id: args.coinId
      }
    })
    if (!!foundCoin) {
      return null
    } else {
      const coin = await ctx.prisma.coin.create({
        data: {
          coin_id: args.coinId,
          name: args.name,
          symbol: args.symbol
        }
      })
      return CoinIso.get(coin)
    }
  },

  async syncCoins(parent: any, args: any, ctx: Context) {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/list')
    const apiCoins: ApiCoin[] = await res.json()
    const coins = await Promise.all(apiCoins.map(apiCoin => {
      const args = {
        coinId: apiCoin.id,
        name: apiCoin.name,
        symbol: apiCoin.symbol
      } as MutationAddCoinArgs
      return Mutation.addCoin(parent, args, ctx)
    }))
    return coins.filter(coin => !!coin) //as Coin[]
  }
}
