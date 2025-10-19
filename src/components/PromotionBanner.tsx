import type { Promotion } from '@/lib/types';
import { CATEGORY_LABELS } from '@/lib/types';
import { Sparkles, Zap, Star } from 'lucide-react';

interface PromotionBannerProps {
  promotions: Promotion[];
}

export default function PromotionBanner({ promotions }: PromotionBannerProps) {
  if (promotions.length === 0) return null;

  return (
    <div className="mb-8 space-y-4">
      {promotions.map((promo) => (
        <div
          key={promo.id}
          className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-pink-500/30 to-purple-600/20 border-2 border-primary/50 rounded-lg p-6 shadow-2xl shadow-primary/30 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shimmer" />
          <div className="absolute top-0 left-0 text-6xl opacity-20 animate-float">✨</div>
          <div className="absolute bottom-0 right-0 text-6xl opacity-20 animate-float" style={{ animationDelay: '1s' }}>🌟</div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-3xl font-mystical font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-500 to-secondary mb-3 flex items-center gap-3">
                <Zap className="h-8 w-8 text-secondary animate-pulse" />
                {promo.name}
                <Star className="h-6 w-6 text-pink-400 animate-spin" style={{ animationDuration: '3s' }} />
              </h3>
              <p className="text-foreground/90 mb-3 text-lg font-cinzel">{promo.description}</p>
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary/30 via-yellow-500/20 to-secondary/30 border-2 border-secondary/50 px-4 py-2 rounded-full backdrop-blur shadow-lg shadow-secondary/20">
                <Sparkles className="h-5 w-5 text-secondary animate-pulse" />
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-400 to-secondary font-mystical">
                  {promo.discountValue}% off
                </span>
                <span className="text-sm text-foreground/80 font-cinzel font-bold">
                  {promo.appliesToCategory
                    ? CATEGORY_LABELS[promo.appliesToCategory]
                    : 'all mystical items'}
                </span>
              </div>
            </div>
            <div className="text-8xl ml-8 animate-pulse-glow relative">
              🎁
              <div className="absolute -top-2 -right-2 text-3xl animate-magical-spin">✨</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
