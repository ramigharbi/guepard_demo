'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import type { Item } from '@/lib/types';
import { useState } from 'react';
import { Minus, Plus, ShoppingBag, Sparkles } from 'lucide-react';

interface ProductCardProps {
  item: Item;
  discount?: number;
}

export default function ProductCard({ item, discount }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    setIsAdding(true);
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: item.id,
        name: item.name,
        description: item.description,
        category: item.category,
        priceGold: item.priceGold,
        priceSilver: item.priceSilver,
        priceCopper: item.priceCopper,
        discount,
      });
    }
    setTimeout(() => {
      setIsAdding(false);
      setQuantity(1);
    }, 500);
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => quantity > 1 && setQuantity(quantity - 1);

  const displayPrice = discount
    ? formatPrice(
        Math.floor(item.priceGold * (1 - discount / 100)),
        Math.floor(item.priceSilver * (1 - discount / 100)),
        Math.floor(item.priceCopper * (1 - discount / 100))
      )
    : formatPrice(item.priceGold, item.priceSilver, item.priceCopper);

  return (
    <div className="group h-full relative transition-all duration-500 hover:shadow-2xl hover:shadow-primary/40 hover:border-primary hover:-translate-y-2 flex flex-col bg-gradient-to-br from-card/90 via-card/80 to-primary/5 backdrop-blur overflow-hidden border-2 border-border rounded-lg">
      {/* Magical shimmer effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
      
      {/* Discount Badge */}
      {discount && discount > 0 && (
        <div className="absolute right-2 top-2 bg-gradient-to-r from-pink-600 to-purple-600 text-primary-foreground px-3 py-1 rounded-full font-bold text-xs z-10 shadow-lg shadow-pink-500/50 flex items-center gap-1 animate-pulse border-2 border-pink-400/50">
          -{discount}% <Sparkles className="h-3 w-3" />
        </div>
      )}

      {/* Product Image - clickable */}
      <Link href={`/product/${item.id}`}>
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-muted via-primary/10 to-muted/50 cursor-pointer">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2 filter group-hover:brightness-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-7xl filter drop-shadow-[0_0_20px_rgba(147,51,234,0.5)] group-hover:scale-110 transition-transform duration-500">
            {item.category === 'POTIONS' && '🧪'}
            {item.category === 'INGREDIENTS' && '🌿'}
            {item.category === 'SCROLLS' && '📜'}
            {item.category === 'TOOLS' && '⚗️'}
          </div>
        )}
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col relative">
        <h3 className="mb-2 font-cinzel text-lg font-bold text-balance group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-pink-500 group-hover:to-secondary transition-all duration-300">
          {item.name}
        </h3>
        <p className="line-clamp-2 text-sm text-muted-foreground leading-relaxed mb-4 font-cinzel">
          {item.description}
        </p>

        {/* Price */}
        <div className="mt-auto">
          {discount && discount > 0 ? (
            <div className="mb-3">
              <p className="text-xs text-muted-foreground line-through">
                {formatPrice(item.priceGold, item.priceSilver, item.priceCopper)}
              </p>
              <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-400 to-secondary animate-shimmer">
                {displayPrice}
              </p>
            </div>
          ) : (
            <p className="text-lg font-bold text-secondary drop-shadow-[0_0_12px_rgba(234,179,8,0.5)] mb-3 font-cinzel">
              {displayPrice}
            </p>
          )}

          {/* Quantity Controls */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center border-2 border-border group-hover:border-primary/50 rounded-md bg-background/50 backdrop-blur transition-all duration-300">
              <button
                className="h-9 w-9 rounded-r-none hover:bg-primary/30 hover:text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                onClick={decrementQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="flex h-9 w-12 items-center justify-center border-x-2 border-border group-hover:border-primary/50 text-sm font-bold transition-colors">
                {quantity}
              </div>
              <button
                className="h-9 w-9 rounded-l-none hover:bg-primary/30 hover:text-primary transition-colors flex items-center justify-center"
                onClick={incrementQuantity}
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isAdding}
              className="flex-1 bg-gradient-to-r from-primary via-purple-600 to-pink-600 hover:from-purple-600 hover:via-pink-600 hover:to-primary text-primary-foreground font-bold py-2 px-4 rounded-md transition-all duration-500 hover:shadow-xl hover:shadow-primary/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000"></span>
              <ShoppingBag className="h-4 w-4 relative z-10" />
              <span className="hidden sm:inline relative z-10 font-cinzel">Add</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
