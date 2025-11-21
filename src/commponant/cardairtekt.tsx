'use client';
import Modal from "./models";
import { FaLock, FaSuitcaseRolling, FaPlane } from 'react-icons/fa';
import DetailsTikte from './detailsteikt';
import { useState } from 'react';

// تعريف نوع الرحلة
interface Flight {
  id: string;
  departureTime: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalAirport: string;
  durationText: string;
  isDirect: boolean;
  handBaggage: string;
  checkedBaggage: string;
  flightNumber: string;
}

export default function FlightDetailCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // الرحلات
  const flights: Flight[] = [
    {
      id: '1',
      departureTime: '08:20',
      departureAirport: 'LTN',
      arrivalTime: '13:30',
      arrivalAirport: 'SOF',
      durationText: '3h 10min duration',
      isDirect: true,
      handBaggage: '1 pc / 40×30×20 cm',
      checkedBaggage: '1 × 20 kg',
      flightNumber: 'W6 4302',
    },
    {
      id: '2',
      departureTime: '10:15',
      departureAirport: 'CDG',
      arrivalTime: '12:45',
      arrivalAirport: 'FCO',
      durationText: '2h 30min duration',
      isDirect: true,
      handBaggage: '1 pc / 55×40×20 cm',
      checkedBaggage: '2 × 23 kg',
      flightNumber: 'AF 1205',
    },
    {
      id: '3',
      departureTime: '12:15',
      departureAirport: 'CDG',
      arrivalTime: '2:00',
      arrivalAirport: 'FCO',
      durationText: '3h 30min duration',
      isDirect: true,
      handBaggage: '1 pc / 45×40×20 cm',
      checkedBaggage: '3 × 23 kg',
      flightNumber: 'AF 1205',
    },
  ];

  return (
    <div className="w-full  mx-auto p-4 space-y-6">

      {flights.map((flight) => (
        <div key={flight.id} className="flex items-start sm:items-center">
<div className="w-2 h-29 bg-orange-500 rounded-l-lg md:block hidden -mr-4"></div>
          {/* Side Orange Bar */}
          <div className="w-2 h-full bg-orange-500 rounded-l-lg ml-2 "></div>

          {/* Card */}
          <div className="flex-1 md:w-full flex flex-col md:flex-row justify-between border border-gray-300 rounded md:rounded-r-lg p-4 gap-6">

            {/* LEFT SIDE (Time + Duration) */}
            <div className="flex flex-col sm:flex-row justify-between flex-1 gap-6 border-b sm:border-b-0 sm:border-r border-gray-300 pb-4 sm:pb-0 sm:pr-4">

              {/* Departure */}
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{flight.departureTime}</div>
                <div className="text-xs text-gray-500">{flight.departureAirport}</div>
              </div>

              {/* Duration */}
              <div className="flex flex-col items-center justify-center">
                <div className="text-sm text-gray-500 mb-2">{flight.durationText}</div>

                <div className="relative h-2 w-20 bg-gray-300 rounded-full overflow-hidden">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>

                {flight.isDirect && (
                  <div className="mt-2 text-xs text-green-600 font-medium">Direct</div>
                )}
              </div>

              {/* Arrival */}
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-800">{flight.arrivalTime}</div>
                <div className="text-xs text-gray-500">{flight.arrivalAirport}</div>
              </div>
            </div>

            {/* RIGHT SIDE (Baggage Info) */}
            <div className="flex-1 space-y-3">

              <div className="flex items-center gap-3">
                <FaLock className="text-gray-500" />
                <span className="text-sm text-gray-700">
                  Hand baggage: <span className="font-medium">{flight.handBaggage}</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaSuitcaseRolling className="text-gray-500" />
                <span className="text-sm text-gray-700">
                  Checked baggage: <span className="font-medium">{flight.checkedBaggage}</span>
                </span>
              </div>

              <div className="flex items-center gap-3">
                <FaPlane className="text-gray-500" />
                <span className="text-sm text-gray-700">
                  Flight: <span className="font-medium">{flight.flightNumber}</span>
                </span>
              </div>
            </div>

            {/* Arrow Button */}
            <div className="self-end lg:self-center">
              <button
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => setIsModalOpen(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                  fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>

            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
              <DetailsTikte />
            </Modal>

          </div>
        </div>
      ))}

    </div>
  );
}
