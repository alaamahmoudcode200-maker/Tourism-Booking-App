'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import TiltWrapper from './testanmation';
// تعريف نوع العرض (Offer)
interface Offer {
  id: number;
  tag: string;
  title: string;
  image: string;
  textColor: string;
}

const offers: Offer[] = [
  { id: 1, tag: 'Special', title: 'We Make Every Tour Special', image: '/offrs1.png', textColor: 'text-white' },
  { id: 2, tag: 'Limited Offers', title: 'Buy 1, Get 1 Free Attractions', image: '/offrs2.png', textColor: 'text-black' },
  { id: 3, tag: 'Adventure', title: 'Discover Nature’s Hidden Gems', image: '/offrs3.png', textColor: 'text-white' },
    { id: 4, tag: 'Adventure', title: 'Discover Nature’s Hidden Gems', image: '/offrs3.png', textColor: 'text-white' },
];

export default function OffersSection() {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 'next' | 'prev'): void => {
    const el = ref.current;
    if (!el) return;

    const card = el.querySelector('.offer-card') as HTMLElement | null;
    const gap = 20;
    const cardW = (card?.clientWidth ?? 320) + gap;

    el.scrollBy({
      left: dir === 'next' ? cardW : -cardW,
      behavior: 'smooth',
    });
  };

  return (
    <section className="w-full md:max-w-7xl mx-auto relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">Special Offers</h2>
        <div className="flex gap-2">
          <button
            aria-label="previous offers"
            onClick={() => scroll('prev')}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition"
          >
            <FaChevronLeft className="text-gray-600 text-sm sm:text-base" />
          </button>
          <button
            aria-label="next offers"
            onClick={() => scroll('next')}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:shadow-lg transition"
          >
            <FaChevronRight className="text-gray-600 text-sm sm:text-base" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          ref={ref}
          className="offers-wrapper flex gap-4 sm:gap-5 overflow-x-auto py-2 scroll-smooth hide-scrollbar"
        >
          {offers.map((o) => (
              <TiltWrapper    key={o.id}>
            <div
            
              className="offer-card flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[220px] sm:h-[250px] lg:h-[280px] rounded-xl sm:rounded-2xl overflow-hidden flex items-end p-4 sm:p-6 shadow-md relative group hover:shadow-lg transition"
            >
              <Image
                src={o.image}
                alt={o.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors pointer-events-none" />
              <div className={`offer-content relative z-10 ${o.textColor}`}>
                <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3">
                  {o.tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 line-clamp-2">{o.title}</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  View More <FaArrowRight className="text-xs" />
                </a>
              </div>
            </div>
            </TiltWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}