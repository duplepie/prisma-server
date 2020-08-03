import { ApiCoin, CoinIso, Context } from '../utils'
import { Coin, MutationAddCoinArgs } from '../types'
import fetch from 'node-fetch'

export const Mutation = {
  async addCoin(parent: any, args: MutationAddCoinArgs, ctx: Context): Promise<Coin> {
    const coin = await ctx.prisma.coin.create({
      data: {
        coin_id: args.coinId,
        name: args.name,
        symbol: args.symbol
      }
    })
    return CoinIso.get(coin)
  },

  async syncCoins(parent: any, args: any, ctx: Context): Promise<Coin[]> {
    return fetch('https://api.coingecko.com/api/v3/coins/list').then(async response => {
      const apiCoins: ApiCoin[] = await response.json()
      return Promise.all(apiCoins.map(apiCoin => ({
        coinId: apiCoin.id,
        name: apiCoin.name,
        symbol: apiCoin.symbol
      } as MutationAddCoinArgs)).map(coin => Mutation.addCoin(parent, coin, ctx)))
    })
  }
}
