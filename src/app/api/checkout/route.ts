import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, totalGold, totalSilver, totalCopper } = body;

    const order = await prisma.order.create({
      data: {
        itemsSnapshot: items,
        totalGold,
        totalSilver,
        totalCopper,
      },
    });

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'The Ritual Is Complete. Collect your goods before they crawl away.',
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { error: 'Failed to complete the ritual' },
      { status: 500 }
    );
  }
}
