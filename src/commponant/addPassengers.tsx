'use client';

import { useState } from 'react';
import Modal from "./models";
import CardPay from "./modelpay";
export default function PassengerForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  return (
    
    <div className="max-w-6xl mx-auto text-black bg-white rounded-xl shadow-sm p-8">
      {/* Passengers Selector */}
      <h2 className="text-lg font-bold text-gray-800 mb-4">Passengers</h2>
      <div className="bg-bgDetails border border-gray-200 rounded-lg p-4 mb-6">
        <label htmlFor="passenger-count" className="block text-xs text-gray-600 mb-1">
          Number Of Passengers
        </label>
        <select
          id="passenger-count"
          className="w-full p-2.5 border border-gray-300 rounded-md text-sm bg-white focus:outline-none focus:ring-2 "
        >
          <option>2 Adults, 3Children, 1 Infant</option>
          <option>1 Adult, 1Child</option>
          <option>3 Adults</option>
          <option>1 Adult, 2 Infants</option>
        </select>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 text-black  gap-6 my-8 pt-8">
        {/* Adult */}
        <div>
          <div className="font-semibold text-gray-800 mb-1">Adult</div>
          <div className="text-xs text-gray-500 mb-3">Over 12 Y.O.</div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <input type="text" placeholder="Middle Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Last Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Date Of Birth" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Citizenship</option>
                <option>USA</option>
                <option>UK</option>
                <option>EGY</option>
              </select>
            </div>
          </div>
        </div>

        {/* Child */}
        <div>
          <div className="font-semibold text-gray-800 mb-1">Child</div>
          <div className="text-xs text-gray-500 mb-3">2 – 11 Y.O.</div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <input type="text" placeholder="Middle Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Last Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Date Of Birth" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Citizenship</option>
                <option>USA</option>
                <option>UK</option>
                <option>EGY</option>
              </select>
            </div>
          </div>
        </div>
      </div>
         <div className="grid grid-cols-1 md:grid-cols-2  text-black  gap-6 mb-8">
        {/* Infant */}
        <div>
          <div className="font-semibold text-gray-800 mb-1">Infant</div>
          <div className="text-xs text-gray-500 mb-3">Under 2 Y.O. (No Seat)</div>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <input type="text" placeholder="Middle Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Last Name" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="Date Of Birth" className="p-2.5 border border-gray-300 rounded-md text-sm" />
              <select className="p-2.5 border border-gray-300 rounded-md text-sm appearance-none bg-white">
                <option>Citizenship</option>
                <option>USA</option>
                <option>UK</option>
                <option>EGY</option>
              </select>
            </div>
          </div>
        </div>
      

      {/* Contact Details */}
      <div className="pt-6 border-t grid grid-cols-1 gap-20 border-gray-200 mb-6">
        <div>
           <div className="font-semibold text-gray-800 mb-1">Your Contact Details</div>
           <div className="text-xs text-gray-500 mb-3">We Will Send You The Tickets And Your Booking Details</div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
             <input type="email" placeholder="Email Address" className="p-2.5 border border-gray-300 rounded-md text-sm" />
             <input type="tel" placeholder="Phone Number" className="p-2.5 border border-gray-300 rounded-md text-sm" />
           </div>
        </div>
         <div>
               <div className="flex justify-between items-center mb-4">
                 <span className="text-orange-500 font-bold">Total Ticket Price</span>
                 <span className="text-xl font-bold text-orange-500 ">$168.32</span>
               </div>
               <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3.5 bg-orange-600 mt-6 text-white rounded-lg font-bold transition"
               >
                 Pay
               </button>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                  <CardPay/>   
                </Modal>
        </div>
      
      </div>
    </div>


    </div>
  );
}