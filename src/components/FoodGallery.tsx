import React, { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspect: string;
}

export const FoodGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Authentic Chicken Shawarma Wrap',
      category: 'Signature Shawarma',
      image: '/src/assets/images/hero_arabian_shawarma_1790533267096.jpg',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 'g2',
      title: 'Full Chicken Shawarma Platter',
      category: 'Platters',
      image: '/src/assets/images/chicken_shawarma_platter_1790533280657.jpg',
      aspect: 'aspect-square'
    },
    {
      id: 'g3',
      title: 'Crispy Zinger Platter & Fries',
      category: 'Fast Food Meals',
      image: '/src/assets/images/zinger_platter_dish_1790533303593.jpg',
      aspect: 'aspect-square'
    },
    {
      id: 'g4',
      title: 'Rehman Special Loaded Sandwich',
      category: 'Toasted Sandwiches',
      image: '/src/assets/images/rehman_special_sandwich_1790533292920.jpg',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 'g5',
      title: 'Chicken Open Shawarma Saj Plate',
      category: 'Open Shawarma',
      image: '/src/assets/images/chicken_open_shawarma_1790533314838.jpg',
      aspect: 'aspect-[4/3]'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#0e0f14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            <span>Visual Feast</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Made Fresh Daily</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            Food Gallery
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            Get an appetizing look at our sizzling shawarmas, crispy zingers, and flavorful platters.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800/80 hover:border-amber-400/50 transition-all duration-300 ${
                index === 0 ? 'lg:col-span-2 lg:aspect-[16/9]' : item.aspect
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-amber-400 text-black flex items-center justify-center shadow-lg">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-zinc-300 hover:text-white hover:bg-black transition-colors"
              aria-label="Close Preview"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-[16/10] sm:aspect-[16/9] w-full bg-zinc-950 flex items-center justify-center">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-4 bg-zinc-900 border-t border-zinc-800 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-semibold uppercase block">
                  {selectedImage.category}
                </span>
                <p className="text-base font-bold text-white">{selectedImage.title}</p>
              </div>
              <span className="text-xs text-zinc-400">Chah Miran, Lahore</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
