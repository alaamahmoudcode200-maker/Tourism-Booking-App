// ...existing code...
import React from "react";

export default function HotelSearch() {
  return (
    <section className="mx-auto md:mt-20   my-8 sm:my-12 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-4  text-center sm:text-left">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-extrabold text-[#E85528] mb-1 sm:mb-2">
          Where is Your Next Dream Place?
        </h2>
        <p className="text-xs sm:text-sm text-gray-500">
          Find Exclusive Genius Rewards in Every Corner Of The World!
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl overflow-hidden shadow-md sm:shadow-lg">
        <form className="grid grid-cols-1 md:grid-cols-4 items-stretch">
          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-100">
            <input
              aria-label="destination"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Where do you want to go?"
            />
          </div>

          <div className="flex-1 border-b lg:border-b-0 lg:border-r border-gray-100">
            <input
              aria-label="dates"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Check-in – Check-out"
            />
          </div>

          <div className="flex-1 border-b lg:border-b-0 border-gray-100">
            <input
              aria-label="guests"
              className="w-full px-3 sm:px-4 py-3 sm:py-4 text-sm sm:text-base text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              type="text"
              placeholder="Who's Coming?"
            />
          </div>

          <button
            type="submit"
            className="px-4 sm:px-6 py-3 sm:py-4 bg-[#E85528] text-white font-semibold hover:bg-[#c9441e] transition-colors text-sm sm:text-base"
          >
            Find Hotel
          </button>
        </form>
      </div>
    </section>
  );
}
// ...existing code...