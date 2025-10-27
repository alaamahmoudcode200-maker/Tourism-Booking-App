
'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CardModelDeitals() {
  // ✅ بيانات الصور
  const images = [
    '/room2.jpg',
    '/room2.jpg',
    '/room3.jpg',
    '/room.jpg',
    '/room2.jpg',
  ];

  // ✅ بيانات الغرفة الأساسية

  const roomInfo = {
    title: 'Superior room, 30 m²',
    description: 'Superior room 1 queen bed garden, courtyard or city view (double)',
    bedType: 'Double bed',
    price: '£449',
    priceNote: 'For 1 night Including taxes and fees',
    buttonText: 'Book Now',
    mealOption: 'Room only',
    cancellation: 'Free cancellation until 15 August',
    payment: 'Pay Pal',
  };

  // ✅ خدمات الغرفة (3 أعمدة)
  const roomServices = {
    Services: [
      'Room service (24 hours)',
      'Housekeeping',
      'Laundry service',
      'Ironing service',
      'Free newspapers',
    ],
    'Room Amenities': [
      'Free Wi-Fi',
      'Air conditioning',
      'Flat-screen TV',
      'Mini bar',
      'Safety deposit box',
    ],
    Bathroom: [
      'Shower',
      'Bath',
      'Hairdryer',
      'Toiletries',
      'Towels',
    ],
  };

  // ✅ وسائل الراحة (3 أعمدة)
  const amenities = {
    'Media/Technology': [
      'Telephone',
      'Cable channels',
      'Streaming services',
      'Charging station',
    ],
    'Food & Drink': [
      'Minibar',
      'Coffee machine',
      'Tea/coffee maker',
      'Water bottle',
    ],
    'Services/Extras': [
      'Extra beds (on request)',
      'Child-friendly',
      'Wheelchair accessible',
      'Pet-friendly',
    ],
  };

  // ✅ الشروط والسياسات
  const policies = {
    'Booking terms': 'Free cancellation until 16 August. After this date, a charge of 100% of the total amount will be applied.',
    'Payment terms': 'The total price of the room must be paid at the time of booking.',
    'Property Policies': [
      { title: 'Check-in & Check-out', text: 'Check-in: 14:00 | Check-out: 12:00' },
      { title: 'Front Desk', text: 'Open 24 hours' },
      { title: 'Children and extra beds', text: 'Children under 12 years stay free of charge when using existing beds.' },
      { title: 'Pets', text: 'Pets are allowed on request. Charges may apply.' },
    ],
  };

  // ✅ حالة الصورة
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* العنوان والسعر */}
    <div className="flex h-50 justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-bold text-gray-800">{roomInfo.title}</h1>
          <p className="text-sm text-gray-500 mt-1">{roomInfo.description}</p>

          {/* صف واحد يحتوي على: Double bed + Room only + Free cancellation */}
          <div className="mt-4 grid grid-cols-2 md:flex-row gap-6 text-sm text-gray-700">
            {/* Column 1: Bed Type */}
            <div>
              <span className="font-medium">Double bed</span>
            </div>

            {/* Column 2: Meal Option */}
            <div>
              <span className="font-medium">{roomInfo.mealOption}</span>
                 <div>
              <span className="text-orange-500 font-medium">{roomInfo.cancellation}</span>
            </div>
                 {/* Payment */}
          <div className="mt-2 text-sm text-gray-600">
            {roomInfo.payment}
          </div>
            </div>

            {/* Column 3: Cancellation */}
         
          </div>

       
        </div>

        {/* السعر + زر Book Now */}
        <div className="text-right grid grid-cols-1 gap-5">
          <div className="text-2xl font-bold text-orange-500 mb-1">{roomInfo.price}</div>
          <div className="w-2/3 text-start px-5 text-gray-600 mb-3">{roomInfo.priceNote}</div>
          <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition">
            {roomInfo.buttonText}
          </button>
        </div>
      </div>
      {/* الصورة + أزرار التنقل */}
      <div className="relative mb-6">
        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={images[currentImageIndex]}
            alt={`Room Image ${currentImageIndex + 1}`}
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
      </div>

      {/* Room services and amenities */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Room services and amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(roomServices).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Media/Technology, Food & Drink, Services/Extras */}
      <div className="bg-gray-50 p-6 rounded-lg mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(amenities).map(([title, items]) => (
            <div key={title}>
              <h3 className="font-semibold text-gray-800 mb-3">{title}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Booking & Payment terms */}
      {Object.entries(policies)
        .filter(([key]) => ['Booking terms', 'Payment terms'].includes(key))
        .map(([title, text]) => (
          <div key={title} className="bg-gray-50 p-6 rounded-lg mb-6">
            <h2 className="text-lg font-bold text-gray-800 mb-4">{title}</h2>
            <p className="text-sm text-gray-600">{text as string}</p>
          </div>
        ))}

      {/* Property Policies */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Property Policies</h2>
        <div className="space-y-4">
          {policies['Property Policies'].map((policy, i) => (
            <div key={i}>
              <h3 className="font-semibold text-gray-800">{policy.title}</h3>
              <p className="text-sm text-gray-600">{policy.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}