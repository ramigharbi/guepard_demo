import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('☀️ Applying the Winter Solstice Sale...');

  // Create Winter Solstice promotion for Potions
  await prisma.promotion.upsert({
    where: { id: 'solstice-sale-potions' },
    update: {
      name: 'Winter Solstice Brew Sale',
      description: 'As the nights grow long, so do our discounts on warming potions!',
      discountValue: 25, // 20% off
      appliesToCategory: Category.POTIONS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000), // 14 days
    },
    create: {
      id: 'solstice-sale-potions',
      name: 'Winter Solstice Brew Sale',
      description: 'As the nights grow long, so do our discounts on warming potions!',
      discountValue: 25,
      appliesToCategory: Category.POTIONS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
  });

  // Create bonus promotion for Tools
  await prisma.promotion.upsert({
    where: { id: 'solstice-sale-tools' },
    update: {
      name: 'Craftsman\'s Solstice Special',
      description: 'Equip yourself for winter brewing with discounted tools!',
      discountValue: 10, // 10% off
      appliesToCategory: Category.TOOLS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
    create: {
      id: 'solstice-sale-tools',
      name: 'Craftsman\'s Solstice Special',
      description: 'Equip yourself for winter brewing with discounted tools!',
      discountValue: 10,
      appliesToCategory: Category.TOOLS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
    },
  });

  console.log('✅ Winter Solstice Sale activated!');
  console.log('   - 20% off all Potions');
  console.log('   - 10% off all Tools');
  console.log('   - Duration: 14 days');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('💥 Solstice sale mishap:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
