'use client';

import { FaBarcode } from 'react-icons/fa';

export default function DigitalTicket() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800">Digital Ticket</h2>
        <p className="text-sm text-gray-500 mt-1">
          It Is Not Necessary To Print Your Ticket
        </p>
      </div>

      {/* Flight Details Table */}
      <div className="bg-gray-100 rounded-t-lg overflow-hidden">
        <div className="grid grid-cols-5 gap-4 p-3 text-sm font-medium text-gray-700">
          <div>Flight</div>
          <div>From</div>
          <div>To</div>
          <div>Duration</div>
          <div>Bar Code</div>
        </div>
      </div>

      <div className="border border-gray-200 rounded-b-lg">
        {/* Flight 1 */}
        <div className="grid grid-cols-5 gap-4 p-4 items-start border-b border-gray-200">
          <div className="flex items-center gap-2">
            <img src="/lufthansa-logo.png" alt="Lufthansa" className="w-8 h-8 rounded-full" />
            <div>
              <div className="text-sm font-semibold text-gray-800">TK 881</div>
              <div className="text-xs text-gray-500">Economy Class</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">12:20 PM</div>
            <div className="text-xs text-gray-500">Thursday, April 6</div>
            <div className="text-xs text-gray-700 mt-1">Stockholm (Sweden)</div>
            <div className="text-xs text-gray-500">Stockholm Arlanda Airport (ARN)</div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">15:45 PM</div>
            <div className="text-xs text-gray-500">Thursday, April 6</div>
            <div className="text-xs text-gray-700 mt-1">Rome (Italy)</div>
            <div className="text-xs text-gray-500">Rome Fiumicino Airport (FCO)</div>
          </div>
          <div className="text-sm text-gray-800">3h 25m</div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mb-1">
              <FaBarcode className="text-gray-500" />
            </div>
            <div className="text-xs text-gray-500">QR Code</div>
          </div>
        </div>

        {/* Layover Info */}
        <div className="p-4 bg-gray-50">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            <span>One Stop</span>
          </div>
          <div className="mt-2 text-xs text-gray-500">
            Layovers & Connecting Flights for Rome, Italy
          </div>
          <div className="mt-1 text-xs text-gray-500">
            Take Rome-Fiumicino Airport, Services...
          </div>
        </div>

        {/* Flight 2 */}
        <div className="grid grid-cols-5 gap-4 p-4 items-start">
          <div className="flex items-center gap-2">
            <img src="/british-airways-logo.png" alt="British Airways" className="w-8 h-8 rounded-full" />
            <div>
              <div className="text-sm font-semibold text-gray-800">TK 29</div>
              <div className="text-xs text-gray-500">Economy Class</div>
            </div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">23:45 PM</div>
            <div className="text-xs text-gray-500">Thursday, April 6</div>
            <div className="text-xs text-gray-700 mt-1">Rome (Italy)</div>
            <div className="text-xs text-gray-500">Rome Fiumicino Airport (FCO)</div>
          </div>
          <div>
            <div className="text-sm font-bold text-gray-800">01:45 AM</div>
            <div className="text-xs text-gray-500">Friday, April 7</div>
            <div className="text-xs text-gray-700 mt-1">Istanbul (Turkey)</div>
            <div className="text-xs text-gray-500">Sabha (SAW)</div>
          </div>
          <div className="text-sm text-gray-800">2 Hours</div>
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center mb-1">
              <FaBarcode className="text-gray-500" />
            </div>
            <div className="text-xs text-gray-500">QR Code</div>
          </div>
        </div>
      </div>
    </div>
  );
}