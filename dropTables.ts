import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function dropTables() {
  await prisma.$executeRaw`DROP TABLE IF EXISTS "User";`
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Post";`
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Comment";`
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Category";`
}

dropTables()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });