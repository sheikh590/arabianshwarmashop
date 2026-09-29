import React from 'react';
import { ExternalLink, Phone, MessageSquare, ShoppingBag, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface OrderCTAProps {
  onOpenOrderModal: () => void;
}

export const OrderCTA: React.FC<OrderCTAProps> = ({ onOpenOrderModal }) => {
  return (
    <section className="py-16 lg:py-24 bg-[#0b0c10] relative overflow-hidden">
      {/* Background glow and decorative accents */}
      <div className="absolute inset-0 bg-arabian-pattern opacity-60" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-gradient-to-b from-[#181a24] to-[#12131b] border border-amber-500/30 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black">
          
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
            <span>Fast & Fresh Delivery</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Chah Miran & Surrounding Areas</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Craving Shawarma? Order Now!
          </h2>

          <p className="text-base sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Get your favorite Arabian Shawarma meals delivered straight to your door.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto">
            
            {/* Primary Foodpanda button */}
            <a
              href={RESTAURANT_INFO.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-white bg-[#d70f64] hover:bg-[#b80b54] shadow-lg shadow-pink-900/30 transition-all active:scale-95 group cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-[#d70f64] font-bold text-xs">
                fp
              </div>
              <span>Order on Foodpanda</span>
              <ExternalLink className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl font-bold text-sm sm:text-base text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call +92 345 4502549</span>
            </a>

          </div>

          {/* WhatsApp / Quick Cart Sub-action */}
          <div className="mt-8 pt-8 border-t border-zinc-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Use Online Order Builder</span>
            </button>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a
              href={`https://wa.me/923454502549?text=${encodeURIComponent('Hello Arabian Shawarma, I would like to place an order from Chah Miran, Lahore.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Order</span>
            </a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <a
              href="/arabian-shawarma.html"
              download="arabian-shawarma-lahore.html"
              className="inline-flex items-center gap-1.5 text-amber-300 hover:text-amber-200 font-semibold"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download HTML File</span>
            </a>
            <span aria-hidden="true" className="text-zinc-700">·</span>
            <span>Delivery & Takeaway</span>
          </div>

        </div>

      </div>
    </section>
  );
};
