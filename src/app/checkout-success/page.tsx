'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function CheckoutSuccessContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId');

  return (
    <div className="max-w-5xl mx-auto">
      {/* Success Header */}
      <div className="text-center mb-12">
        <div className="text-9xl mb-6">✨</div>
        <h1 className="text-7xl font-cinzel font-bold text-potion-gold mb-4 text-shadow-glow">
          The Ritual Is Complete!
        </h1>
        <div className="w-64 h-2 bg-potion-gold mx-auto mb-8"></div>
      </div>
      
      {/* Main Success Card */}
      <div className="bg-gradient-to-br from-purple-950 via-purple-900 to-slate-950 rounded-2xl border-4 border-potion-gold p-10 shadow-2xl mb-10 backdrop-blur-sm">
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full border-4 border-green-400 shadow-2xl mb-4">
            <span className="text-5xl">✓</span>
          </div>
        </div>

        <p className="text-3xl text-amber-200 font-medieval mb-6 leading-relaxed text-center">
          Collect your goods before they crawl away!
        </p>
        
        <div className="bg-slate-900/60 rounded-xl p-6 border-2 border-amber-600/40 mb-6">
          <p className="text-xl text-amber-100 mb-4 leading-relaxed">
            Your mystical treasures have been prepared with utmost care and await collection at the counter. 
            May they serve you well in your legendary adventures!
          </p>
          <p className="text-lg text-amber-300/80 italic">
            "Every potion tells a story, every ingredient holds power."
            <span className="text-potion-gold block mt-2 not-italic font-bold">— The Apothecary's Creed</span>
          </p>
        </div>
        
        {orderId && (
          <div className="bg-slate-950 rounded-xl p-6 mb-6 border-2 border-potion-gold/60 shadow-xl">
            <p className="text-lg text-amber-300 font-medieval text-center mb-3">Order Scroll ID</p>
            <p className="text-xl font-mono text-potion-gold font-bold break-all text-center bg-slate-900/60 py-4 px-6 rounded-lg border-2 border-amber-600/40">
              {orderId}
            </p>
            <p className="text-sm text-amber-200/70 mt-3 text-center italic">
              Present this scroll at the counter for collection
            </p>
          </div>
        )}

        <div className="border-t-2 border-amber-600/40 pt-6">
          <div className="bg-amber-950/40 rounded-lg p-5 border-2 border-amber-700/50">
            <p className="text-amber-100 text-base leading-relaxed">
              <span className="text-2xl mr-2">⚠️</span>
              <span className="font-bold text-amber-200">Disclaimer:</span> Side effects may include spontaneous wisdom, 
              inexplicable luck, ability to speak to cats, sudden urge to rescue cats from trees, 
              and an overwhelming desire to brew more potions.
              <span className="block mt-2 text-potion-gold font-bold italic">Use responsibly. Keep away from dragons.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
        <button
          onClick={() => router.push('/shop')}
          className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-gray-900 font-bold text-xl px-12 py-5 rounded-xl transition-colors shadow-xl border-4 border-amber-600"
        >
          Continue Shopping
        </button>
        
        <button
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-amber-100 font-bold text-xl px-12 py-5 rounded-xl transition-colors shadow-xl border-4 border-purple-600"
        >
          Return Home
        </button>
      </div>

      {/* Thank You Card */}
      <div className="bg-gradient-to-br from-amber-950/60 to-purple-950/60 border-2 border-potion-gold/60 rounded-2xl p-8 shadow-xl backdrop-blur-sm">
        <div className="text-center mb-4">
          <span className="text-5xl">🧙‍♂️</span>
        </div>
        <p className="text-amber-100 text-xl leading-relaxed text-center mb-4 font-medieval">
          Thank you for patronizing <span className="text-potion-gold font-bold text-2xl">The Apothecary</span>
        </p>
        <p className="text-amber-200/90 text-lg italic text-center leading-relaxed">
          May your potions bubble true, your ingredients never combust unexpectedly, 
          and your cauldrons never overflow.
        </p>
        <div className="w-48 h-1 bg-potion-gold mx-auto my-6"></div>
        <p className="text-2xl font-bold text-potion-gold text-center">
          Come again, brave adventurer! 🌟
        </p>
      </div>
    </div>
  );
}

export default function CheckoutSuccessPage() {
  return (
    <Suspense fallback={
      <div className="text-center py-20">
        <div className="text-6xl mb-4 animate-spin inline-block">🌀</div>
        <p className="text-2xl text-potion-gold font-cinzel">Loading...</p>
      </div>
    }>
      <CheckoutSuccessContent />
    </Suspense>
  );
}
