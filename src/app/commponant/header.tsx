import Image from 'next/image';
import React from 'react';
import { LuPhoneCall, LuSearch } from "react-icons/lu";

export default function Header(): React.JSX.Element {
  return (
    <>
      <header className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-10 gap-3 sm:gap-4 py-2 sm:py-3">
        {/* Logo */}
        <div className="flex items-center order-1 lg:order-1">
          <Image
            src="/logo.png"
            alt="Tourism Main App logo"
            width={140}
            height={60}
            priority
            className="object-contain w-[100px] sm:w-[120px] lg:w-[140px] h-auto"
          />
        </div>

        {/* Search - full width on mobile, centered on lg+ */}
        <div className="w-full lg:w-1/2 flex items-center lg:justify-center order-3 lg:order-2 px-2 sm:px-0">
          <div className="w-full lg:max-w-[450px] flex items-center bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <input
              type="text"
              aria-label="Search"
              placeholder="Search destinations, hotels..."
              className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base text-black outline-none placeholder-gray-500"
            />
            <button
              type="button"
              aria-label="Search"
              className="px-3 sm:px-4 py-2 sm:py-3 border-l border-gray-200 text-gray-700 hover:bg-gray-50 transition"
            >
              <LuSearch className="text-lg sm:text-xl" />
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3 flex-none order-2 lg:order-3">
          {/* Language */}
          <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <Image
              src="/gb.png"
              alt="English"
              width={24}
              height={28}
              className="rounded-full w-[20px] h-[24px] sm:w-[24px] sm:h-[28px] lg:w-[30px] lg:h-[36px]"
            />
          </div>

          {/* Phone */}
          <button className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <LuPhoneCall className="text-orange-600 text-base sm:text-lg" />
          </button>

          {/* Desktop buttons */}
          <a
            href=""
            className="hidden sm:inline-block px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            Sign up
          </a>
          <a
            href=""
            className="hidden sm:inline-block px-3 sm:px-4 py-2 rounded-lg font-semibold text-xs sm:text-sm bg-white border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition"
          >
            Log in
          </a>

          {/* Mobile menu button */}
          <button className="sm:hidden w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}