'use client';

import Image from 'next/image';
import React from 'react';

export default function ApplcationDownload(): React.JSX.Element {
  return (
    
    <div className="bg-orange-50 py-8 sm:py-12 lg:py-16 w-full px-4 sm:px-6 lg:px-8">
      {/* القسم الرئيسي */}
      <div className="md:w-full lg:max-w-6xl mx-auto min-h-[400px] sm:min-h-[500px] lg:min-h-[600px] bg-orange-100 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden">

        {/* المحتوى النصي */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 z-10 relative">
          {/* Badge */}
          <div className="bg-white text-gray-600 text-xs sm:text-sm font-medium px-3 py-1 rounded-full inline-block mb-2 sm:mb-4">
            Install APP & Get discount code
          </div>

          {/* العنوان الرئيسي */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Discover Seamless Travel with Travila
          </h1>

          {/* الوصف */}
          <p className="text-sm sm:text-base text-gray-600 mt-2 sm:mt-4 max-w-md">
            Embark on a journey like never before with Travila – your ultimate travel companion.
          </p>
          
          {/* أزرار التحميل */}
          <div className="flex items-center  sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                    {/* صورة الموبايل في الموبايل فقط */}
        <div className="md:hidden">
          <Image
            src="/phone.png"
            alt="Phone showing Travila app"
            width={120}
            height={240}
            className="rounded-xl "
          />
        </div>
         <div className='grid md:grid-cols-2 items-center gap-1'>
             <Image 
              src="/googlplay.png" 
              alt="Get it on Google Play" 
              width={120} 
              height={40} 
              className="hover:scale-105 transition w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] lg:w-[150px] lg:h-[50px]" 
            />
            <Image 
              src="/applestore.png" 
              alt="Download on the App Store" 
              width={120} 
              height={40} 
              className="hover:scale-105   transition w-[120px] h-[40px] sm:w-[140px] sm:h-[45px] lg:w-[150px] lg:h-[50px]" 
            />
         </div>
          </div>
        </div>

        {/* الصور على اليمين - مخفية في الموبايل، ظاهرة في التابلت والكمبيوتر */}
        <div className="absolute right-0 top-1/2  transform -translate-y-1/2 hidden sm:block">
          {/* لابتوب */}
          <div className="relative -rotate-6">
            <Image
              src="/laptop.png"
              alt="Laptop showing Travila website"
              width={300}
              height={225}
              className="rounded-xl w-[250px] h-[188px] sm:w-[300px] sm:h-[225px] lg:w-[400px] lg:h-[300px]"
            />
          </div>

          {/* جوال */}
          <div className="absolute top-[-60px] -left-40 rotate-0">
            <Image
              src="/phone.png"
              alt="Phone showing Travila app"
              width={150}
              height={300}
              className="rounded-xl w-[120px] h-[240px] sm:w-[150px] sm:h-[300px] lg:w-[200px] lg:h-[400px]"
            />
          </div>
        </div>



        {/* الشكل الموجي أسفل الخلفية */}
        <div className="absolute bottom-0 left-0 w-full h-12 sm:h-16 lg:h-20 bg-orange-100 rounded-2xl sm:rounded-3xl lg:rounded-4xl">
          <div className="w-full flex justify-end px-4 sm:px-6 lg:px-10 items-center">
            <Image
              src="/dos.png"
              alt="Wave decoration"
              width={120}
              height={40}
              className="w-[120px] h-[40px] sm:w-[150px] sm:h-[50px] lg:w-[190px] lg:h-[60px]"
            />
          </div>
          <div className="w-full flex justify-end px-8 sm:px-20 lg:px-40 items-center py-2 sm:py-3 lg:py-5">
            <Image
              src="/dos.png"
              alt="Wave decoration"
              width={80}
              height={25}
              className="w-[80px] h-[25px] sm:w-[90px] sm:h-[28px] lg:w-[100px] lg:h-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}