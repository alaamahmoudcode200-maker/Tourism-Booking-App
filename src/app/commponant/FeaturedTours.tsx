'use client';

import React, { useState } from 'react';
import { FaRegHeart, FaMoon, FaUser } from 'react-icons/fa';
import Image from 'next/image';

// تعريف نوع الجولة (Tour)
interface Tour {
  id: number;
  image: string;
  title: string;
  duration: string;
  guests: string;
  price: string;
  badge: {
    text: string;
    color: string;
  };
}

// حالة المفضلة: سجل (Record) حيث المفتاح هو رقم الجولة، والقيمة منطقية
type FavoriteState = Record<number, boolean>;

const tours: Tour[] = [
  {
    id: 1,
    image: '/Grand4.png',
    title: 'California Sunset/Twilight Boat Cruise',
    duration: '2 days 3 nights',
    guests: '4-6 guest',
    price: '$48.25',
    badge: { text: 'Top Rated', color: 'bg-orange-500' },
  },
  {
    id: 2,
    image: '/Grand2.png',
    title: 'NYC: Food Tastings and Culture Tour',
    duration: '3 days 3 nights',
    guests: '4-6 guest',
    price: '$17.32',
    badge: { text: 'Best Sale', color: 'bg-emerald-500' },
  },
  {
    id: 3,
    image: '/Grand1.png',
    title: 'Grand Canyon Horseshoe Bend 2 days',
    duration: '7 days 6 nights',
    guests: '4-6 guest',
    price: '$15.63',
    badge: { text: '25% Off', color: 'bg-sky-600' },
  },
];

export default function FeaturedTours() {
  const [fav, setFav] = useState<FavoriteState>({});

  const toggleFav = (id: number): void => {
    setFav((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-4">
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold">Our Featured Tours</h2>
        <a href="#" className="text-sm font-medium text-gray-900 hover:text-orange-600 transition">
          see all
        </a>
      </div>
      <p className="text-sm text-gray-500 mb-6 sm:mb-8">
        Favorite destinations based on customer reviews
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {tours.map((t) => (
          <article
            key={t.id}
            className="group relative w-full max-w-sm mx-auto sm:max-w-none bg-white border border-gray-100 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm transition-transform duration-400 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="relative h-[200px] sm:h-[240px] overflow-hidden">
              <Image
                src={t.image}
                alt={t.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <span
                className={`absolute top-3 sm:top-4 left-3 sm:left-4 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ${t.badge.color}`}
              >
                {t.badge.text}
              </span>

              <button
                onClick={() => toggleFav(t.id)}
                aria-label="Toggle favorite"
                className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition"
              >
                <FaRegHeart
                  className={`text-xs sm:text-sm ${fav[t.id] ? 'text-red-500' : 'text-gray-600'}`}
                />
              </button>
            </div>
            <div className="bg-white p-4 sm:p-5">
              <h3 className="text-base sm:text-lg text-gray-700 font-semibold mb-2 sm:mb-3 line-clamp-2">
                {t.title}
              </h3>
              <div className="flex flex-col sm:flex-row text-xs sm:text-sm text-gray-600 gap-2 sm:gap-6 mb-3 sm:mb-4">
                <span className="flex items-center gap-2">
                  <FaMoon className="text-xs sm:text-sm" /> {t.duration}
                </span>
                <span className="flex items-center gap-2">
                  <FaUser className="text-xs sm:text-sm" /> {t.guests}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <span className="text-lg sm:text-xl text-gray-700 font-bold">{t.price}</span>
                  <small className="text-xs sm:text-sm text-gray-500 ml-1">/ person</small>
                </div>
                <button className="px-3 sm:px-4 py-2 bg-[#E85528] text-white rounded-md font-semibold hover:bg-[#c9441e] text-xs sm:text-sm transition">
                  Book Now
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}