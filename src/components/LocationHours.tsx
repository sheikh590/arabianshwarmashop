import React from 'react';
import { MapPin, Clock, Phone, Navigation, ShoppingBag, ExternalLink, CheckCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

interface LocationHoursProps {
  onOpenOrderModal: () => void;
}

export const LocationHours: React.FC<LocationHoursProps> = ({ onOpenOrderModal }) => {
  return (
    <section id="location" className="py-16 lg:py-24 bg-[#0e0f14] relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Find Us in Lahore</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Chah Miran Branch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Visit Arabian Shawarma
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Located conveniently in Chah Miran, Lahore. Dine-in, take away fresh, or have it delivered hot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Map & Directions */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Map Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl h-[380px] sm:h-[420px] group">
              {/* Google Maps Embed iframe centering Chah Miran, Lahore */}
              <iframe
                title="Arabian Shawarma Chah Miran Lahore Location"
                src="https://maps.google.com/maps?q=H8PR%2BRV+Lahore,+Pakistan+(Arabian+Shawarma)&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-90 brightness-95 opacity-90 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              
              {/* Overlay card in top corner */}
              <div className="absolute top-4 left-4 bg-zinc-900/95 border border-zinc-700/80 rounded-xl p-3 shadow-xl backdrop-blur-md max-w-xs pointer-events-none">
                <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wide block">Plus Code</span>
                <span className="text-xs font-semibold text-white font-mono">{RESTAURANT_INFO.plusCode}</span>
              </div>
            </div>

            {/* Quick Action Buttons for Location */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-black bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-zinc-100 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Now</span>
              </a>

              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold text-xs sm:text-sm text-zinc-100 bg-zinc-800 hover:bg-amber-400 hover:text-black border border-zinc-700 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Order Online</span>
              </button>
            </div>

          </div>

          {/* Right Column: Address Details & Opening Hours Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Card */}
            <div className="bg-[#141620] border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Chah Miran Branch</h3>
                  <span className="text-xs text-zinc-400">Lahore, Punjab</span>
                </div>
              </div>

              <div className="space-y-3 text-sm text-zinc-300">
                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-medium text-xs w-20 shrink-0">Address:</span>
                  <span className="text-white font-medium">{RESTAURANT_INFO.address}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-medium text-xs w-20 shrink-0">Plus Code:</span>
                  <span className="text-amber-300 font-mono text-xs">{RESTAURANT_INFO.plusCode}</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-medium text-xs w-20 shrink-0">Phone:</span>
                  <a href={`tel:${RESTAURANT_INFO.phoneRaw}`} className="text-amber-400 hover:underline font-semibold font-mono">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-zinc-500 font-medium text-xs w-20 shrink-0">Price Range:</span>
                  <span className="text-zinc-200">{RESTAURANT_INFO.priceRange}</span>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="bg-[#141620] border border-amber-500/20 rounded-2xl p-6 sm:p-7 shadow-xl">
              
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Opening Hours</h3>
                    <span className="text-xs text-zinc-400">Late Night Fast Food</span>
                  </div>
                </div>

                {/* Status indicator: Open now */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open now</span>
                </div>
              </div>

              {/* Day-by-Day Schedule List */}
              <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-4 divide-y divide-zinc-800/60 mb-4">
                {RESTAURANT_INFO.schedule.map((slot) => {
                  const todayName = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(new Date());
                  const isToday = slot.day === todayName;

                  return (
                    <div
                      key={slot.day}
                      className={`flex items-center justify-between py-2 text-xs sm:text-sm ${
                        isToday ? 'text-amber-300 font-semibold' : 'text-zinc-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{slot.day}</span>
                        {isToday && (
                          <span className="text-[10px] uppercase font-bold text-amber-400 bg-amber-400/10 px-1.5 py-0.2 rounded">
                            Today
                          </span>
                        )}
                      </div>
                      <span className="font-mono tabular-nums text-white font-medium">
                        {slot.hours}
                      </span>
                    </div>
                  );
                })}

                <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-3 mt-2 border-t border-zinc-800/80">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Closes around 4:00 AM every night</span>
                </div>
              </div>

              <p className="text-xs text-zinc-500 italic">
                {RESTAURANT_INFO.hoursNote}
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
