import React from 'react';
import { MenuItem } from '../data/menuData';
import { ShoppingBag, Plus } from 'lucide-react';

interface PopularPicksProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
}

export const PopularPicks: React.FC<PopularPicksProps> = ({ items, onSelectItem, onOpenOrderModal }) => {
  return (
    <section id="highlights" className="py-16 lg:py-24 bg-[#0e0f14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <span>Customer Favorites</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Fresh Off The Grill</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
              Our Popular Picks
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2 max-w-xl">
              Handcrafted shawarmas, crispy zinger combos, and overloaded platters prepared with Lahore's favorite spices.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
            >
              <span>Explore full menu ordering options</span>
              <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>

        {/* 8 Popular Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-[#14161f] border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/60 hover:-translate-y-1"
            >
              {/* Product Image Slot */}
              <div className="relative aspect-[4/3] bg-zinc-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to safe gradient if image fails
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-gradient-to-br', 'from-zinc-800', 'to-zinc-900', 'flex', 'items-center', 'justify-center');
                    }
                  }}
                />
                
                {/* Subtle category tag top-left (clean typography, no gaudy pills) */}
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-md text-[11px] font-medium text-zinc-300 border border-white/10">
                  {item.categoryLabel}
                </div>

                {/* Optional highlight label */}
                {item.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500/90 text-black font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wide">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Item Details */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {item.name}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Action row */}
                <div className="pt-4 mt-4 border-t border-zinc-800/60 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-zinc-500 uppercase block font-medium">Price</span>
                    <span className="text-base font-bold text-amber-400 font-mono tabular-nums">
                      {item.price > 0 ? `Rs. ${item.price}` : 'Price on order'}
                    </span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-amber-400 text-zinc-200 hover:text-black transition-colors cursor-pointer"
                    title={`Add ${item.name} to order`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Order</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
