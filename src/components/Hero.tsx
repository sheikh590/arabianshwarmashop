import React from 'react';
import { ShoppingBag, ChevronRight, Sparkles, Flame, Clock, Tag, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-6 pb-16 lg:py-24 overflow-hidden bg-arabian-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Subtle editorial kicker without pill box */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-4">
              <span>Chah Miran</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Lahore, Pakistan</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span className="text-amber-300">Open Till 4:00 AM</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-6 max-w-2xl font-display">
              Authentic Shawarma.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500">
                Bold Flavors.
              </span>{' '}
              Made Fresh.
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg text-zinc-300 mb-8 max-w-xl leading-relaxed">
              Enjoy delicious shawarma, crispy zinger platters, loaded sandwiches, and flavorful meals prepared fresh at Arabian Shawarma, Lahore.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/25 active:scale-95 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Order Now</span>
              </button>

              <button
                onClick={scrollToMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/70 hover:border-amber-400/50 hover:text-white transition-all cursor-pointer"
              >
                <span>View Menu</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </button>

              <a
                href="/arabian-shawarma.html"
                download="arabian-shawarma-lahore.html"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 hover:border-amber-400/60 transition-all cursor-pointer"
                title="Download complete standalone HTML file"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download HTML File</span>
              </a>
            </div>

            {/* Trust Highlights Grid underneath */}
            <div className="pt-6 border-t border-zinc-800/80 w-full grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-semibold text-zinc-200">Freshly</span>
                  <span className="text-zinc-400">Prepared Daily</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Flame className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-semibold text-zinc-200">Delicious</span>
                  <span className="text-zinc-400">Bold Flavors</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Tag className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-semibold text-zinc-200">Affordable</span>
                  <span className="text-zinc-400">From Rs. 260</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs">
                  <span className="block font-semibold text-zinc-200">Late Night</span>
                  <span className="text-zinc-400">Till 4:00 AM</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Food Photography Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Arabic border glow card */}
              <div className="relative rounded-2xl overflow-hidden p-1 bg-gradient-to-b from-amber-400/40 via-amber-600/20 to-transparent shadow-2xl shadow-black/80">
                <div className="relative rounded-xl overflow-hidden bg-zinc-950 aspect-[4/3] group">
                  <img
                    src="/src/assets/images/hero_arabian_shawarma_1790533267096.jpg"
                    alt="Authentic Arabian Chicken Shawarma prepared fresh in Chah Miran, Lahore"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle darkening scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* On-image caption badge */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">Signature Item</span>
                      <h3 className="text-lg font-bold">Arabian Chicken Shawarma</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-zinc-400 block">From</span>
                      <span className="text-base font-bold text-amber-300 font-mono tabular-nums">Rs. 260</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating review/rating badge */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-zinc-900/95 border border-zinc-700/70 rounded-xl p-3 shadow-xl backdrop-blur-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-400/20 flex items-center justify-center text-amber-400 font-bold text-sm">
                  ★ 4.8
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">Loved in Chah Miran</span>
                  <span className="text-zinc-400">Authentic Saj Bread & Spices</span>
                </div>
              </div>

              {/* Delivery partner callout */}
              <div className="absolute -top-3 -right-3 bg-zinc-900/95 border border-zinc-700/70 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#d70f64] animate-pulse" />
                <span className="text-xs font-semibold text-white">Fast Delivery on Foodpanda</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
