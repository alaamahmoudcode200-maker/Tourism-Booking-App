'use client';

import { useState } from 'react';

// استيراد المكونات
import MiniSeatMap from './firstclass';
import LongSeatMap from './economclass';
import PlaneBackgroundSVG from './svgplan'; // تأكد أن الملف اسمه صحيح

export default function PreferredSeat() {
  const [selected, setSelected] = useState<{ row: number; col: number } | null>(null);

  return (
    <div
      className="bg-white rounded-2xl p-4 max-w-xl mx-auto shadow"
      style={{ width: '1000px' }} // ⚠️ استخدم Tailwind بدل inline style
    >
      {/* العنوان */}
      <div className="font-bold text-lg mb-2">Preferred Seat</div>

      {/* الشرح */}
      <div className="text-sm mb-4">
        <span className="font-semibold">Seat selection:</span>
        <span className="inline-flex items-center ml-2 mr-1">
          <span className="w-3 h-3 bg-orange-400 rounded mr-1 inline-block"></span>
          Available
        </span>
        <span className="inline-flex items-center ml-2">
          <span className="w-3 h-3 bg-gray-200 rounded mr-1 inline-block border"></span>
          Reserved
        </span>
      </div>

      {/* شكل الطائرة والمقاعد */}
      <div className="relative flex flex-col items-center py-4 max-h-[1000px]">
        {/* جسم الطائرة (خلفية) */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] h-full z-0 pointer-events-none"
          style={{ zIndex: 0 }} // ⚠️ تأكد من الـ z-index
        >
          <PlaneBackgroundSVG width="100%" height="100%" />
        </div>

        {/* المقاعد */}
        <div className="relative flex justify-center z-10 w-full">
          <div className="flex flex-col gap-10 items-center">
            <MiniSeatMap />
            <LongSeatMap />
          </div>
        </div>
      </div>

      {/* السعر وزر الدفع */}
      <div className="flex items-center justify-between mt-4 border-t pt-4">
        <div className="text-orange-500 font-bold text-sm">
          Total Ticket Price <span className="ml-2 text-orange-700 text-base">$168.32</span>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-xl text-base transition">
          Payment
        </button>
      </div>
    </div>
  );
}