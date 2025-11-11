'use client';

import { useState } from 'react';

export default function BookingForm() {
  const [ticketCount, setTicketCount] = useState(1);

  const increment = () => setTicketCount(prev => prev + 1);
  const decrement = () => setTicketCount(prev => Math.max(1, prev - 1));

  // السعر لكل تذكرة
  const pricePerTicket = 168.32;
  const totalPrice = ticketCount * pricePerTicket;

  return (
    <div className="w-full my-5 mx-auto p-6 bg-white rounded-lg shadow-md">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">Booking An Excursion</h2>
      <p className="text-sm text-gray-500 mb-4">Date And Time</p>

      {/* Date & Time */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium">
          August 20
        </button>
        <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium">
          10:30
        </button>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg font-medium">
          13:00
        </button>
      </div>

      {/* Tickets */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-semibold text-gray-800">Tickets</h3>
          <p className="text-xs text-gray-500">Standard Ticket</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg text-orange-500 font-bold">${pricePerTicket.toFixed(2)}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={decrement}
              className="w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full flex items-center justify-center"
            >
              -
            </button>
            <span className="w-8 text-center">{ticketCount}</span>
            <button
              onClick={increment}
              className="w-8 h-8 bg-yellow-100 hover:bg-yellow-200 text-yellow-700 rounded-full flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Total Price */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-orange-500 font-bold">Total Ticket Price</span>
        <span className="text-xl font-bold text-orange-500">${totalPrice.toFixed(2)}</span>
      </div>

      {/* Continue Button */}
      <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition">
        Continue
      </button>
    </div>
  );
}