'use client';

import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/lib/utils';
import { useState } from 'react';

export default function CartPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, clearCart, getTotal } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);
  const total = getTotal();

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setIsProcessing(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          totalGold: total.gold,
          totalSilver: total.silver,
          totalCopper: total.copper,
        }),
      });

      const data = await response.json();

      if (data.success) {
        clearCart();
        router.push(`/checkout-success?orderId=${data.orderId}`);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('The ritual failed! Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto text-center py-20">
        <div className="text-9xl mb-8">🎒</div>
        <h1 className="text-5xl font-cinzel font-bold text-potion-gold mb-6 text-shadow-glow">
          Your Satchel is Empty
        </h1>
        <p className="text-2xl text-amber-200 mb-4 font-medieval">
          You haven't collected any magical items yet!
        </p>
        <p className="text-lg text-amber-100/80 mb-10 italic max-w-2xl mx-auto">
          "An empty satchel is like a cauldron without ingredients—full of potential, but lacking purpose."
          <span className="text-potion-gold block mt-2">— The Alchemist's Handbook</span>
        </p>
        <button
          onClick={() => router.push('/shop')}
          className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold text-xl px-12 py-5 rounded-xl transition-colors hover:shadow-2xl shadow-lg border-4 border-amber-600"
        >
          Browse The Shelves
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-cinzel font-bold text-potion-gold text-shadow-glow mb-3">
          Your Satchel
        </h1>
        <p className="text-xl text-amber-200 font-medieval">
          Review your mystical acquisitions before completing the ritual
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-purple-950 via-purple-900 to-slate-900 rounded-xl border-2 border-amber-600/60 p-6 shadow-xl backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-cinzel font-bold text-amber-200 mb-3">
                    {item.name}
                  </h3>
                  <p className="text-sm text-amber-100/80 mb-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-bold text-potion-gold">
                      {formatPrice(
                        Math.floor(item.priceGold * (1 - (item.discount || 0) / 100)),
                        Math.floor(item.priceSilver * (1 - (item.discount || 0) / 100)),
                        Math.floor(item.priceCopper * (1 - (item.discount || 0) / 100))
                      )}
                    </p>
                    {item.discount && (
                      <span className="text-sm bg-red-600 text-white px-2 py-1 rounded-full font-bold">
                        -{item.discount}%
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4 ml-4">
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 bg-slate-900/80 rounded-lg p-2 border-2 border-amber-600/40">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="bg-amber-600 hover:bg-amber-500 text-white w-10 h-10 rounded-lg font-bold text-xl transition-colors"
                    >
                      −
                    </button>
                    <span className="text-2xl font-bold text-potion-gold w-12 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="bg-amber-600 hover:bg-amber-500 text-white w-10 h-10 rounded-lg font-bold text-xl transition-colors"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-700 hover:bg-red-600 text-white px-5 py-3 rounded-lg font-bold transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-slate-950 rounded-2xl border-4 border-potion-gold p-8 shadow-2xl sticky top-4 backdrop-blur-sm">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="text-5xl mb-3">📜</div>
              <h2 className="text-3xl font-cinzel font-bold text-potion-gold text-shadow-glow">
                Order Scroll
              </h2>
              <div className="w-24 h-1 bg-potion-gold mx-auto mt-3"></div>
            </div>

            {/* Summary Details */}
            <div className="space-y-4 mb-8">
              <div className="bg-slate-900/60 rounded-lg p-4 border-2 border-amber-600/40">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-amber-200 font-medieval">Total Items:</span>
                  <span className="text-2xl font-bold text-potion-gold">
                    {items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                </div>
              </div>
              
              <div className="bg-amber-900/30 rounded-lg p-5 border-2 border-potion-gold/60">
                <div className="text-sm text-amber-300 mb-2 text-center font-medieval">Grand Total</div>
                <div className="text-3xl font-bold text-center text-potion-gold">
                  {formatPrice(total.gold, total.silver, total.copper)}
                </div>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handleCheckout}
              disabled={isProcessing}
              className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 disabled:from-gray-600 disabled:to-gray-700 text-gray-900 disabled:text-gray-400 font-bold text-xl py-5 rounded-xl transition-colors disabled:cursor-not-allowed border-4 border-amber-600 disabled:border-gray-700 shadow-xl"
            >
              {isProcessing ? 'Processing Purchase...' : 'Complete Purchase'}
            </button>

            {/* Demo Notice */}
            <div className="mt-6 p-3 bg-purple-950/80 rounded-lg border-2 border-purple-700">
              <p className="text-xs text-amber-200/90 text-center italic leading-relaxed">
                ⚡ No actual payment required ⚡
                <span className="block mt-1 text-amber-300 font-bold">This is a magical demonstration!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
