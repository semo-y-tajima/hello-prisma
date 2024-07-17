import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function dropTables() {
  await prisma.$executeRaw`DROP TABLE IF EXISTS "User" CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Post" CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Comment" CASCADE;`;
  await prisma.$executeRaw`DROP TABLE IF EXISTS "Category" CASCADE;`;
}

dropTables()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });