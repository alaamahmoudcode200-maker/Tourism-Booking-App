'use client';

import { FaChevronRight } from 'react-icons/fa';

export default function LayoverInfo() {
  return (
    <div className="flex items-center justify-between p-3 bg-white border-b border-gray-200">
      {/* Left: Icon + One Stop */}
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full border-2 border-blue-500 flex items-center justify-center">
          <FaChevronRight className="text-blue-500 text-xs" />
        </div>
        <span className="text-sm font-medium text-gray-800">One Stop</span>
      </div>

      {/* Middle: Layover Info */}
      <div className="flex-1 mx-4">
        <div className="text-sm font-semibold text-gray-800">
          Layovers & Connecting Flights For Rome, Italy
        </div>
        <a href="#" className="text-xs text-blue-600 hover:text-blue-800">
          Italy Fiumicino airport, See More...
        </a>
      </div>

      {/* Right: Duration */}
      <div className="text-lg font-bold text-gray-800">4h 45m</div>
    </div>
  );
}