import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const itemId = searchParams.get('itemId');

    if (itemId) {
      // Get reviews for a specific item
      const reviews = await prisma.review.findMany({
        where: { itemId },
        orderBy: { createdAt: 'desc' },
      });

      const avgRating = await prisma.review.aggregate({
        where: { itemId },
        _avg: { rating: true },
        _count: true,
      });

      return NextResponse.json({
        reviews,
        averageRating: avgRating._avg.rating || 0,
        totalReviews: avgRating._count,
      });
    }

    // Get all reviews
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: 'desc' },
      take: 50, // Limit to most recent 50
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}
