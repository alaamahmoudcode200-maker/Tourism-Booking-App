'use client';

import Image from 'next/image';
import React from 'react';
import {
  FaWifi,
  FaParking,
  FaUtensils,
  FaDumbbell,
  FaBath,
  FaConciergeBell,
  FaSnowflake,
  FaCoffee,
  FaMapMarkerAlt,
} from 'react-icons/fa';

interface Amenity {
  icon: React.ReactNode;
  name: string;
}

export default function PropertyDetails() {
  // ✅ نفس المصفوفة اللي حددتها
  const images: string[] = [
    '/deitals.jpg',
    '/room2.jpg',
    '/room3.jpg',
    '/room.jpg',
    '/d1.jpg',
  ];

  // الصورة الرئيسية = أول صورة
  const mainImage = images[0];
  // الصور الصغيرة = باقي الصور (نضمن أن يكون عندهم 4 عناصر)
  const smallImages = [...images.slice(1), images[1] || images[0]].slice(0, 4);

  const amenities: Amenity[] = [
    { icon: <FaWifi size={20} />, name: 'Free Wifi' },
    { icon: <FaParking size={20} />, name: 'Parking Available' },
    { icon: <FaUtensils size={20} />, name: 'Restaurant' },
    { icon: <FaDumbbell size={20} />, name: 'Fitness Center' },
    { icon: <FaBath size={20} />, name: 'Bathroom' },
    { icon: <FaConciergeBell size={20} />, name: 'Room Service' },
    { icon: <FaSnowflake size={20} />, name: 'Air Conditioning' },
    { icon: <FaCoffee size={20} />, name: 'Tea/Coffee Machine' },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">

      {/* الصور: صورة كبيرة على اليسار + 4 صور صغيرة على اليمين */}
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {/* الصورة الرئيسية على اليسار */}
        <div className="md:w-1/2 aspect-square rounded-lg overflow-hidden">
          <Image
            src={mainImage}
            alt="Main Property Image"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 4 صور صغيرة على اليمين (2x2) */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          {smallImages.map((src, index) => (
            <div key={index} className="aspect-square rounded-lg overflow-hidden">
              <Image
                src={src}
                alt={`Room Image ${index + 1}`}
                width={250}
                height={250}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Place Details */}
      <div className="mb-8">
        <h3 className="text-orange-500 bg-gray-100 w-40 rounded-t font-bold text-lg px-2">Place Details</h3>
        <div className='bg-gray-100 p-6 rounded-b rounded-e'>
             <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
          <p>
            This Stylish And Roomy Family Home Is Nestled In Stockholm’s Kista District, Just 14 Km Away From The Royal Swedish Opera, Museum Of Medieval Stockholm, And Skansen. Offering The Convenience Of Free Private Parking, It’s Also A Short 8 Km Drive From Friends Arena And 14 Km From Sergels Torg Square.
          </p>
          <p>
            Explore Nearby Attractions Like The Army Museum, Just 15 Km Away, And The Royal Palace, Situated 15 Km From This Charming Home. For Convenience, Bromma Stockholm Airport Is The Closest Airport, Located Just 8 Km Away From This Stylish And Spacious Family Retreat.
          </p>
          <p>
            Your Stay At Our Hotel Includes A Complimentary Breakfast To Kickstart Your Day, And Our Rooms Offer A Cosy And Comfortable Retreat. Select Rooms Feature A Relaxing Bath Tub For Added Luxury.
          </p>
          <p>
            Our Dedicated Staff Is At Your Service, Ensuring A Seamless And Enjoyable Experience Throughout Your Stay. In Addition To The Inviting Accommodations, Indulge In Extra Leisure Activities Such As Our Fitness Centre Or Pool. We’ve Thoughtfully Curated Every Aspect To Make Your Stay Special, Promising A Combination Of Comfort, Convenience, And Delightful Extras.
          </p>
             </div>

      {/* Amenities */}
      <div className="my-8 flex  gap-6">
        <div>
         <h3 className="font-bold text-black text-lg mb-4">Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <span className="text-gray-500">{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
        </div>
      
         <div className="flex flex-col md:flex-row justify-center ml-10  items-start gap-6">
        <div>
          <div className="flex items-center text-black gap-2 text-lg font-medium">
            <span>2 Adults, 3 Children, 4 Nights</span>
            <span className="text-gray-500">| Two Rooms • Double Bed</span>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
            <FaMapMarkerAlt size={16} className="text-orange-600" />
            <span>Lövågatan 22, Stockholm, Sweden</span>
          </div>
        </div>
         </div>

      </div>

        </div>

     
      </div>


      {/* معلومات الحجز والموقع */}
  
    </div>
  );
}