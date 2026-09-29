import React from 'react';
import { Phone, MapPin, ExternalLink, Heart, MessageCircle, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#08090d] text-zinc-400 border-t border-zinc-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/80">
          
          {/* Brand info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-md shadow-amber-500/20">
                <span className="font-brand leading-none">A</span>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-display">
                Arabian Shawarma
              </span>
            </div>

            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              Authentic flavors, delicious meals, and satisfying shawarma in Lahore. Serving fresh fast-food favorites in Chah Miran daily until 4:00 AM.
            </p>

            {/* Social / Ordering Links */}
            <div className="flex items-center gap-3">
              <a
                href={RESTAURANT_INFO.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#d70f64]/20 border border-[#d70f64]/40 hover:bg-[#d70f64] text-white flex items-center justify-center text-xs font-bold transition-colors"
                title="Foodpanda"
              >
                fp
              </a>

              <a
                href={`https://wa.me/923454502549`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500 hover:text-black text-emerald-400 flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-blue-600/10 border border-blue-600/30 hover:bg-blue-600 hover:text-white text-blue-400 flex items-center justify-center text-xs font-bold transition-colors"
                title="Facebook"
              >
                fb
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-purple-600/10 border border-purple-600/30 hover:bg-purple-600 hover:text-white text-purple-400 flex items-center justify-center text-xs font-bold transition-colors"
                title="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('home')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('menu')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Menu & Platters
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('about')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('highlights')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Popular Picks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('location')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Location & Map
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('contact')}
                  className="hover:text-amber-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Contact & Order
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">Location</span>
                  <span>{RESTAURANT_INFO.address}</span>
                  <span className="block text-xs text-amber-400/90 font-mono mt-0.5">Plus Code: {RESTAURANT_INFO.plusCode}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white block font-medium">Call Us</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-amber-400 hover:underline font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={RESTAURANT_INFO.foodpandaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d70f64] hover:text-[#ff388c]"
                >
                  <span>Order Directly on Foodpanda</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Arabian Shawarma. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/arabian-shawarma.html"
              download="arabian-shawarma-lahore.html"
              className="inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 font-semibold transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download HTML File (Offline Version)</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">Crafted for Chah Miran, Lahore</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
