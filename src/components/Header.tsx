'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cart';
import { ShoppingBag, Sparkles, Flame, Zap } from 'lucide-react';

export default function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());

  return (
    <header className="sticky top-0 z-50 border-b-2 border-primary/40 bg-gradient-to-r from-background/95 via-primary/5 to-background/95 backdrop-blur-md shadow-2xl shadow-primary/10">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Flame className="h-8 w-8 text-secondary animate-pulse filter drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
            <Sparkles
              className="h-5 w-5 text-primary absolute -top-1 -right-1 animate-spin"
              style={{ animationDuration: '3s' }}
            />
            <Zap className="h-4 w-4 text-pink-400 absolute -bottom-1 -left-1 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <span className="font-mystical text-3xl text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary group-hover:from-secondary group-hover:via-primary group-hover:to-pink-500 transition-all duration-500 filter drop-shadow-[0_0_10px_rgba(147,51,234,0.6)]">
            The Apothecary
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/shop"
            className="text-sm font-cinzel font-semibold text-foreground/90 transition-all duration-300 hover:text-primary hover:drop-shadow-[0_0_12px_rgba(147,51,234,0.8)] hover:scale-110 relative group"
          >
            <span className="relative z-10">Browse Wares</span>
            <span className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded transition-all duration-300"></span>
          </Link>
          <Link
            href="/shop?category=POTIONS"
            className="text-sm font-cinzel font-semibold text-foreground/90 transition-all duration-300 hover:text-purple-400 hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.8)] hover:scale-110"
          >
            Potions
          </Link>
          <Link
            href="/shop?category=INGREDIENTS"
            className="text-sm font-cinzel font-semibold text-foreground/90 transition-all duration-300 hover:text-accent hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.8)] hover:scale-110"
          >
            Ingredients
          </Link>
          <Link
            href="/shop?category=SCROLLS"
            className="text-sm font-cinzel font-semibold text-foreground/90 transition-all duration-300 hover:text-secondary hover:drop-shadow-[0_0_12px_rgba(234,179,8,0.8)] hover:scale-110"
          >
            Scrolls
          </Link>
          <Link
            href="/shop?category=TOOLS"
            className="text-sm font-cinzel font-semibold text-foreground/90 transition-all duration-300 hover:text-pink-400 hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.8)] hover:scale-110"
          >
            Tools
          </Link>
        </nav>

        <Link href="/cart">
          <button className="relative bg-gradient-to-r from-card/50 via-primary/20 to-card/50 border-2 border-primary/40 hover:border-secondary hover:bg-gradient-to-r hover:from-primary/20 hover:via-pink-500/20 hover:to-secondary/20 hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 px-4 py-2 rounded-md flex items-center gap-2 group">
            <ShoppingBag className="h-5 w-5 group-hover:animate-pulse" />
            <span className="hidden sm:inline font-cinzel font-semibold">Satchel</span>
            {itemCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-600 text-xs font-bold text-primary-foreground shadow-lg shadow-pink-500/50 animate-pulse border-2 border-background">
                {itemCount}
              </span>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
}
