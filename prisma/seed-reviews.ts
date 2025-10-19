import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const reviews = [
  // Hangover Heal Draught Reviews
  {
    itemName: 'Hangover Heal Draught',
    authorName: 'Barkeep Bronson',
    rating: 5,
    title: 'Tavern Essential!',
    comment: 'I keep a crate of these behind the bar. Adventurers come in after mead-fueled celebrations and leave ready to slay dragons. Best-selling item after ale!',
    isVerified: true,
  },
  {
    itemName: 'Hangover Heal Draught',
    authorName: 'Dwarf Ironbelly',
    rating: 4,
    title: 'Works on dwarf ale hangovers',
    comment: 'If it can cure a dwarf\'s hangover, it can cure anything. Tastes like peppermint and regret. Highly effective.',
    isVerified: true,
  },
  
  // Potion of Mild Courage Reviews
  {
    itemName: 'Potion of Mild Courage',
    authorName: 'Sir Galahad the Timid',
    rating: 5,
    title: 'Finally Asked for That Raise!',
    comment: 'Drank this before my annual review with the King. Got a 10% raise and new armor allowance! The courage lasted just long enough.',
    isVerified: true,
  },
  {
    itemName: 'Potion of Mild Courage',
    authorName: 'Elara Moonshadow',
    rating: 4,
    title: 'Spoke to my crush!',
    comment: 'Used this to talk to the cute bard at the tavern. We\'re now adventuring partners! The potion gave me just enough confidence.',
    isVerified: true,
  },

  // Elixir of Questionable Healing Reviews
  {
    itemName: 'Elixir of Questionable Healing',
    authorName: 'Bjorn Ironforge',
    rating: 3,
    title: 'Healed... Eventually',
    comment: 'Took three doses to heal a sword wound. It worked, but slowly. Keep bandages handy as the Apothecary recommends!',
    isVerified: true,
  },
  {
    itemName: 'Elixir of Questionable Healing',
    authorName: 'Thalia Stormbringer',
    rating: 4,
    title: 'Better than nothing',
    comment: 'Saved my life after a basilisk encounter. The healing was unpredictable but ultimately effective. Would buy again in emergencies.',
    isVerified: true,
  },

  // Draught of Temporary Intelligence Reviews
  {
    itemName: 'Draught of Temporary Intelligence',
    authorName: 'Pip the Barbarian',
    rating: 5,
    title: 'Me Smart Now!',
    comment: 'Drank potion. Suddenly understood magic theory. Lasted 2 hours. Worth it for solving ancient puzzle. Would drink again.',
    isVerified: true,
  },

  // Love Potion Reviews
  {
    itemName: 'Love Potion No. 8¾',
    authorName: 'Cassandra the Seer',
    rating: 2,
    title: 'Unexpected Results...',
    comment: 'Was supposed to make Baron von Heartwood fall for me. Instead, he fell for my horse. Refund please?',
    isVerified: true,
  },

  // Nightshade Sprigs Reviews
  {
    itemName: 'Nightshade Sprigs',
    authorName: 'Viper the Alchemist',
    rating: 5,
    title: 'Premium Quality Reagent',
    comment: 'Fresh nightshade with potent alkaloids. Perfect for advanced poison brewing. Handle with gloves! The Apothecary sources the best.',
    isVerified: true,
  },

  // Mandrake Root Reviews
  {
    itemName: 'Mandrake Root Shavings',
    authorName: 'Professor Paracelsus',
    rating: 5,
    title: 'Silenced Before Harvesting!',
    comment: 'These mandrake shavings came pre-silenced - no deadly shrieking! Essential for healing potions. My students are grateful.',
    isVerified: true,
  },

  // Moon Dust Reviews
  {
    itemName: 'Moon Dust (Genuine)',
    authorName: 'Silvanus the Herbalist',
    rating: 5,
    title: 'Authentic Lunar Material',
    comment: 'Tested authenticity with lunar resonance spell - 100% genuine! Sparkles beautifully in moonlight potions.',
    isVerified: true,
  },

  // Dragon Scales Reviews
  {
    itemName: 'Dragon Scales (Shed Naturally)',
    authorName: 'Bjorn Ironforge',
    rating: 5,
    title: 'Crafted Legendary Armor!',
    comment: 'Used three of these to forge dragonscale armor. Took 40 hours at the forge, but now I can walk through fire. Worth every copper!',
    isVerified: true,
  },
  {
    itemName: 'Dragon Scales (Shed Naturally)',
    authorName: 'Thalia Stormbringer',
    rating: 5,
    title: 'Ethically Sourced!',
    comment: 'Love that these are naturally shed! No dragons harmed. Perfect for enchanting and the iridescent shimmer is gorgeous.',
    isVerified: true,
  },

  // Pixie Dust Reviews
  {
    itemName: 'Pixie Dust',
    authorName: 'Merlin the Whimsical',
    rating: 4,
    title: 'Makes Everything Sparkle',
    comment: 'Added to levitation potions for that extra magical shimmer. Warning: causes uncontrollable giggling in high doses.',
    isVerified: false,
  },

  // Scroll Reviews
  {
    itemName: 'Scroll of Mildly Impressive Sparkles',
    authorName: 'Gandalf the Beige',
    rating: 5,
    title: 'Perfect for Parties!',
    comment: 'Cast this at the King\'s birthday banquet. Everyone was mildly impressed! The sparkles lasted exactly as advertised.',
    isVerified: true,
  },

  // Charm of Adequate Protection Reviews
  {
    itemName: 'Charm of Adequate Protection',
    authorName: 'Sir Reginald the Cautious',
    rating: 4,
    title: 'Saved My Life (Probably)',
    comment: 'Deflected an orc\'s arrow - mostly. Got a small scratch but would have been much worse. "Adequate" is accurate.',
    isVerified: true,
  },

  // Cauldron Reviews
  {
    itemName: 'Beginner\'s Brass Cauldron',
    authorName: 'Apprentice Alchemist Amy',
    rating: 5,
    title: 'Perfect Starter Cauldron!',
    comment: 'My first cauldron! Heats evenly, easy to clean, and the brass doesn\'t react with most ingredients. Only one minor explosion so far!',
    isVerified: true,
  },

  // Mortar Reviews
  {
    itemName: 'Mortar of Infinite Regret',
    authorName: 'Professor Paracelsus',
    rating: 3,
    title: 'Lives Up to the Name',
    comment: 'Excellent at grinding ingredients, but there\'s this persistent feeling of regret whenever I use it. Still, it gets the job done.',
    isVerified: true,
  },

  // Stirring Rod Reviews
  {
    itemName: 'Stirring Rod (Slightly Enchanted)',
    authorName: 'Wizard Whimsy',
    rating: 5,
    title: 'Stirs Itself!',
    comment: 'The "slight" enchantment means it stirs on its own for 10 minutes. Perfect for multitasking in the laboratory!',
    isVerified: true,
  },
];

async function main() {
  console.log('🌟 Starting review seed...');
  
  // Get all items to match reviews
  const items = await prisma.item.findMany();
  const itemMap = new Map(items.map(item => [item.name, item.id]));

  let created = 0;
  let skipped = 0;

  for (const review of reviews) {
    const itemId = itemMap.get(review.itemName);
    
    if (!itemId) {
      console.log(`⚠️  Item not found: ${review.itemName}`);
      skipped++;
      continue;
    }

    await prisma.review.create({
      data: {
        itemId,
        authorName: review.authorName,
        rating: review.rating,
        title: review.title,
        comment: review.comment,
        isVerified: review.isVerified,
      },
    });

    console.log(`✅ Created review: "${review.title}" by ${review.authorName}`);
    created++;
  }

  console.log(`\n✨ Review seed complete!`);
  console.log(`   Created: ${created} reviews`);
  console.log(`   Skipped: ${skipped} reviews`);
  console.log(`\n📊 Summary:`);
  
  const reviewCount = await prisma.review.count();
  const avgRating = await prisma.review.aggregate({
    _avg: { rating: true },
  });
  
  console.log(`   Total reviews in database: ${reviewCount}`);
  console.log(`   Average rating: ${avgRating._avg.rating?.toFixed(1)} ⭐`);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding reviews:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
