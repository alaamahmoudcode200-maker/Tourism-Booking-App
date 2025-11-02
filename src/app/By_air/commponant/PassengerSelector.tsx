'use client';

import { useState } from 'react';

export default function PassengerSelector() {
  // حالة عدد الركاب
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  // دوال لتعديل الأعداد
  const increment = (type: string) => {
    if (type === 'adults') setAdults(prev => prev + 1);
    if (type === 'children') setChildren(prev => prev + 1);
    if (type === 'infants') setInfants(prev => prev + 1);
  };

  const decrement = (type:string) => {
    if (type === 'adults' && adults > 0) setAdults(prev => prev - 1);
    if (type === 'children' && children > 0) setChildren(prev => prev - 1);
    if (type === 'infants' && infants > 0) setInfants(prev => prev - 1);
  };

  return (
     <div className="dropdown dropdown-end ">
            <label htmlFor="passengers" className="block text-gray-400 text-xs mb-1">Who&apos;s Flying?</label>
             <div className="flex">
                 <input
              id="passengers"
              type="text"
              value="1 Adults, 3 Child"
              readOnly
              className="w-full bg-transparent outline-none font-semibold text-gray-800"
            />
            <div tabIndex={0} className="">
                 x
            </div>
            
             </div>
         
            
              
             <ul tabIndex={-1} className="dropdown-content menu  rounded-box z-1 w-80 p-2 ">
               <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Adults */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">Adults</h3>
          <p className="text-xs text-gray-500">Over 12 Y.O.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrement('adults')}
            className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="w-8 text-center">{adults}</span>
          <button
            onClick={() => increment('adults')}
            className="w-8 h-8 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center hover:bg-orange-200 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Children */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h3 className="font-semibold text-gray-800">Children</h3>
          <p className="text-xs text-gray-500">2 – 11 Y.O.</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrement('children')}
            className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="w-8 text-center">{children}</span>
          <button
            onClick={() => increment('children')}
            className="w-8 h-8 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center hover:bg-orange-200 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Infants */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-semibold text-gray-800">Infants</h3>
          <p className="text-xs text-gray-500">Under 2 Y.O. (No Seat)</p>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => decrement('infants')}
            className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="w-8 text-center">{infants}</span>
          <button
            onClick={() => increment('infants')}
            className="w-8 h-8 rounded-md bg-orange-100 text-orange-700 flex items-center justify-center hover:bg-orange-200 transition"
          >
            +
          </button>
        </div>
      </div>

      {/* Economy & Business Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 px-4 border border-gray-300 rounded-md text-center font-medium text-gray-700 hover:bg-gray-50 transition">
          Economy
        </button>
        <button className="py-2 px-4 border border-gray-300 rounded-md text-center font-medium text-gray-700 hover:bg-gray-50 transition">
          Business
        </button>
      </div>
    </div>
             </ul>
             </div>
  
  );
}