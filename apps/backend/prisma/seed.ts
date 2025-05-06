import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const categories = ['Alimentação', 'Transporte', 'Saúde', 'Lazer', 'Outros'];
  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }
}

void (async () => {
  try {
    await main();
  } catch (error) {
    console.error('Error seeding categories:', error);
  } finally {
    await prisma.$disconnect();
  }
})();

// This script seeds the database with initial data. It creates a set of categories
// if they do not already exist. The categories are 'Alimentação', 'Transporte',
// 'Saúde', 'Lazer', and 'Outros'. The script uses Prisma Client to interact with
// the database.
