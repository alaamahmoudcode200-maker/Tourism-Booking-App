'use client';

import { FaCoffee, FaWifi, FaSmokingBan,  FaCar, FaMapMarkerAlt,FaTshirt } from 'react-icons/fa';
import { TbPlayBasketball,TbCat  } from "react-icons/tb";
export default function HotelInfoCard() {
  // ✅ بيانات الفندق الأساسية
  const hotel = {
    name: 'First Hotel G',
    description: 'Modern hotel at Gothenburg Central Station',
  };

  // ✅ مميزات الفندق (6 عناصر)
  const features = [
    { icon: <FaCoffee className="text-gray-500" />, label: 'Breakfast Included' },
    { icon: <FaWifi className="text-gray-500" />, label: 'Free Wi-Fi' },
    { icon: <FaCar className="text-gray-500" />, label: 'Free Parking' },
    { icon: <TbCat  className="text-gray-500" />, label: 'Pets are Welcome' },

  ];
    const features2 = [
    { icon: <FaTshirt className="text-gray-500" />, label: 'free laundry service' },
    { icon: <FaSmokingBan className="text-gray-500" />, label: 'no smoking' },
    { icon: <TbPlayBasketball className="text-gray-500" />, label: 'Free Entrance Exercise Centre' },
    

  ]

  // ✅ معلومات الموقع
  const locationInfo = [
    '0 m to City Centre',
    '24 km to Landvetter Airport',
    '2.5 km to Liseberg Amusement Park',
    '0 m to Gothenburg Central Station',
  ];

  return (
    <div className="bg-white p-6 md:flex w-full  justify-between  rounded-lg shadow-sm border border-gray-200 my-10 lg:w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{hotel.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{hotel.description}</p>
              <div className="flex items-center gap-2 mb-2">
          <FaMapMarkerAlt className="text-orange-500" />
          <span className="font-semibold text-gray-800">Location Information</span>
        </div>
        <ul className="space-y-1 text-sm text-gray-600">
          {locationInfo.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
        </div>
      </div>
      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-gray-700">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            {feature.icon}
            <span className="text-sm">{feature.label}</span>
          </div>
        ))}
      </div>
          <div className="text-gray-700">
        {features2.map((feature, index) => (
          <div key={index} className="flex items-center py-2 gap-2">
            {feature.icon}
            <span className="text-sm">{feature.label}</span>
          </div>
        ))}
      </div>
      </div>
    
 
  );
}