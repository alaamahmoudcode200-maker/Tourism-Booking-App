'use client';

import { FaCoffee, FaShoppingBag, FaSuitcase } from 'react-icons/fa';
import SeatCard from './setcard';
export default function SeatSelectionGrid() {
  // بيانات الكروت (يمكنك تعديلها أو ربطها بـ API)
  const seats = [
    {
      id: 1,
      type: 'Seated, 1st place',
      carriage: '5th place, 3rd carriage',
      price: '4 797 ₽',
      rating: 8.0,
      features: [
        'By the window',
        'Societ nearby',
        'There is no one sitting nearby yet',
      ],
      icons: [FaCoffee, FaShoppingBag, FaSuitcase], // مثلاً
    },
    {
      id: 2,
      type: 'Seated, 2nd place',
      carriage: '6th place, 4th carriage',
      price: '4 897 ₽',
      rating: 8.5,
      features: [
        'Near aisle',
        'Family section',
        'Quiet area',
      ],
      icons: [FaCoffee, FaShoppingBag, FaSuitcase],
    },
    {
        id: 3,
        type: 'Seated, 2nd place',
        carriage: '6th place, 4th carriage',
        price: '4 897 ₽',
        rating: 8.5,
        features: [
          'Near aisle',
          'Family section',
          'Quiet area',
        ],
        icons: [FaCoffee, FaShoppingBag, FaSuitcase],
      },
    // أضف المزيد من العناصر حسب الحاجة...
  ];

  return (
    <div className="max-w-6xl bg-gray-50 rounded-3xl sha mx-auto py-5 px-10">
      {/* Header */}
      <h2 className="text-3xl font-bold text-neutral-600 my-6">Select carriage and seats</h2>

      <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {seats.map((seat) => (
    <SeatCard
      key={seat.id} 
    />
  ))}
</div>
    </div>
  );
}