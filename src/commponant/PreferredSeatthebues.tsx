'use client';

import { useState } from 'react';

export default function PreferredSeatBuses() {
  // حالة اختيار المقاعد
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

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
  const seats = [
    { row: 6, available: [1, 2], reserved: [3, 4] },
    { row: 7, available: [1, 2], reserved: [3, 4] },
    { row: 8, available: [1, 2], reserved: [3, 4] },
    { row: 9, available: [1, 2], reserved: [3, 4] },
    { row: 10, available: [1, 2], reserved: [3, 4] },
    { row: 11, available: [1, 2], reserved: [3, 4] },
    { row: 12, available: [1, 2], reserved: [3, 4] },
    { row: 13, available: [1, 2], reserved: [3, 4] },
    { row: 14, available: [1, 2], reserved: [3, 4] },
    { row: 15, available: [1, 2], reserved: [3, 4] },
    { row: 16, available: [1, 2], reserved: [3, 4] },
    { row: 17, available: [1, 2], reserved: [3, 4] },
    { row: 18, available: [1, 2], reserved: [3, 4] },
    { row: 19, available: [1, 2], reserved: [3, 4] },
    { row: 20, available: [1, 2], reserved: [3, 4] },
    { row: 21, available: [1, 2], reserved: [3, 4] },
    { row: 22, available: [1, 2], reserved: [3, 4] },
    { row: 23, available: [1, 2], reserved: [3, 4] },
  ];

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* عنوان */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Preferred Seat</h2>

      {/* مفتاح الألوان */}
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <span className="text-sm text-gray-700">Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-300 rounded"></div>
          <span className="text-sm text-gray-700">Reserved</span>
        </div>
      </div>

      {/* خريطة المقاعد */}
      <div className="bg-gray-50 p-4 rounded-lg">
        {seats.map((seatRow, index) => (
          <div key={index} className="flex justify-between items-center mb-2">
            {/* أرقام الصفوف */}
            <div className="text-sm text-gray-700">{seatRow.row}</div>

            {/* المقاعد */}
            <div className="flex gap-1">
              {seatRow.available.map((seat) => (
                <div
                  key={seat}
                  onClick={() => toggleSeat(seat)}
                  className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium cursor-pointer ${
                    selectedSeats.includes(seat)
                      ? 'bg-orange-500 text-white border-2 border-orange-400'
                      : 'bg-orange-500 text-white'
                  }`}
                >
                  {seat}
                </div>
              ))}
              {seatRow.reserved.map((seat) => (
                <div
                  key={seat}
                  className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-medium bg-gray-300 text-gray-800"
                >
                  {seat}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* علامات Exit row */}
        <div className="mt-4 flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">i</div>
          <span className="text-sm text-gray-700">Exit row</span>
        </div>
      </div>

      {/* عرض الأرقام المحددة */}
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-700">Selected Seats:</h3>
        <p className="text-sm text-gray-600">
          {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
        </p>
      </div>

      {/* زر الحجز */}
      <button
        disabled={selectedSeats.length === 0}
        className={`mt-4 w-full py-2 rounded-md font-medium ${
          selectedSeats.length > 0
            ? 'bg-orange-500 hover:bg-orange-600 text-white'
            : 'bg-gray-200 text-gray-500 cursor-not-allowed'
        }`}
      >
        Book Selected Seats ({selectedSeats.length})
      </button>
    </div>
  );
}