'use client';

import Image from 'next/image';
import React from 'react';

interface Hotel {
  id: number;
  name: string;
  location: string;
  features: string[];
  guests: string;
  nights: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercent: number;
  image: string;
}

export default function SearchResultCards() {
  // ✅ بيانات الفنادق في مصفوفة
  const hotels: Hotel[] = [
    {
      id: 1,
      name: 'Radisson Blu',
      location: 'Located In Downtown, 500m Distance to Shore',
      features: ['Breakfast Included'],
      guests: '1 Adult, 2 Children',
      nights: '4 Nights',
      description: 'Experience Unique Opportunity Standard rooms',
      originalPrice: 142,
      discountedPrice: 125,
      discountPercent: 12,
      image: '/hotel.jpg',
    },
    {
      id: 2,
      name: 'Luxury Beach Hotel',
      location: 'Beachfront, Direct Ocean View',
      features: ['All-Inclusive'],
      guests: '2 Adults, 1 Child',
      nights: '5 Nights',
      description: 'Deluxe Room with Balcony',
      originalPrice: 210,
      discountedPrice: 189,
      discountPercent: 10,
      image: '/hotel.jpg',
    },
      {
      id: 3,
      name: 'Luxury Beach Hotel',
      location: 'Beachfront, Direct Ocean View',
      features: ['All-Inclusive'],
      guests: '2 Adults, 1 Child',
      nights: '5 Nights',
      description: 'Deluxe Room with Balcony',
      originalPrice: 210,
      discountedPrice: 189,
      discountPercent: 10,
      image: '/hotel.jpg',
    },
  ];

  return (
    <div className="space-y-6">
      {hotels.map((hotel) => (
        <div
          key={hotel.id}
          className="bg-white rounded-xl shadow-sm p-4 flex flex-col md:flex-row gap-4"
        >
          {/* الصورة */}
          <div className="w-full md:w-48 h-60 rounded-lg overflow-hidden">
            <Image
              src={hotel.image}
              alt={hotel.name}
              width={200}
              height={250}
              className="w-full h-full object-cover"
            />
          </div>

          {/* المعلومات */}
          <div className="flex-1 space-y-2">
            {/* العنوان + قلب */}
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
              <button className="text-gray-400 hover:text-red-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
              </button>
            </div>

            {/* الموقع */}
            <div className="flex items-center gap-1 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <span>{hotel.location}</span>
            </div>

            {/* المميزات */}
            {hotel.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 .071-1.058.733.733 0 0 1 1.047 0l3.075 3.137L12.703 3.97z"/>
                </svg>
                <span>{feature}</span>
              </div>
            ))}

            {/* الضيوف */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 2-2 2H4c-1.5 0-3-1-3-3V7c0-1 1-2 3-2h8c2 0 2 1 2 3v6z"/>
              </svg>
              <span>{hotel.guests}</span>
            </div>

            {/* الليالي */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <span>{hotel.nights}</span>
            </div>

            {/* الوصف */}
            <p className="text-sm text-gray-600 mt-2">{hotel.description}</p>

            {/* السعر */}
            <div className="flex justify-between items-center gap-2 mt-2">
            <div className="flex  items-center gap-2">
              <span className="text-sm line-through text-gray-400">${hotel.originalPrice}</span>
              <span className="text-xl font-bold text-red-500">${hotel.discountedPrice}</span>
              <span className="text-xs text-red-500">{hotel.discountPercent}% Off</span>
              </div> 
             <button className="mt-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition">
              Choose
            </button>
            </div>

            {/* زر Choose */}
          
          </div>
        </div>
      ))}
    </div>
  );
}