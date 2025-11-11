'use client';

import { useState } from 'react';
import { HiArrowNarrowDown,HiArrowNarrowUp  } from "react-icons/hi";
export default function SeatSelector() {
  // حالة اختيار المقاعد (مصفوفة من الأرقام المحددة)
  const [selectedSeats, setSelectedSeats] = useState<number[]>([17]); // مثال: 17 محدد من البداية

  // دالة لتحديد/إلغاء تحديد المقعد
  const toggleSeat = (seat: number) => {
    if (selectedSeats.includes(seat)) {
      // لو كان محدد، ن-cancel
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      // لو مش محدد، ن-add
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  // بيانات المقاعد (مثل المصفوفة الأصلية)
  const seatRows = [
    [1, 5, 9, 17, 21, 118],
    [2, 6, 10, 18, 22],
    [8, 12, 20, 24],
    [4, 14, 16, 26, 28],
    [3, 13, 15, 25, 27],
    [  84, 86, 90, 94, 120,30],
  ];

  // الصف الثاني (الصفوف 2-5)
  const secondSeatRows = [
    [29, 31, 43, 53,86, 90, 94, 55, 61],
    [30, 32,86, 90, 94, 44, 54, 56, 62],
    [38,86, 90, 94, 42, 48, 52, 60, 68],
    [ 36, 40, 46, 50,86, 90, 94],
    [33, 35, 39,86, 90, 94, 45, 49, 57],
    [34, 36,86, 90, 94, 40, 46, 50, 58],
    [33, 35, 39,86, 90, 94, 45, 49, 57],
    [124, 97, 99, 109, 111, 94, 40],
  ];

  // الصف الثالث (الصفوف 3-6)
  const thirdSeatRows = [
    [81, 83, 85, 122, 89, 93],
    [  84, 86, 90, 94, 102],
    [92, 96, 104, 108],
    [98, 100, 110, 112, 116],
    [124, 97, 99, 109, 111],
    [33, 35, 39,86, 90, 94],
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* عنوان */}

        <div className="flex justify-between items-start gap-4 mt-2">
        <div className="w-1/4  rounded-2xl h-1 bg-gray-300 grid grid-cols-2 gap-5 px-5 ">
          <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        </div>
        <HiArrowNarrowDown className="text-gray-400"/>
        <div className="w-1/2 rounded-2xl h-1 bg-gray-300 grid grid-cols-4 gap-5 px-5">
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>

        </div>
       <HiArrowNarrowDown className="text-gray-400"/>
      <div className="w-1/4  rounded-2xl h-1 bg-gray-300 grid grid-cols-2 gap-5 px-5 ">
          <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        </div>
 
      </div>
      <div className="w-full bg-gray-50 rounded-lg p-2">
        {/* الصف الأول */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>
               <div className="grid grid-cols-6 ">
            {seatRows[0].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only" // إخفاء checkbox الحقيقي
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
            <div className=' col-span-3'>
   <div className="grid grid-cols-10 gap-5">
            {secondSeatRows[0].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
              <div className='col-span-2'>
               
          <div className="grid grid-cols-6 gap-4">
            {thirdSeatRows[0].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div> 
            </div>
       
        </div>
   {/* الصف الثاني */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>
  <div className="grid grid-cols-6 gap-4">
            {seatRows[1].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
        
          <div className=' col-span-3'>
              <div className="grid grid-cols-10 gap-5">
            {secondSeatRows[1].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
        
          <div className=' col-span-2'>
                   <div className="grid grid-cols-6 gap-7 ml-10">
            {thirdSeatRows[1].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
   
        </div>
           {/* الصف الثالث */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>
    <div className="grid grid-cols-6 gap-7  ml-10">
            {seatRows[2].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
        
          <div className=' col-span-3'>
              <div className="grid grid-cols-10 gap-5">
          
          </div>
          </div>
        
          <div className=' col-span-2'>
        <div className="grid grid-cols-6 gap-7 ml-10">
            {thirdSeatRows[2].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
   
        </div>
     {/* الصف الرابع */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>

            </div>
        
          <div className=' col-span-3'>
              <div className="grid grid-cols-10 gap-8 ml-4">
            {secondSeatRows[3].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
        
          <div className=' col-span-2'>
         
          </div>
   
        </div>
         {/* الصف الخامس */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>
  <div className="grid grid-cols-6 gap-4">
            {seatRows[4].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
        
          <div className=' col-span-3'>
              <div className="grid grid-cols-10 gap-5">
            {secondSeatRows[4].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
        
          <div className=' col-span-2'>
                   <div className="grid grid-cols-6 gap-7 ml-10">
            {thirdSeatRows[4].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
   
        </div>
            {/* الصف الخامس */}
        <div className="grid grid-cols-7 gap-5 mb-2">
            <div className=' col-span-2'>
  <div className="grid grid-cols-6 gap-4">
            {seatRows[5].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
            </div>
        
          <div className=' col-span-3'>
              <div className="grid grid-cols-10 gap-5">
            {secondSeatRows[5].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
        
          <div className=' col-span-2'>
                   <div className="grid grid-cols-6 gap-4 ">
            {thirdSeatRows[5].map((seat) => (
              <div
                key={seat}
                onClick={() => toggleSeat(seat)}
                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                  selectedSeats.includes(seat)
                    ? 'bg-orange-500 text-white border-2 border-orange-400'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                <input
                  type="checkbox"
                  checked={selectedSeats.includes(seat)}
                  onChange={() => toggleSeat(seat)}
                  className="sr-only"
                />
                <span>{seat}</span>
              </div>
            ))}
          </div>
          </div>
   
        </div>
  

   
      </div>
              {/* خطوط برتقالية */}
   <div className="flex justify-between items-end gap-4 mt-2">
        <div className="w-1/4  rounded-2xl h-1 bg-gray-300 grid grid-cols-2 gap-5 px-5 ">
          <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        </div>
        <HiArrowNarrowUp className="text-gray-400"/>
        <div className="w-1/2 rounded-2xl h-1 bg-gray-300 grid grid-cols-4 gap-5 px-5">
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>

        </div>
       <HiArrowNarrowUp className="text-gray-400"/>
      <div className="w-1/4  rounded-2xl h-1 bg-gray-300 grid grid-cols-2 gap-5 px-5 ">
          <div className=" h-1 rounded-2xl  border-x border-white  bg-yellow-500"></div>
        <div className=" h-1 rounded-2xl  border-x border-white bg-yellow-500"></div>
        </div>
 
      </div>
      {/* عرض الأرقام المحددة */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700">Selected Seats:</h3>
        <p className="text-sm text-gray-600">
          {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
        </p>
      </div>

  
    </div>
  );
}