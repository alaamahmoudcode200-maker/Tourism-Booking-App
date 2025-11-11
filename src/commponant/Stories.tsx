'use client';

import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const items = [1, 2, 3, 4];

export default function Stories() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'next' | 'prev'): void => {
    const el = containerRef.current;
    if (!el) return;
    const card = el.querySelector('.story-card') as HTMLElement | null;
    const gap = 20;
    const cardWidth = (card?.clientWidth ?? 274) + gap;
    el.scrollBy({
      left: direction === 'next' ? cardWidth : -cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <section className="max-w-7xl -mt-12 sm:-mt-15 mx-auto relative px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl text-black font-bold mb-4 sm:mb-5">Stories</h2>

      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <p className="text-sm sm:text-base text-gray-600">Discover amazing travel experiences</p>
        <div className="flex gap-2">
          <button
            aria-label="Previous"
            onClick={() => scroll('prev')}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition"
          >
            <FaChevronLeft className="text-gray-600 text-sm sm:text-base" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scroll('next')}
            className="w-8 h-8 sm:w-10 sm:h-10 bg-white shadow-md rounded-full flex items-center justify-center hover:shadow-lg transition"
          >
            <FaChevronRight className="text-gray-600 text-sm sm:text-base" />
          </button>
        </div>
      </div>

      <div
        ref={containerRef}
        id="stories"
        className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth hide-scrollbar"
      >
        {items.map((_, i) => (
          <div
            key={i}
            className="story-card group flex-none w-[240px] sm:w-[260px] lg:w-[274px] h-[300px] sm:h-[330px] lg:h-[356px] bg-white border border-gray-200 rounded-2xl sm:rounded-3xl lg:rounded-[32px] overflow-hidden relative shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg"
          >
            <div className="w-full h-full relative">
              <Image
                src={`/card.png`}
                alt={`story-${i}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, (max-width: 1024px) 260px, 274px"
              />
              <button className="absolute left-1/2 -translate-x-1/2 -bottom-12 sm:-bottom-14 lg:-bottom-16 group-hover:bottom-3 sm:group-hover:bottom-4 transition-all duration-300 px-6 sm:px-8 lg:px-9 py-2 bg-[#E85528] text-white rounded-md font-semibold text-xs sm:text-sm">
                try
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}