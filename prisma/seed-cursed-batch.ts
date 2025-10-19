import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('💀 Applying the Cursed Batch prices... (This will end badly)');

  // Get all items and multiply their prices by 10 (cursed pricing!)
  const allItems = await prisma.item.findMany();

  for (const item of allItems) {
    await prisma.item.update({
      where: { id: item.id },
      data: {
        priceGold: item.priceGold * 10,
        priceSilver: item.priceSilver * 10,
        priceCopper: item.priceCopper * 10,
      },
    });
  }

  console.log('💥 Cursed batch applied! All prices multiplied by 10!');
  console.log('⚠️  This is a disaster. Use Guepard snapshot revert to fix this!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('💥 Cursed batch mishap:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
