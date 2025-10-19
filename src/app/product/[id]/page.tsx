'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { ArrowLeft, ShoppingBag, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/cart';
import Reviews from '@/components/Reviews';
import type { Item } from '@/lib/types';
import { CATEGORY_LABELS } from '@/lib/types';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const [item, setItem] = useState<Item | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore((state) => state.addItem);

  useEffect(() => {
    async function fetchItem() {
      try {
        const res = await fetch('/api/items');
        const items: Item[] = await res.json();
        const found = items.find((i) => i.id === params.id);
        setItem(found || null);
      } catch (error) {
        console.error('Error fetching item:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchItem();
  }, [params.id]);

  const handleAddToCart = () => {
    if (item) {
      for (let i = 0; i < quantity; i++) {
        addItem(item);
      }
      // Show success feedback
      const button = document.getElementById('add-to-cart-btn');
      if (button) {
        button.textContent = '✓ Added!';
        setTimeout(() => {
          button.textContent = 'Add to Satchel';
        }, 2000);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-8xl mb-4 animate-magical-spin inline-block">🌀</div>
          <p className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary font-mystical animate-pulse">
            Summoning item details...
          </p>
        </div>
      </div>
    );
  }

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="text-8xl mb-4">🔮</div>
        <h1 className="text-4xl font-mystical font-black text-foreground mb-4">Item Not Found</h1>
        <p className="text-muted-foreground font-cinzel mb-8">
          This mystical item has vanished into the ethereal plane.
        </p>
        <button
          onClick={() => router.push('/shop')}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-cinzel font-bold hover:bg-primary/90 transition-all"
        >
          <ArrowLeft className="h-5 w-5" />
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back Button */}
      <button
        onClick={() => router.push('/shop')}
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 font-cinzel"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Shop
      </button>

      {/* Product Details */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        {/* Image */}
        <div className="relative">
          <div className="relative aspect-square bg-gradient-to-br from-card/80 via-primary/20 to-card/80 backdrop-blur rounded-lg border-2 border-primary/30 overflow-hidden shadow-2xl shadow-primary/20">
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex items-center justify-center h-full text-9xl">
                {item.category === 'POTIONS' && '🧪'}
                {item.category === 'INGREDIENTS' && '🌿'}
                {item.category === 'SCROLLS' && '📜'}
                {item.category === 'TOOLS' && '⚗️'}
              </div>
            )}
            <div className="absolute top-4 right-4">
              <Sparkles className="h-8 w-8 text-secondary animate-pulse" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-6">
          <div>
            <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-cinzel font-bold rounded-full border border-primary/40 mb-3">
              {CATEGORY_LABELS[item.category]}
            </div>
            <h1 className="text-5xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-4 text-shadow-epic">
              {item.name}
            </h1>
            <p className="text-lg text-foreground/90 leading-relaxed font-cinzel">
              {item.description}
            </p>
          </div>

          {/* Price */}
          <div className="bg-gradient-to-br from-card/80 via-secondary/10 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-secondary/30">
            <p className="text-sm text-muted-foreground font-cinzel mb-2">Price:</p>
            <div className="flex items-baseline gap-3">
              {item.priceGold > 0 && (
                <span className="text-4xl font-bold text-secondary font-mystical">
                  {item.priceGold} Gold
                </span>
              )}
              {item.priceSilver > 0 && (
                <span className="text-2xl font-semibold text-foreground/70 font-cinzel">
                  {item.priceSilver} Silver
                </span>
              )}
              {item.priceCopper > 0 && (
                <span className="text-xl text-muted-foreground font-cinzel">
                  {item.priceCopper} Copper
                </span>
              )}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur p-6 rounded-lg border border-border/50 space-y-4">
            <div className="flex items-center gap-4">
              <label className="text-sm font-cinzel font-semibold text-foreground">
                Quantity:
              </label>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-8 h-8 bg-card border border-border rounded hover:bg-muted transition-colors flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold font-cinzel">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-8 h-8 bg-card border border-border rounded hover:bg-muted transition-colors flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <button
              id="add-to-cart-btn"
              onClick={handleAddToCart}
              className="w-full group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-primary text-primary-foreground font-bold text-lg px-8 py-4 rounded-lg transition-all duration-500 hover:scale-105 border-2 border-primary/50 shadow-2xl shadow-primary/50 hover:shadow-pink-500/50 relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></span>
              <ShoppingBag className="h-6 w-6 animate-pulse" />
              <span className="font-mystical">Add to Satchel</span>
            </button>
          </div>

          {/* Mystical Warning */}
          <div className="bg-purple-950/30 border border-purple-600/30 rounded-lg p-4">
            <p className="text-sm text-purple-200/80 font-cinzel italic">
              ⚠️ All sales final. The Apothecary assumes no liability for unintended transmutations, 
              spontaneous combustion, or temporary invisibility.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-2 text-shadow-epic">
            Adventurer Reviews
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full shadow-lg shadow-primary/50"></div>
        </div>

        <Reviews itemId={item.id} />
      </div>
    </div>
  );
}
