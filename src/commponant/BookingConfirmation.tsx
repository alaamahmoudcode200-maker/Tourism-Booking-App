'use client';

import Image from 'next/image';
import React from 'react';

interface BookingDetails {
  stays: string;
  checkIn: string;
  checkOut: string;
  quantity: string;
  roomType: string;
  bedType: string;
}

interface AdditionalInfo {
  guests: string;
  services: string;
  mealPlan: string;
}

interface BookingData {
  confirmationTitle: string;
  instruction: string;
  bookingNumber: string;
  image: string;
  details: BookingDetails;
  additionalInfo: AdditionalInfo;
  hotelRules: string[];
  cancellationPolicy: string;
}

export default function BookingConfirmation() {
  // ✅ بيانات الحجز من كائن واحد (سهل التبديل لاحقًا مع API)
  const bookingData: BookingData = {
    confirmationTitle: 'Your Hotel Reservation Confirmed',
    instruction: 'Contact EasySet24 If You Need To Change In Basic Information With 1385 Booking Number.',
    bookingNumber: '1385',
    image: '/batc.jpg', // أو placeholder

    // تفاصيل الحجز
    details: {
      stays: '5 Nights',
      checkIn: '25 Jan 2024',
      checkOut: '30 Jan 2024',
      quantity: '2 Rooms',
      roomType: 'Double',
      bedType: 'Two Twin',
    },

    // معلومات إضافية
    additionalInfo: {
      guests: 'Adults 2, Children 3, Infant 0',
      services: 'Additional Services Quantity None',
      mealPlan: 'Meal Plan Allergic',
    },

    // قواعد الفندق
    hotelRules: [
      'Check-in At 14:00 Every Day',
      'Check-Out At 12:00, Every Day',
      'Secure By EasySet24 Policy-2024',
    ],

    // سياسة الإلغاء
    cancellationPolicy: `This Booking Represents The Conclusive Step In The Hotel Reservation Process. It Is Considered Final And May Only Be Cancelled By The Hotel In The Event Of Unforeseen Circumstances Or Natural Disasters.`,
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-gray-800">
          {bookingData.confirmationTitle.split('Confirmed')[0]}
          <span className="text-orange-500">Confirmed</span>
        </h1>
        <p className="text-sm text-gray-500 mt-1">{bookingData.instruction}</p>
      </div>

      {/* Booking Details Card */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
        {/* Header with image */}
        <div className="relative h-100 bg-gray-100">
          <Image
            src={bookingData.image}
            alt="Hotel Beach"
            fill
            className="object-cover"
          />
          <div className="absolute  mb-70 lg:mr-180 inset-0  bg-opacity-30 flex items-center justify-center">
            <div className="text-black text-center px-4">
              <h2 className="text-2xl font-bold">Booking No. {bookingData.bookingNumber} Details</h2>
              <p className="mt-1">Check Your Information Here !</p>
            </div>
          </div>
             {/* Hotel Rules */}
        <div className="p-4 absolute mt-50 lg:mt-70 inset-0 bg-gradient-to-t from-black  to-transparent  text-black bg-opacity-30   border-b border-gray-200">
          <div className=" text-sm text-white  p-4 rounded-md">
            <span><strong>Hotel Roles</strong></span>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {bookingData.hotelRules.map((rule, i) => (
              <span key={i}>{rule}</span>
            ))}
            </div>
          </div>
        </div>
        </div>

     

        {/* Booking Details Table */}
        <div className="p-4">
          <div className="grid text-black grid-cols-1 md:grid-cols-6 gap-2 mb-4">
            {Object.entries(bookingData.details).map(([key, value]) => (
              <div key={key} className="bg-gray-100 p-2 rounded text-center">
                <div className="text-xs text-gray-500">
                  {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                </div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="flex text-black justify-between text-sm  flex-wrap gap-2">
            <span>{bookingData.additionalInfo.guests}</span>
            <span>{bookingData.additionalInfo.services}</span>
            <span>{bookingData.additionalInfo.mealPlan}</span>
          </div>
        </div>
      </div>

      {/* Cancellation Policy */}
      <div className="bg-white text-black p-6 rounded-lg shadow-sm">
        <h2 className="text-lg font-bold text-gray-800 mb-4">Cancellation Policy</h2>
        <div className="text-sm text-gray-600">
          <p className="font-semibold mb-2">Pay Attention</p>
          <p>{bookingData.cancellationPolicy}</p>
        </div>
      </div>
    </div>
  );
}