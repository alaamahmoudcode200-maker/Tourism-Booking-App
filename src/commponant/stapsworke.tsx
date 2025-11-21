'use client';

import React from 'react';
import { FaArrowRight, FaMapMarkedAlt, FaTicketAlt, FaPlaneDeparture } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';
// تعريف أنواع الأيقونات المسموحة
type StepIcon = typeof FaMapMarkedAlt | typeof FaTicketAlt | typeof FaPlaneDeparture;

// تعريف أنواع المتغيرات (variants)
type Variant = 'pink' | 'mint' | 'blue';

// تعريف نوع الخطوة (Step)
interface Step {
  id: number;
  Icon: StepIcon;
  title: string;
  text: string;
  variant: Variant;
}

const steps: Step[] = [
  {
    id: 1,
    Icon: FaMapMarkedAlt,
    title: 'Find Your Destination',
    text: 'Choose your destination based on weather, activities, and budget. Check travel advisories, visa requirements, and safety concerns.',
    variant: 'pink',
  },
  {
    id: 2,
    Icon: FaTicketAlt,
    title: 'Book a Ticket',
    text: 'Choose reputable platforms or book directly. Read reviews and understand cancellation policies.',
    variant: 'mint',
  },
  {
    id: 3,
    Icon: FaPlaneDeparture,
    title: 'Pay and Go',
    text: 'Ensure secure transactions. Save and print confirmation emails. Consider travel insurance for unforeseen events.',
    variant: 'blue',
  },
];

// خلفيات الألوان حسب المتغير
const variantBg: Record<Variant, string> = {
  pink: 'bg-[#ff7eb3]/20',
  mint: 'bg-[#42e6c0]/20',
  blue: 'bg-[#6a8cff]/20',
};

// ألوان التمييز (للأيقونة والشريط الجانبي)
const variantAccent: Record<Variant, string> = {
  pink: 'bg-[#ff7eb3]',
  mint: 'bg-[#42e6c0]',
  blue: 'bg-[#6a8cff]',
};

export default function StepsWorke() {
  return (
        <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }} // مدة الأنيميشن
      >
    <section className="relative overflow-hidden py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* الخط كصورة خلف العناصر */}
      <Image 
        src="/line.png"
        alt=""
        width={1200}
        height={400}
        className="absolute inset-0 m-auto w-full h-auto object-contain -z-1 hidden lg:block"
      />

      {/* محتوى فوق الصورة -> z-index أعلى */}
      <div className="w-full md:max-w-6xl mx-auto relative z-10 flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
        {/* Left images */}
        <div className=" flex-1 flex justify-center flex-col items-center gap-4 sm:gap-6">
          <div className="w-full ml-10 max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] rounded-xl sm:rounded-2xl lg:rounded-[25px] overflow-hidden shadow-lg">
            <Image  src="/pepole.png" alt="people" width={420} height={420} className="w-full h-auto object-cover" />
          </div>

          <div className="flex gap-3 sm:gap-4">
            <div className="w-[150px] sm:w-[180px] lg:w-[200px] rounded-lg overflow-hidden shadow">
              <Image  src="/card.png" alt="card" width={200} height={200} className="w-full h-full object-cover" />
            </div>
            <div className="w-[100px] sm:w-[120px] lg:w-[140px] overflow-hidden">
              <div className="">
                <Image  src="/giral.png" alt="girl" width={140} height={140} className="w-full h-full rounded-lg object-cover" />
                <div className="-mt-6 sm:-mt-8 flex justify-center">
                  <Image  src="/mog.png" alt="girl" width={100} height={100} className="w-2/3 h-1/2 object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right cards */}
        <div className="steps-right z-10 flex-1 flex flex-col gap-4 sm:gap-5">
          {steps.map((s,index) => (
               <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          
        >
            <article
              key={s.id}
              className={`group relative z-20 overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[18px] ${variantBg[s.variant]} p-4 sm:p-5 lg:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-2 hover:shadow-[0_15px_35px_rgba(0,0,0,0.12)]`}
            >
              {/* decorative right bar */}
              <span
                className={`absolute z-10 top-0 right-0 h-full w-1 transition-all duration-300 ${variantAccent[s.variant]} group-hover:w-2`}
                aria-hidden
              />

              <div className="flex items-start gap-3 sm:gap-4">
                <div
                  className={`icon w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] lg:w-[70px] lg:h-[70px] rounded-lg sm:rounded-xl flex items-center justify-center ${variantAccent[s.variant]}`}
                >
                  <s.Icon className="text-white w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" aria-hidden />
                </div>

                <div className="flex-1">
                  <h3 className="text-base sm:text-lg lg:text-[20px] font-semibold text-black mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 mb-3 leading-5 sm:leading-6 line-clamp-3">
                    {s.text}
                  </p>

                  <a
                    className="inline-flex items-center gap-2 text-[#ff5722] font-semibold text-xs sm:text-sm"
                    href="#"
                  >
                    Learn More <FaArrowRight className="text-xs" />
                  </a>
                </div>
              </div>
            </article></motion.div>
          ))}
        </div>
      </div>
    </section></motion.div>
  );
}