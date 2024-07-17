import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteDependentData() {
  await prisma.post.deleteMany({});
  await prisma.user.deleteMany({});
}

deleteDependentData()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });