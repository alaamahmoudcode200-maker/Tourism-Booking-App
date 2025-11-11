'use client';

import { FaSnowflake, FaToilet, FaPaw } from 'react-icons/fa';
import SeatSelector from './Seatedmap';
export default function TicketBookingCard() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Seated, 1 seat</h3>
          <p className="text-xs text-gray-500">17th place, 3rd carriage</p>
        </div>
        <span className="text-xl font-bold text-gray-800">4 797 ₽</span>
      </div>

      {/* Seat Map */}
      <div className="mb-4">
        <div className="w-full rounded-lg flex items-center justify-center p-2">
         <SeatSelector/>
        </div>
      </div>

      {/* Features */}
      <div className="mb-4">
        <p className="text-sm text-gray-800">
          By the window • There is no one sitting nearby yet • Facing other passengers • Without folding
        </p>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-2 mb-4">
        <FaSnowflake className="text-gray-500 text-sm" />
        <FaToilet className="text-gray-500 text-sm" />
        <FaPaw className="text-gray-500 text-sm" />
      </div>

      {/* Back Button */}
      <button className="mb-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
        Back
      </button>

 
    </div>
  );
}