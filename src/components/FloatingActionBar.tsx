import React from 'react';
import { Phone, ShoppingBag, ExternalLink, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface FloatingActionBarProps {
  onOpenOrderModal: () => void;
  cartCount: number;
}

export const FloatingActionBar: React.FC<FloatingActionBarProps> = ({
  onOpenOrderModal,
  cartCount
}) => {
  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#0c0d12]/95 backdrop-blur-md border-t border-zinc-800 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl"
    >
      <a
        href={`tel:${RESTAURANT_INFO.phoneRaw}`}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-zinc-800 text-zinc-100 text-xs font-semibold active:scale-95 transition-transform"
      >
        <Phone className="w-3.5 h-3.5 text-amber-400" />
        <span>Call</span>
      </a>

      <a
        href={RESTAURANT_INFO.foodpandaUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg bg-[#d70f64] text-white text-xs font-semibold active:scale-95 transition-transform"
      >
        <span>Foodpanda</span>
        <ExternalLink className="w-3 h-3 opacity-80" />
      </a>

      <a
        href="/arabian-shawarma.html"
        download="arabian-shawarma-lahore.html"
        title="Download HTML file"
        className="flex items-center justify-center gap-1 py-2 px-2.5 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-semibold active:scale-95 transition-transform"
      >
        <Download className="w-3.5 h-3.5 text-amber-400" />
        <span>HTML</span>
      </a>

      <button
        onClick={onOpenOrderModal}
        className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg bg-amber-400 text-black text-xs font-bold shadow-md shadow-amber-500/20 active:scale-95 transition-transform"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        <span>Order</span>
        {cartCount > 0 && (
          <span className="w-4 h-4 rounded-full bg-black text-amber-400 text-[10px] font-bold flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </button>
    </aside>
  );
};
