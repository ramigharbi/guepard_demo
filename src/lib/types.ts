export interface Item {
  id: string;
  name: string;
  description: string;
  category: 'POTIONS' | 'INGREDIENTS' | 'SCROLLS' | 'TOOLS';
  priceGold: number;
  priceSilver: number;
  priceCopper: number;
  imageUrl?: string | null;
}

export interface Promotion {
  id: string;
  name: string;
  description: string;
  discountValue: number;
  appliesToCategory: 'POTIONS' | 'INGREDIENTS' | 'SCROLLS' | 'TOOLS' | null;
  startDate: Date | null;
  endDate: Date | null;
  isActive: boolean;
}

export interface Order {
  id: string;
  itemsSnapshot: any;
  totalGold: number;
  totalSilver: number;
  totalCopper: number;
  createdAt: Date;
}

export interface Review {
  id: string;
  itemId: string;
  authorName: string;
  rating: number;
  title: string;
  comment: string;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const CATEGORY_LABELS: Record<string, string> = {
  POTIONS: 'Potions & Elixirs',
  INGREDIENTS: 'Herbal Ingredients',
  SCROLLS: 'Spell Scrolls',
  TOOLS: 'Alchemy Tools',
};

export const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  POTIONS: 'Bubbling brews and questionable concoctions',
  INGREDIENTS: 'Raw materials for your experiments',
  SCROLLS: 'Magical incantations of varying effectiveness',
  TOOLS: 'Essential equipment for the aspiring alchemist',
};
