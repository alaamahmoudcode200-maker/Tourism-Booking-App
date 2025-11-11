'use client';

import { FaUtensils, FaSnowflake, FaToilet, FaPaw } from 'react-icons/fa';
import { useState } from 'react';
import Modal from './models';
import SeatMap from './setmap';
import TicketBookingCard from './Seateds';
export default function SeatCard( ) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-xl shadow-md border border-gray-100">
      {/* Header: Type & Price */}
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold text-gray-800">Seated, 1st place</h3>
          <p className="text-sm text-gray-500">5th place, 3rd carriage</p>
        </div>
        <span className="text-lg font-bold text-gray-800">4 797 ₽</span>
      </div>

      {/* Seat Map */}
      <div className="mb-4">
        <SeatMap/>
      </div>

      {/* Features */}
      <div className="mb-4">
        <p className="text-sm text-gray-800">
          By the window • There is no one sitting nearby yet • Facing other passengers • Without folding
        </p>
      </div>

      {/* Rating & Icons */}
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
          <FaUtensils className="text-xs" />
          8.8
        </div>
        <FaSnowflake className="text-gray-500 text-sm" />
        <FaToilet className="text-gray-500 text-sm" />
        <FaPaw className="text-gray-500 text-sm" />
      </div>

      {/* Choose Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
        Choose
      </button>
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} >
          <div className='w-full'>
                 <TicketBookingCard/>    
          </div>
              <div className='w-full mt-2 py-2'> 
                    {/* Total Price & Payment */}
      <div className="flex justify-between items-center">
        <div>
          <span className="text-orange-500 font-bold">Total Ticket Price</span>
          <span className="ml-2 text-xl font-bold text-orange-500">$168.32</span>
        </div>
        <button className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md transition">
          Payment
        </button>
      </div></div> 
        </Modal>
    </div>
  );
}