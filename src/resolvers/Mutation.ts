import { Context } from '../utils'
import { Coin } from '.prisma/client'
import { MutationAddCoinArgs } from '../types'

export const Mutation = {
  async addCoin(parent: Coin, args: MutationAddCoinArgs, ctx: Context) {
    return ctx.prisma.coin.create({
      data: {
        coin_id: args.coinId,
        name: args.name,
        symbol: args.symbol
      }
    })
  }
}
