import { PrismaClient } from '.prisma/client'

import { Iso } from 'monocle-ts'
import { Coin } from './types'
import { Coin as CoinDb } from '.prisma/client'

export interface Context {
  prisma: PrismaClient
}

export const CoinIso = new Iso<CoinDb, Coin>(
  coin => ({
    id: coin.id,
    coinId: coin.coin_id,
    name: coin.name,
    symbol: coin.symbol
  } as Coin),
  coin => ({
    id: coin.id,
    coin_id: coin.coinId,
    name: coin.name,
    symbol: coin.symbol
  } as CoinDb)
)
