import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  const coin1 = await prisma.coin.create({
    data: {
      coin_id: "testCoin1",
      name: "Test1",
      symbol: "tst1"
    }
  })
  const coin2 = await prisma.coin.create({
    data: {
      coin_id: "testCoin2",
      name: "Test2",
      symbol: "tst2"
    }
  })
  console.log({ coin1, coin2 })
}

main().finally(async () => {
  await prisma.disconnect()
})