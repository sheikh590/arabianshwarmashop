import React from 'react';
import { Sparkles, Flame, Wallet, MoonStar } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: 'Fresh Ingredients',
      description: 'Fresh ingredients and carefully prepared meals every single day with no compromises on quality.',
      highlight: '100% Halal & Clean'
    },
    {
      icon: Flame,
      title: 'Bold Arabian Flavors',
      description: 'Rich sauces, spices, and flavorful combinations that bring authentic Middle Eastern street flavor to Lahore.',
      highlight: 'Signature Toum & Spices'
    },
    {
      icon: Wallet,
      title: 'Affordable Meals',
      description: 'Delicious food at reasonable prices, offering tremendous value for students, families, and late-night gatherings.',
      highlight: 'Value Packed Platters'
    },
    {
      icon: MoonStar,
      title: 'Late Night Cravings',
      description: 'Open until approximately 4:00 AM for late-night food lovers craving hot, savory, sizzling shawarma in Chah Miran.',
      highlight: 'Serving Till 4:00 AM'
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0e0f14] relative border-t border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Our Commitment</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Unmatched Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Why Arabian Shawarma?
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-3">
            What makes our fast-food joint the favorite destination for foodies in Chah Miran, Lahore.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="bg-[#141620] border border-zinc-800/80 hover:border-amber-500/40 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-black/60 group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-semibold text-amber-400/90 tracking-wide uppercase block mb-1">
                    {feat.highlight}
                  </span>

                  <h3 className="text-xl font-bold text-white mb-2">
                    {feat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-800/50 flex items-center text-xs text-zinc-500">
                  <span>Guaranteed Taste</span>
                  <span aria-hidden="true" className="mx-2">·</span>
                  <span>Made Fresh</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
