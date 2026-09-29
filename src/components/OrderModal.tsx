import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, Phone, ExternalLink, MessageCircle, ShoppingBag, Check } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/menuData';

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  allItems: MenuItem[];
  cart: OrderItem[];
  onAddToCart: (item: MenuItem) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  onClearCart: () => void;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  allItems,
  cart,
  onAddToCart,
  onUpdateQuantity,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderType, setOrderType] = useState<'delivery' | 'takeaway'>('delivery');

  if (!isOpen) return null;

  const totalAmount = cart.reduce((sum, ci) => sum + ci.item.price * ci.quantity, 0);

  const getWhatsAppMessage = () => {
    let msg = `*Order from Arabian Shawarma Lahore*\n`;
    msg += `Type: ${orderType === 'delivery' ? 'Home Delivery' : 'Takeaway'}\n`;
    if (customerName) msg += `Customer: ${customerName}\n`;
    if (deliveryAddress && orderType === 'delivery') msg += `Address in Chah Miran/Lahore: ${deliveryAddress}\n`;
    msg += `\n*Selected Items:*\n`;

    if (cart.length > 0) {
      cart.forEach((ci) => {
        msg += `- ${ci.item.name} x ${ci.quantity} (Rs. ${ci.item.price * ci.quantity})\n`;
      });
      msg += `\n*Total Estimated:* Rs. ${totalAmount}\n`;
    } else {
      msg += `(Inquiring about today's fresh menu)\n`;
    }

    if (specialInstructions) {
      msg += `Special Instructions: ${specialInstructions}\n`;
    }

    return encodeURIComponent(msg);
  };

  const handleWhatsAppSubmit = () => {
    const url = `https://wa.me/923454502549?text=${getWhatsAppMessage()}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#12131b] border border-zinc-800 rounded-2xl shadow-2xl flex flex-col max-h-[92vh] overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                Place Your Order
              </h3>
              <p className="text-xs text-zinc-400">
                Arabian Shawarma · Chah Miran, Lahore
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Close Order Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* Quick Choice: Foodpanda Banner */}
          <div className="bg-gradient-to-r from-[#d70f64]/20 via-[#d70f64]/10 to-transparent border border-[#d70f64]/40 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#ff508f] uppercase tracking-wider block">Official Delivery Partner</span>
              <p className="text-sm font-semibold text-white">Order directly via Foodpanda App / Web</p>
            </div>
            <a
              href={RESTAURANT_INFO.foodpandaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#d70f64] hover:bg-[#b80b54] text-white text-xs font-bold transition-colors whitespace-nowrap"
            >
              <span>Foodpanda Menu</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Cart Section */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wide">
                Your Order Items ({cart.reduce((s, c) => s + c.quantity, 0)})
              </h4>
              {cart.length > 0 && (
                <button
                  onClick={onClearCart}
                  className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1"
                >
                  <Trash2 className="w-3 h-3" />
                  <span>Clear items</span>
                </button>
              )}
            </div>

            {cart.length === 0 ? (
              <div className="bg-zinc-900/60 border border-dashed border-zinc-800 rounded-xl p-6 text-center">
                <p className="text-sm text-zinc-400 mb-3">
                  No items added to your tray yet.
                </p>
                <p className="text-xs text-zinc-500 mb-4">
                  Pick your favorite items below or place order directly via WhatsApp / Call.
                </p>
              </div>
            ) : (
              <div className="space-y-2.5">
                {cart.map((ci) => (
                  <div
                    key={ci.item.id}
                    className="flex items-center justify-between gap-3 bg-zinc-900/80 border border-zinc-800 rounded-xl p-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-white truncate">
                        {ci.item.name}
                      </p>
                      <p className="text-xs text-amber-400 font-mono">
                        Rs. {ci.item.price} each · <span className="font-bold">Rs. {ci.item.price * ci.quantity}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 flex items-center justify-center transition-colors"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold text-white font-mono">
                        {ci.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(ci.item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-amber-400 hover:text-black text-zinc-200 flex items-center justify-center transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}

                {/* Subtotal */}
                <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-base font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-amber-400 font-mono text-lg">Rs. {totalAmount}</span>
                </div>
              </div>
            )}

            {/* Quick Add from Menu if tray has room */}
            <div className="mt-4">
              <span className="text-xs font-semibold text-zinc-400 block mb-2">
                Quick add items:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {allItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onAddToCart(item)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-900 border border-zinc-800 hover:border-amber-400 hover:text-amber-300 text-zinc-300 transition-colors"
                  >
                    <Plus className="w-3 h-3 text-amber-400" />
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Delivery Details */}
          <div className="space-y-3 pt-2 border-t border-zinc-800">
            <h4 className="text-sm font-bold text-zinc-200 uppercase tracking-wide">
              Customer & Delivery Details
            </h4>

            {/* Order Type Toggle */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setOrderType('delivery')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                  orderType === 'delivery'
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                }`}
              >
                Home Delivery
              </button>
              <button
                type="button"
                onClick={() => setOrderType('takeaway')}
                className={`py-2 px-3 rounded-lg text-xs font-semibold border transition-colors ${
                  orderType === 'takeaway'
                    ? 'bg-amber-400/20 text-amber-300 border-amber-400'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                }`}
              >
                Takeaway / Pickup
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-zinc-400 mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="e.g. Ali Ahmed"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                />
              </div>

              {orderType === 'delivery' && (
                <div>
                  <label className="block text-xs text-zinc-400 mb-1">Address in Lahore</label>
                  <input
                    type="text"
                    placeholder="e.g. House #, Chah Miran"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              )}
            </div>

            <div>
              <label className="block text-xs text-zinc-400 mb-1">Special Notes / Preferences</label>
              <input
                type="text"
                placeholder="e.g. Extra spicy, extra garlic toum, toasted crisp"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                className="w-full px-3 py-2 text-xs sm:text-sm bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:border-amber-400 focus:outline-none"
              />
            </div>
          </div>

        </div>

        {/* Modal Actions Footer */}
        <div className="p-4 sm:p-6 border-t border-zinc-800 bg-zinc-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full sm:w-auto text-left">
            <span className="text-xs text-zinc-400 block">Questions or direct calls?</span>
            <a
              href={`tel:${RESTAURANT_INFO.phoneRaw}`}
              className="text-amber-400 font-bold text-sm hover:underline inline-flex items-center gap-1 font-mono"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleWhatsAppSubmit}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-emerald-400 hover:bg-emerald-300 shadow-lg shadow-emerald-500/20 active:scale-95 transition-all cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
