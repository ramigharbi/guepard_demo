'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import PromotionBanner from '@/components/PromotionBanner';
import type { Item, Promotion } from '@/lib/types';
import { CATEGORY_LABELS } from '@/lib/types';

export default function ShopPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [loading, setLoading] = useState(true);
  const searchParams = useSearchParams();

  // Read category from URL on mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && ['POTIONS', 'INGREDIENTS', 'SCROLLS', 'TOOLS'].includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [itemsRes, promosRes] = await Promise.all([
          fetch('/api/items'),
          fetch('/api/promotions'),
        ]);

        const itemsData = await itemsRes.json();
        const promosData = await promosRes.json();

        setItems(itemsData);
        setPromotions(promosData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredItems = selectedCategory === 'ALL'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  // Apply promotions to items
  const itemsWithDiscounts = filteredItems.map((item) => {
    const applicablePromo = promotions.find(
      (promo) =>
        promo.appliesToCategory === item.category ||
        promo.appliesToCategory === null
    );
    return {
      ...item,
      discount: applicablePromo?.discountValue,
    };
  });

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="text-8xl mb-4 animate-magical-spin inline-block">🌀</div>
        <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary font-mystical animate-pulse">
          Brewing the mystical shelves...
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Epic Page Header */}
      <div className="text-center mb-12 relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 text-3xl animate-float opacity-50">✨</div>
          <div className="absolute top-0 right-1/4 text-3xl animate-float opacity-50" style={{ animationDelay: '1s' }}>🔮</div>
        </div>
        <h1 className="text-6xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-4 text-shadow-epic relative">
          The Shelves of Wonder
        </h1>
        <div className="h-1 w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6 rounded-full shadow-lg shadow-primary/50"></div>
        <p className="text-xl text-muted-foreground font-cinzel">
          Browse our curated collection of <span className="text-secondary font-bold">mystical wares</span>
        </p>
      </div>

      {/* Active Promotions */}
      <PromotionBanner promotions={promotions} />

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setSelectedCategory('ALL')}
          className={`px-6 py-3 rounded-lg font-cinzel font-bold transition-all duration-300 border-2 relative overflow-hidden group ${
            selectedCategory === 'ALL'
              ? 'bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-primary-foreground border-primary shadow-2xl shadow-primary/50 scale-105'
              : 'bg-card/50 text-foreground border-border hover:bg-muted hover:border-primary/50 hover:scale-105'
          }`}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
          <span className="relative z-10">All Items</span>
        </button>
        {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`px-6 py-3 rounded-lg font-cinzel font-bold transition-all duration-300 border-2 relative overflow-hidden group ${
              selectedCategory === key
                ? 'bg-gradient-to-r from-primary via-purple-600 to-pink-600 text-primary-foreground border-primary shadow-2xl shadow-primary/50 scale-105'
                : 'bg-card/50 text-foreground border-border hover:bg-muted hover:border-primary/50 hover:scale-105'
            }`}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
            <span className="relative z-10">{label}</span>
          </button>
        ))}
      </div>

      {/* Products Grid */}
      {itemsWithDiscounts.length === 0 ? (
        <div className="text-center py-20">
          <div className="text-7xl mb-4 animate-pulse-glow">🤷‍♂️</div>
          <p className="text-2xl text-muted-foreground font-cinzel">
            No items found in this mystical category
          </p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {itemsWithDiscounts.map((item) => (
            <ProductCard key={item.id} item={item} discount={item.discount} />
          ))}
        </div>
      )}
    </div>
  );
}
