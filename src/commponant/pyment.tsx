'use client';

import Image from 'next/image';
import React from 'react';
import { Check } from 'lucide-react';

export default function PaymentCommponant(): React.JSX.Element {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 lg:px-16 bg-white">
      {/* القسم الأيسر: النصوص والمزايا */}
      <div className="md:w-1/2 space-y-6">
        {/* Easy payment */}
        <div className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full inline-block mb-4">
          Easy payment
        </div>

        {/* العنوان الرئيسي */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
          Discover Dream Destinations with Ease
        </h1>

        {/* المزايا */}
        <ul className="space-y-3 mt-6">
          {[
            'Security Assurance',
            'Customer Support',
            'Transparent Policies',
            'Reputable Affiliations'
          ].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-gray-700">
              <Check size={16} className="text-green-500" />
              {item}
            </li>
          ))}
        </ul>

        {/* شعارات الدفع */}
        <div className="grid grid-cols-4 items-center  gap-4 mt-8">
          <Image src="/paypal.png" alt="PayPal" width={80} height={30} className=" object-contain" />
          <Image src="/strip.png" alt="Stripe" width={80} height={30} className="object-contain" />
          <Image src="/mastercard.png" alt="Mastercard" width={80} height={30} className="object-contain" />
          <Image src="/skrill.png" alt="Skrill" width={80} height={30} className="object-contain" />
        </div>
      </div>

      {/* القسم الأيمن: الصور والفيديو */}
      <div className="w-full md:w-1/2 relative">
        {/* صورة كبيرة مع زر تشغيل */}
        <div className="relative rounded-xl overflow-hidden shadow-lg">
          <Image
            src="/balyy.png"
            alt="Tropical beach with umbrella and lounge chair"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* كرت التقييم */}
        <div className="absolute  bottom-[-60px] md:left-0 bg-white p-4  rounded-xl shadow-md w-[280px] z-10">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/user.png"
              alt="Sophia Moore"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-semibold text-sm">Sophia Moore</div>
              <div className="text-xs text-gray-500">New York</div>
            </div>
          </div>
          <p className="text-xs text-gray-600 mb-2">
            Exceptional service, incredible experiences.
          </p>
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <svg key={i} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 12l-4 2.182V2h8v12.182L8 12zm0-1.5 3 1.5H5l3-1.5zM8 0l-3 1.5h6L8 0z"/>
              </svg>
            ))}
          </div>
        </div>

        {/* صورة العصير في الزاوية السفلى اليمنى */}
        <div className="absolute hidden md:block bottom-[-60px] right-0 md:right-6">
          <Image
            src="/orange.png"
            alt="Orange juice with oranges"
            width={150}
            height={150}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}