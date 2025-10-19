import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatPrice(gold: number, silver: number, copper: number): string {
  const parts: string[] = [];
  
  if (gold > 0) parts.push(`${gold} Gold`);
  if (silver > 0) parts.push(`${silver} Silver`);
  if (copper > 0) parts.push(`${copper} Copper`);
  
  return parts.length > 0 ? parts.join(', ') : '0 Copper';
}

export function applyDiscount(
  price: { gold: number; silver: number; copper: number },
  discountPercent: number
): { gold: number; silver: number; copper: number } {
  const totalCopper = price.copper + (price.silver * 100) + (price.gold * 1000);
  const discountedCopper = Math.floor(totalCopper * (1 - discountPercent / 100));
  
  const gold = Math.floor(discountedCopper / 1000);
  const silver = Math.floor((discountedCopper % 1000) / 100);
  const copper = discountedCopper % 100;
  
  return { gold, silver, copper };
}
