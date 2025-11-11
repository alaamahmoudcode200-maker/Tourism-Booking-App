'use client';

import Image from 'next/image';
import React from 'react';

interface ImageData {
  id: number;
  src: string;
  alt: string;
}

interface MealOption {
  id: string;
  label: string;
  default: boolean;
}

interface CancellationOption {
  id: string;
  label: string;
  default: boolean;
}

interface RoomData {
  title: string;
  roomDetails: string;
  payment: string;
  price: string;
  priceNote: string;
  mealsOptions: MealOption[];
  cancellationOptions: CancellationOption[];
  moreDetailsLink: string;
  bookNowText: string;
}

export default function RoomBooking() {
  // بيانات الصور
  const images: ImageData[] = [
     {id: 1, src: '/room.jpg', alt: 'Room Image 1'},
     {id: 2, src: '/room2.jpg', alt: 'Room Image 2'},
     {id: 3, src: '/room3.jpg', alt: 'Room Image 3'},
     {id: 4, src: '/room.jpg', alt: 'Room Image 4'}, 
     {id: 5, src: '/room.jpg', alt: 'Room Image 5'}, 
  ];

  // إنشاء عناصر الصور        
  const imglist = images.map((image) => ( 
        <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={200}
            height={200}
            style={{ width: '200px', height: '200px' }}
            className=" rounded object-cover"
        />
    )); 
  const roomData: RoomData = {
    title: 'Superior room, 30 m²',
    roomDetails: 'Double bed',
    payment: 'Pay Pal',
    price: '£449',
    priceNote: 'For 1 night including taxes and fees',
    mealsOptions: [
      { id: 'roomOnly', label: 'Room only', default: true },
      { id: 'breakfast', label: 'Breakfast', default: false },
    ],
    cancellationOptions: [
      { id: 'noFree', label: 'No free cancellation', default: true },
      { id: 'freeUntil', label: 'Free cancellation until 15 August', default: false },
    ],
    moreDetailsLink: '#',
    bookNowText: 'Book Now',
  };
  return (
    <div className="w-full my-2 mx-auto p-6">

      {/* سلايدر الصور */}
      <div className=" mb-6">
        {/* الصورة الحالية */}
        <div className="grid grid-cols-5 px-2 rounded-lg gap-5">
         {imglist}
        </div>

       
      </div>

      {/* تفاصيل الحجز */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Room details */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Room details</h3>
            <p className="text-sm text-gray-600">{roomData.roomDetails}</p>
          </div>

          {/* Meals */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Meals</h3>
            <div className="space-y-2">
              {roomData.mealsOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="meals"
                    defaultChecked={option.default}
                    className="w-4 h-4 text-orange-50 radio bg-orange-500 border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-600">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Cancellation */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Cancellation</h3>
            <div className="space-y-2">
              {roomData.cancellationOptions.map((option) => (
                <label key={option.id} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="cancellation"
                    defaultChecked={option.default}
                    className="w-4 h-4 text-orange-50 radio bg-orange-500 border-gray-300 rounded-full focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-600">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div>
            <h3 className="font-semibold text-gray-800 mb-3">Payment</h3>
            <p className="text-sm text-gray-600">{roomData.payment}</p>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="my-6 border-gray-200" />

        {/* السعر والزر */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <a href={roomData.moreDetailsLink} className="text-orange-500 text-sm font-medium">More details</a>
            <div className="mt-2 text-sm text-gray-600">{roomData.priceNote}</div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-orange-500">{roomData.price}</span>
            <button onClick={()=>{
              const modal = document.getElementById('my_modal_4') as HTMLDialogElement | null;
              if (modal) modal.showModal();
            }}
            className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition">
              {roomData.bookNowText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}