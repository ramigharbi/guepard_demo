'use client';

import { useEffect, useState } from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import type { Review } from '@/lib/types';

interface ReviewsProps {
  itemId: string;
}

export default function Reviews({ itemId }: ReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [averageRating, setAverageRating] = useState<number>(0);
  const [totalReviews, setTotalReviews] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch(`/api/reviews?itemId=${itemId}`);
        const data = await res.json();
        setReviews(data.reviews || []);
        setAverageRating(data.averageRating || 0);
        setTotalReviews(data.totalReviews || 0);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchReviews();
  }, [itemId]);

  const renderStars = (rating: number, size: 'sm' | 'lg' = 'sm') => {
    const sizeClass = size === 'lg' ? 'h-6 w-6' : 'h-4 w-4';
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClass} ${
              star <= rating
                ? 'fill-secondary text-secondary'
                : 'fill-muted text-muted-foreground/30'
            }`}
          />
        ))}
      </div>
    );
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl animate-magical-spin inline-block">✨</div>
        <p className="text-muted-foreground mt-2 font-cinzel">Loading reviews...</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-8 bg-card/30 rounded-lg border border-border">
        <p className="text-muted-foreground font-cinzel">No reviews yet. Be the first to share your experience!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      <div className="bg-gradient-to-br from-card/80 via-primary/10 to-card/80 backdrop-blur p-6 rounded-lg border-2 border-primary/30">
        <div className="flex items-center gap-6">
          <div className="text-center">
            <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-pink-500 font-mystical">
              {averageRating.toFixed(1)}
            </div>
            <div className="mt-2">{renderStars(Math.round(averageRating), 'lg')}</div>
            <p className="text-sm text-muted-foreground mt-2 font-cinzel">
              {totalReviews} {totalReviews === 1 ? 'Review' : 'Reviews'}
            </p>
          </div>
          <div className="flex-1 border-l border-border/50 pl-6">
            <h3 className="text-xl font-cinzel font-bold text-foreground mb-3">Customer Testimonials</h3>
            <p className="text-sm text-muted-foreground font-cinzel">
              Honest reviews from adventurers who've tested these wares in the field. 
              {' '}<ShieldCheck className="inline h-4 w-4 text-accent" /> indicates verified purchases.
            </p>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur p-5 rounded-lg border border-border/50 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-cinzel font-bold text-foreground">{review.title}</h4>
                  {review.isVerified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-accent/20 text-accent text-xs rounded border border-accent/30">
                      <ShieldCheck className="h-3 w-3" />
                      Verified
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="font-cinzel">{review.authorName}</span>
                  <span className="text-xs">•</span>
                  <span className="text-xs">
                    {new Date(review.createdAt).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
              </div>
              {renderStars(review.rating)}
            </div>
            <p className="text-foreground/90 leading-relaxed font-cinzel">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
