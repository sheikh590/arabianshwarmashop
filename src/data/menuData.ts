export interface MenuItem {
  id: string;
  name: string;
  category: 'shawarma_sandwiches' | 'platters';
  categoryLabel: string;
  description: string;
  price: number; // in PKR
  isPopular?: boolean;
  image: string;
  badge?: string;
}

export const INITIAL_MENU_ITEMS: MenuItem[] = [
  {
    id: 'chicken-shawarma-platter',
    name: 'Chicken Shawarma Platter',
    category: 'platters',
    categoryLabel: 'Shawarma Platters',
    description: 'A flavorful chicken shawarma platter prepared with fresh ingredients and delicious sauces.',
    price: 490,
    isPopular: true,
    image: '/src/assets/images/chicken_shawarma_platter_1790533280657.jpg',
    badge: 'Chef Special'
  },
  {
    id: 'rehman-special-sandwich',
    name: 'Rehman Special Sandwich',
    category: 'shawarma_sandwiches',
    categoryLabel: 'Shawarma & Sandwiches',
    description: 'A loaded specialty sandwich packed with flavorful fillings and sauces.',
    price: 380,
    isPopular: true,
    image: '/src/assets/images/rehman_special_sandwich_1790533292920.jpg',
    badge: 'Signature Pick'
  },
  {
    id: 'arabian-shawarma',
    name: 'Arabian Shawarma',
    category: 'shawarma_sandwiches',
    categoryLabel: 'Shawarma & Sandwiches',
    description: 'Our signature Arabian-style shawarma with tender chicken, fresh vegetables, and flavorful sauces.',
    price: 260,
    isPopular: true,
    image: '/src/assets/images/hero_arabian_shawarma_1790533267096.jpg',
    badge: 'Best Seller'
  },
  {
    id: 'platter-shawarma-plate',
    name: 'Platter Shawarma Plate',
    category: 'platters',
    categoryLabel: 'Shawarma Platters',
    description: 'A satisfying shawarma platter served as a complete meal.',
    price: 450,
    isPopular: true,
    image: '/src/assets/images/chicken_shawarma_platter_1790533280657.jpg'
  },
  {
    id: 'chicken-open-shawarma',
    name: 'Chicken Open Shawarma',
    category: 'shawarma_sandwiches',
    categoryLabel: 'Shawarma & Sandwiches',
    description: 'An open-style chicken shawarma loaded with delicious toppings and sauces.',
    price: 320,
    isPopular: true,
    image: '/src/assets/images/chicken_open_shawarma_1790533314838.jpg',
    badge: 'Open Style'
  },
  {
    id: 'chicken-platter',
    name: 'Chicken Platter',
    category: 'platters',
    categoryLabel: 'Shawarma Platters',
    description: 'A generous chicken platter perfect for a filling meal.',
    price: 520,
    isPopular: true,
    image: '/src/assets/images/chicken_shawarma_platter_1790533280657.jpg'
  },
  {
    id: 'zinger-platter-shawarma',
    name: 'Zinger Platter Shawarma',
    category: 'platters',
    categoryLabel: 'Shawarma Platters',
    description: 'Crispy zinger combined with shawarma flavors for a delicious meal.',
    price: 580,
    isPopular: true,
    image: '/src/assets/images/zinger_platter_dish_1790533303593.jpg',
    badge: 'Crispy & Spiced'
  },
  {
    id: 'zinger-platter',
    name: 'Zinger Platter',
    category: 'platters',
    categoryLabel: 'Shawarma Platters',
    description: 'A crispy and flavorful zinger platter served as a satisfying meal.',
    price: 550,
    isPopular: true,
    image: '/src/assets/images/zinger_platter_dish_1790533303593.jpg',
    badge: 'Crispy Favorite'
  }
];

export const SCHEDULE_HOURS = [
  { day: 'Sunday', hours: '2:00 PM – 4:00 AM' },
  { day: 'Monday', hours: '4:00 PM – 4:00 AM' },
  { day: 'Tuesday', hours: '4:00 PM – 4:00 AM' },
  { day: 'Wednesday', hours: '4:00 PM – 4:00 AM' },
  { day: 'Thursday', hours: '4:00 PM – 4:00 AM' },
  { day: 'Friday', hours: '4:00 PM – 4:00 AM' },
  { day: 'Saturday', hours: '4:00 PM – 4:00 AM' },
];

export const RESTAURANT_INFO = {
  name: 'Arabian Shawarma',
  tagline: 'Authentic Shawarma. Bold Flavors. Made Fresh.',
  phone: '+92 345 4502549',
  phoneRaw: '+923454502549',
  address: 'Chah Miran, Lahore, 54900, Pakistan',
  plusCode: 'H8PR+RV Lahore, Pakistan',
  foodpandaUrl: 'https://foodpanda.pk/restaurant/nxus/arabian-shawarma-nxus',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=H8PR%2BRV+Lahore,+Pakistan',
  priceRange: 'Rs. 1–1,000 per person',
  hours: 'Sunday: 2:00 PM – 4:00 AM | Mon–Sat: 4:00 PM – 4:00 AM',
  hoursNote: 'Hours may vary on special days and holidays.',
  schedule: SCHEDULE_HOURS
};
