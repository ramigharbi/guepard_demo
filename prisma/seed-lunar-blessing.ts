import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌙 Applying the Lunar Blessing promotion...');

  // Create or update Lunar Blessing promotion
  await prisma.promotion.upsert({
    where: { id: 'lunar-blessing-promo' },
    update: {
      name: 'Lunar Blessing',
      description: 'The moon smiles upon moon-touched ingredients. Blessed be the savings!',
      discountValue: 15, // 15% off
      appliesToCategory: Category.INGREDIENTS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
    },
    create: {
      id: 'lunar-blessing-promo',
      name: 'Lunar Blessing',
      description: 'The moon smiles upon moon-touched ingredients. Blessed be the savings!',
      discountValue: 15,
      appliesToCategory: Category.INGREDIENTS,
      isActive: true,
      startDate: new Date(),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    },
  });

  console.log('✅ Lunar Blessing promotion activated!');
  console.log('   - 15% discount on all Ingredients');
  console.log('   - Duration: 7 days');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('💥 Lunar blessing mishap:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
