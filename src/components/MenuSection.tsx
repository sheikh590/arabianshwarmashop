import React, { useState } from 'react';
import { MenuItem } from '../data/menuData';
import { Plus, Edit2, Check, RefreshCw } from 'lucide-react';

interface MenuSectionProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
  onUpdatePrice: (id: string, newPrice: number) => void;
  onResetPrices: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  items,
  onSelectItem,
  onUpdatePrice,
  onResetPrices
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'shawarma_sandwiches' | 'platters'>('all');
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [tempPrice, setTempPrice] = useState<string>('');

  const filteredItems = items.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  const handleStartEdit = (item: MenuItem) => {
    setEditingId(item.id);
    setTempPrice(item.price.toString());
  };

  const handleSaveEdit = (id: string) => {
    const parsed = parseInt(tempPrice, 10);
    if (!isNaN(parsed) && parsed >= 0) {
      onUpdatePrice(id, parsed);
    }
    setEditingId(null);
  };

  return (
    <section id="menu" className="py-16 lg:py-24 bg-[#0b0c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Chah Miran's Best Fast Food</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Menu & Platters</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            The Arabian Shawarma Menu
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3 leading-relaxed">
            Prepared fresh to order using tender marinated chicken, authentic Arabic spices, homemade garlic toum, and freshly toasted bread.
          </p>

          {/* Category Tabs & Owner Price Mode */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Interactive Category Filter Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl overflow-x-auto max-w-full">
              <button
                type="button"
                onClick={() => setActiveTab('all')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'all'
                    ? 'bg-amber-400 text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Items ({items.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('shawarma_sandwiches')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'shawarma_sandwiches'
                    ? 'bg-amber-400 text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Shawarma & Sandwiches
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('platters')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeTab === 'platters'
                    ? 'bg-amber-400 text-black shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Shawarma Platters
              </button>
            </div>

            {/* Restaurant Owner Price Customizer Toggle */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEditMode(!isEditMode)}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                  isEditMode
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400/50'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                }`}
                title="Restaurant Owner: Update or customize prices on the fly"
              >
                <Edit2 className="w-3.5 h-3.5" />
                <span>{isEditMode ? 'Exit Owner Edit Mode' : 'Owner: Edit Prices'}</span>
              </button>

              {isEditMode && (
                <button
                  type="button"
                  onClick={onResetPrices}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors"
                  title="Reset to default prices"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#12141c] border border-zinc-800/80 hover:border-amber-500/30 rounded-2xl overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl hover:shadow-black/70"
            >
              {/* Image with subtle aspect ratio */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      target.parentElement.classList.add('bg-zinc-800', 'flex', 'items-center', 'justify-center');
                    }
                  }}
                />
                
                {/* Category label */}
                <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-md px-2.5 py-0.5 rounded text-[11px] font-medium text-zinc-300 border border-white/10">
                  {item.categoryLabel}
                </div>

                {item.badge && (
                  <div className="absolute top-3 right-3 bg-amber-500 text-black font-bold px-2 py-0.5 rounded text-[10px] uppercase">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Item Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Action Row */}
                <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <div className="flex-1">
                    <span className="text-[11px] text-zinc-500 uppercase block font-medium">Price</span>
                    
                    {isEditMode && editingId === item.id ? (
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className="text-xs text-zinc-400">Rs.</span>
                        <input
                          type="number"
                          value={tempPrice}
                          onChange={(e) => setTempPrice(e.target.value)}
                          className="w-24 px-2 py-1 text-sm bg-zinc-900 border border-amber-400 text-white rounded font-mono"
                          autoFocus
                        />
                        <button
                          type="button"
                          onClick={() => handleSaveEdit(item.id)}
                          className="p-1.5 bg-amber-400 text-black rounded hover:bg-amber-300"
                        >
                          <Check className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-2">
                        <span className="text-lg sm:text-xl font-bold text-amber-400 font-mono tabular-nums">
                          {item.price > 0 ? `Rs. ${item.price}` : 'Price available on order'}
                        </span>
                        {isEditMode && (
                          <button
                            type="button"
                            onClick={() => handleStartEdit(item)}
                            className="text-xs text-zinc-400 hover:text-amber-300 underline"
                          >
                            Edit
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black shadow-md shadow-amber-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Order Now</span>
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
