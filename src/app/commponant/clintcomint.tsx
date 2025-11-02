'use client';

import React from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  avatar: string;
}

const Testimonials: React.FC = () => {
  // بيانات التقييمات
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sara Mohamed',
      location: 'Jakarta',
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
    },
    {
      id: 2,
      name: 'Atend John',
      location: 'California',
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: 3,
      name: 'Lina Carter',
      location: 'London',
      text: "I've been using the hotel booking system for several years now, and it's become my go-to platform for planning my trips. The interface is user-friendly, and I appreciate the detailed information and real-time availability of hotels.",
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
  ];

  // مكوّن نجمة واحدة
  const StarIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M8 12l-4 2.182V2h8v12.182L8 12zm0-1.5 3 1.5H5l3-1.5zM8 0l-3 1.5h6L8 0z" />
    </svg>
  );

  return (
    <section className="bg-orange-50 min-h-[600px] sm:min-h-[700px] lg:min-h-[800px] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* العنوان */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 sm:mb-12 gap-4 sm:gap-8">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">They Love Travila</h2>
          <p className="text-base sm:text-lg text-gray-500">What our clients are saying about us?</p>
        </div>
        {/* أزرار التنقل */}
        <div className="flex justify-center space-x-2">
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-400 transition"
            aria-label="Previous"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
          </button>
          <button
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-700 hover:bg-gray-400 transition"
            aria-label="Next"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>

      {/* كروت التقييمات */}
      <div className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md flex flex-col h-full"
            >
              <h3 className="font-bold text-gray-800 mb-3 text-sm sm:text-base">The best booking system</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4 flex-grow">{testimonial.text}</p>
              <div className="flex items-center mt-auto">
                 <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3"
                  loading="lazy"
                />
                <div className=" flex-grow">
                  <div className="font-semibold text-xs sm:text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.location}</div>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* الرسومات الزينة */}
        {/* يسار: كاميرا، هاتف، قبعة */}
        <div className="absolute z-[-1] left-0 bottom-[-100px] sm:bottom-[-150px] lg:bottom-[-170px] -translate-y-1/2 hidden md:block">
          <div className="relative w-60 h-60 sm:w-80 sm:h-80">
            <div className="text-2xl sm:text-4xl absolute bottom-[-120px] sm:bottom-[-150px] -left-1">
              <Image
                src="/docers.png"
                alt="decoration"
                width={120}
                height={120}
                className="w-[120px] h-[120px] sm:w-[180px] sm:h-[180px]"
              />
            </div>
          </div>
        </div>

        {/* يمين: طائرة ورقية */}
        <div className="absolute z-[-1] right-0 -top-20 sm:-top-30 hidden md:block">
          <div className="text-3xl sm:text-5xl">
            <Image
              src="/decor.png"
              alt="decoration"
              width={60}
              height={60}
              className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;