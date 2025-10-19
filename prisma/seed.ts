import { PrismaClient, Category } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🧙‍♂️ Brewing the base inventory for The Apothecary...');

  // Clear existing data
  await prisma.order.deleteMany();
  await prisma.promotion.deleteMany();
  await prisma.item.deleteMany();

  // Seed Items - Potions & Elixirs
  const potions = await Promise.all([
    prisma.item.create({
      data: {
        name: 'Hangover Heal Draught',
        description: 'Works 40% of the time, every time. Side effects may include temporary blindness and an inexplicable urge to apologize to trees.',
        category: Category.POTIONS,
        priceGold: 5,
        priceSilver: 50,
        priceCopper: 0,
        imageUrl: '/images/1.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Potion of Mild Courage',
        description: 'Grants the bravery to speak to your crush or ask for a raise. Does not guarantee success in either endeavor.',
        category: Category.POTIONS,
        priceGold: 8,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/2.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Elixir of Questionable Healing',
        description: 'Heals wounds. Possibly. We recommend keeping bandages nearby just in case.',
        category: Category.POTIONS,
        priceGold: 12,
        priceSilver: 75,
        priceCopper: 0,
        imageUrl: '/images/3.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Draught of Temporary Intelligence',
        description: 'Makes you feel smarter for about 20 minutes. Perfect for important meetings or bluffing at cards.',
        category: Category.POTIONS,
        priceGold: 15,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/4.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Love Potion No. 8¾',
        description: 'Not quite as effective as No. 9, but significantly less illegal in most kingdoms.',
        category: Category.POTIONS,
        priceGold: 20,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/5.jpeg',
      },
    }),
  ]);

  // Seed Items - Herbal Ingredients
  const ingredients = await Promise.all([
    prisma.item.create({
      data: {
        name: 'Nightshade Sprigs',
        description: 'Do NOT ingest raw. Seriously. We cannot stress this enough. The liability waiver is in your satchel.',
        category: Category.INGREDIENTS,
        priceGold: 0,
        priceSilver: 85,
        priceCopper: 0,
        imageUrl: '/images/6.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Mandrake Root Shavings',
        description: 'Harvested with earplugs. The screaming has mostly stopped. Mostly.',
        category: Category.INGREDIENTS,
        priceGold: 3,
        priceSilver: 50,
        priceCopper: 0,
        imageUrl: '/images/7.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Moon Dust (Genuine)',
        description: 'Collected under a full moon by our most agile apprentice. Certificate of authenticity not included because who would fake moon dust?',
        category: Category.INGREDIENTS,
        priceGold: 7,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/8.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Dragon Scales (Shed Naturally)',
        description: 'We promise these were shed naturally. The scorch marks are purely coincidental.',
        category: Category.INGREDIENTS,
        priceGold: 25,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/9.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Pixie Dust',
        description: 'Ethically sourced from consenting pixies. Makes things sparkle. That\'s literally it.',
        category: Category.INGREDIENTS,
        priceGold: 4,
        priceSilver: 25,
        priceCopper: 0,
        imageUrl: '/images/10.jpeg',
      },
    }),
  ]);

  // Seed Items - Spell Scrolls
  const scrolls = await Promise.all([
    prisma.item.create({
      data: {
        name: 'Scroll of Mildly Impressive Sparkles',
        description: 'Perfect for parties or distracting guards. Will not actually help in combat.',
        category: Category.SCROLLS,
        priceGold: 2,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/11.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Incantation of Slightly Warmer Hands',
        description: 'Ideal for cold winter nights or awkward handshakes. Duration: 15 minutes.',
        category: Category.SCROLLS,
        priceGold: 1,
        priceSilver: 50,
        priceCopper: 0,
        imageUrl: '/images/12.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Spell of Minor Inconvenience',
        description: 'Causes your target\'s shoelaces to come untied. Repeatedly. Pure chaos.',
        category: Category.SCROLLS,
        priceGold: 3,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/13.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Charm of Adequate Protection',
        description: 'Provides protection equivalent to wearing a thick sweater. Better than nothing!',
        category: Category.SCROLLS,
        priceGold: 6,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/14.jpeg',
      },
    }),
  ]);

  // Seed Items - Alchemy Tools
  const tools = await Promise.all([
    prisma.item.create({
      data: {
        name: 'Beginner\'s Brass Cauldron',
        description: 'Warranty not included. Previous owner\'s experiments may have left residual curses.',
        category: Category.TOOLS,
        priceGold: 35,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/15.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Mortar of Infinite Regret',
        description: 'Grinds ingredients to a fine powder. Named for the regret you\'ll feel when you realize how long grinding takes.',
        category: Category.TOOLS,
        priceGold: 10,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/16.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Stirring Rod (Slightly Enchanted)',
        description: 'Stirs on its own! Occasionally in the wrong direction, but that\'s half the fun.',
        category: Category.TOOLS,
        priceGold: 8,
        priceSilver: 50,
        priceCopper: 0,
        imageUrl: '/images/17.jpeg',
      },
    }),
    prisma.item.create({
      data: {
        name: 'Alchemist\'s Measuring Vials',
        description: 'Set of 7 vials in various sizes. One is definitely cursed but we\'re not sure which.',
        category: Category.TOOLS,
        priceGold: 5,
        priceSilver: 0,
        priceCopper: 0,
        imageUrl: '/images/18.jpeg',
      },
    }),
  ]);

  console.log('✅ Base inventory brewed successfully!');
  console.log(`   - ${potions.length} potions & elixirs`);
  console.log(`   - ${ingredients.length} herbal ingredients`);
  console.log(`   - ${scrolls.length} spell scrolls`);
  console.log(`   - ${tools.length} alchemy tools`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('💥 Brewing mishap:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
