/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PopularPicks } from './components/PopularPicks';
import { MenuSection } from './components/MenuSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AboutUs } from './components/AboutUs';
import { FoodGallery } from './components/FoodGallery';
import { OrderCTA } from './components/OrderCTA';
import { LocationHours } from './components/LocationHours';
import { Footer } from './components/Footer';
import { OrderModal } from './components/OrderModal';
import { FloatingActionBar } from './components/FloatingActionBar';
import { MenuItem, INITIAL_MENU_ITEMS } from './data/menuData';

export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>(() => {
    try {
      const saved = localStorage.getItem('arabian_shawarma_items_v1');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // Fallback
    }
    return INITIAL_MENU_ITEMS;
  });

  const [cart, setCart] = useState<{ item: MenuItem; quantity: number }[]>([]);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('arabian_shawarma_items_v1', JSON.stringify(menuItems));
    } catch {
      // Storage error ignored
    }
  }, [menuItems]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((ci) => ci.item.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
    showToast(`Added ${item.name} to order`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((ci) => {
          if (ci.item.id === id) {
            const nextQty = ci.quantity + delta;
            return nextQty > 0 ? { ...ci, quantity: nextQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as { item: MenuItem; quantity: number }[];
    });
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleUpdatePrice = (id: string, newPrice: number) => {
    setMenuItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, price: newPrice } : it))
    );
    showToast('Menu price updated');
  };

  const handleResetPrices = () => {
    setMenuItems(INITIAL_MENU_ITEMS);
    localStorage.removeItem('arabian_shawarma_items_v1');
    showToast('Prices reset to defaults');
  };

  const totalCartCount = cart.reduce((sum, ci) => sum + ci.quantity, 0);

  return (
    <div className="min-h-screen bg-[#0b0c10] text-zinc-100 flex flex-col font-body selection:bg-amber-400/20 selection:text-amber-300">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-zinc-900 border border-amber-400/40 text-amber-300 px-4 py-2.5 rounded-xl shadow-xl text-xs font-semibold animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content */}
      <main className="flex-1 pb-16 sm:pb-0">
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />
        
        <PopularPicks
          items={menuItems.filter((i) => i.isPopular)}
          onSelectItem={handleAddToCart}
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
        />

        <MenuSection
          items={menuItems}
          onSelectItem={handleAddToCart}
          onUpdatePrice={handleUpdatePrice}
          onResetPrices={handleResetPrices}
        />

        <WhyChooseUs />

        <AboutUs />

        <FoodGallery />

        <OrderCTA onOpenOrderModal={() => setIsOrderModalOpen(true)} />

        <LocationHours onOpenOrderModal={() => setIsOrderModalOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Bar for Mobile */}
      <FloatingActionBar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Interactive Order Modal */}
      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
        allItems={menuItems}
        cart={cart}
        onAddToCart={handleAddToCart}
        onUpdateQuantity={handleUpdateQuantity}
        onClearCart={handleClearCart}
      />

    </div>
  );
}
