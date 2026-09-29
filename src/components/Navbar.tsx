import React, { useState, useEffect } from 'react';
import { Phone, ShoppingBag, Menu, X, ExternalLink, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface NavbarProps {
  onOpenOrderModal: () => void;
  cartCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Highlights', href: '#highlights' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0e0f14]/95 backdrop-blur-md border-b border-amber-950/40 shadow-xl shadow-black/40 py-3.5'
            : 'bg-[#0b0c10]/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand Wordmark (Single text element) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2 group transition-transform active:scale-95"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-black font-bold text-lg shadow-md shadow-amber-500/20">
                <span className="font-brand leading-none">A</span>
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors whitespace-nowrap font-display">
                Arabian Shawarma
              </span>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-amber-400 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Zone 3: Primary Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Download Standalone HTML Button */}
              <a
                href="/arabian-shawarma.html"
                download="arabian-shawarma-lahore.html"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-lg transition-colors whitespace-nowrap"
                title="Download this website as a single HTML file"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Download HTML</span>
                <span className="sm:hidden">HTML</span>
              </a>

              {/* Direct Call Button (Hidden on tiny screens) */}
              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-200 bg-zinc-800/80 hover:bg-zinc-800 border border-zinc-700/60 rounded-lg transition-colors whitespace-nowrap"
                title="Call Arabian Shawarma"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+92 345 4502549</span>
              </a>

              {/* Order Now CTA Button */}
              <button
                onClick={onOpenOrderModal}
                className="relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/20 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Now</span>
                {cartCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-black text-amber-400 text-xs font-bold flex items-center justify-center -mr-1">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 left-0 bg-[#12131a] border-b border-amber-950/40 p-6 shadow-2xl flex flex-col gap-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-3 py-2 rounded-md text-base font-medium text-zinc-200 hover:text-amber-400 hover:bg-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-zinc-800 flex flex-col gap-2.5">
              <a
                href="/arabian-shawarma.html"
                download="arabian-shawarma-lahore.html"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 hover:bg-amber-500/30 transition-colors"
              >
                <Download className="w-4 h-4 text-amber-400" />
                <span>Download HTML File</span>
              </a>

              <a
                href={RESTAURANT_INFO.foodpandaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#d70f64] text-white hover:bg-[#c20d5a] transition-colors"
              >
                <span>Order on Foodpanda</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-zinc-800 text-zinc-100 hover:bg-zinc-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call +92 345 4502549</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
