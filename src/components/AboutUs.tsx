import React from 'react';
import { MapPin, Clock, Award, Users } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 lg:py-24 bg-[#0b0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Composition with Food Photography */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                <img
                  src="/src/assets/images/rehman_special_sandwich_1790533292920.jpg"
                  alt="Delicious loaded Rehman Special Sandwich at Arabian Shawarma Lahore"
                  className="w-full aspect-[4/3] object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-semibold text-amber-400 block uppercase tracking-wider">Chah Miran's Landmark</span>
                  <p className="text-sm font-bold text-white">Serving Lahore's passionate food community</p>
                </div>
              </div>

              {/* Inset Second Image */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-52 rounded-xl overflow-hidden border-2 border-zinc-800 shadow-2xl">
                <img
                  src="/src/assets/images/chicken_open_shawarma_1790533314838.jpg"
                  alt="Chicken Open Shawarma fresh preparation"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col items-start lg:pl-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">
              <span>Our Story</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Chah Miran, Lahore</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-6 font-display">
              About Arabian Shawarma
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed mb-6 font-light">
              Arabian Shawarma brings delicious shawarma and fast-food favorites to the Chah Miran area of Lahore. From flavorful chicken shawarma and loaded sandwiches to satisfying platters and crispy zinger meals, our menu is designed for customers who love fresh, filling, and flavorful food.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mb-8">
              We take pride in using marinated high-grade chicken, authentic Saj and pita flatbreads, and our secret garlic toum made fresh daily. Whether you are grabbing a quick lunch, gathering with friends after cricket, or satisfying late-night hunger at 2:00 AM, our kitchen delivers piping-hot, aromatic meals with speed and care.
            </p>

            {/* Quick Stats / Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 w-full pt-6 border-t border-zinc-800/80">
              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Location</span>
                </div>
                <p className="text-sm font-semibold text-white">Chah Miran, Lahore</p>
                <p className="text-xs text-zinc-400">Postal Code 54900</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Hours</span>
                </div>
                <p className="text-sm font-semibold text-white">Daily Till 4:00 AM</p>
                <p className="text-xs text-zinc-400">Late night dining</p>
              </div>

              <div>
                <div className="flex items-center gap-2 text-amber-400 mb-1">
                  <Award className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">Quality</span>
                </div>
                <p className="text-sm font-semibold text-white">100% Fresh Halal</p>
                <p className="text-xs text-zinc-400">Daily roasted meats</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
