'use client';
import Image from 'next/image';
import LayoverInfo from './LayoverInfo'
import BarCodeSection from './BarCodeSection'

interface Flight {
  id: number;
  airline: string;
  flightNumber: string;
  className: string;
  departureTime: string;
  departureDate: string;
  departureCity: string;
  departureAirport: string;
  arrivalTime: string;
  arrivalDate: string;
  arrivalCity: string;
  arrivalAirport: string;
  duration: string;
  layover?: {
    text: string;
    details: string;
  };
}

const flights: Flight[] = [
  {
    id: 1,
    airline: 'Lufthansa',
    flightNumber: 'TK 881',
    className: 'Economy Class',
    departureTime: '12:20 PM',
    departureDate: 'Thursday, April 6',
    departureCity: 'Stockholm (Sweden)',
    departureAirport: 'Stockholm arlanda airport (ARN)',
    arrivalTime: '15:45 PM',
    arrivalDate: 'Thursday, April 6',
    arrivalCity: 'Rome (Italy)',
    arrivalAirport: 'Rome Fiumicino Airport (FCO)',
    duration: '3h 25m',
    layover: {
      text: 'One Stop',
      details: 'Layovers & Connecting Flights for Rome, Italy\nTake Rome-Fiumicino Airport, Services...',
    },
  },
  {
    id: 2,
    airline: 'British Airways',
    flightNumber: 'TK 29',
    className: 'Economy Class',
    departureTime: '23:45 PM',
    departureDate: 'Thursday, April 6',
    departureCity: 'Rome (Italy)',
    departureAirport: 'FCO',
    arrivalTime: '01:45 AM',
    arrivalDate: 'Friday, April 7',
    arrivalCity: 'Istanbul (Turkey)',
    arrivalAirport: 'SAW',
    duration: '2 Hours',
  },
];

export default function DigitalTicket() {
  return (
    <div className="w-full md:w-5xl border border-gray-300 mx-auto p-2 sm:p-6 bg-white rounded-lg shadow-sm">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Main Table (4/5 columns) */}
        <div className="w-full md:col-span-4 md:pr-10 border-0 md:border-r-2 border-dashed">
          {/* Header Row */}
          <div className="grid grid-cols-1 border border-gray-300 md:grid-cols-7 overflow-hidden rounded-t-xl md:rounded-t-lg">
            <div className="col-span-2">
              <div className="bg-neutral-400 text-center md:border-r border-white text-white md:rounded-tl-lg p-2">
                Flight
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-neutral-400 text-center md:border-r border-white text-white p-2">
                From
              </div>
            </div>
            <div className="col-span-2">
              <div className="bg-neutral-400 text-center md:border-r border-white text-white p-2">
                To
              </div>
            </div>
            <div className="col-span-1">
              <div className="bg-neutral-400 text-center border-white text-white md:rounded-tr-lg p-2">
                Duration
              </div>
            </div>
          </div>

          {/* Flight 1 */}
          <div className="grid grid-cols-1 md:grid-cols-7 border-l border-r border-b border-gray-300">
            <div className="col-span-2 p-2 text-center border-r border-neutral-400">
              <div className='flex gap-4 items-center py-3'>
              <div className='w-12 h-12 rounded-full border overflow-hidden'>
                <Image src={"/batc.jpg"} alt='' width={40} height={60} className='rounded-full' style={{width:"100% ", height:"100%"}}/>
              </div>
              <div className='text-xl text-blue-900 font-bold'>
                Lufthansa
              </div>
              </div>
             
              <div className="font-semibold text-sm text-start">{flights[0].flightNumber}</div>
              <div className="text-xs text-start  text-blue-500">{flights[0].className}</div>
            </div>
            <div className="col-span-2 p-2 text-start border-r border-neutral-400">
              <div className="font-bold text-md text-blue-600">{flights[0].departureTime}</div>
              <div className="text-xs font-bold pb-4 text-green-600">{flights[0].departureDate}</div>
              <div className="font-bold text-md mt-1">{flights[0].departureCity}</div>
              <div className="text-xs  text-gray-600">{flights[0].departureAirport}</div>
            </div>
            <div className="col-span-2 p-2 text-start border-r border-neutral-400">
            <div className="font-bold text-md text-blue-600">{flights[0].arrivalTime}</div>
            <div className="text-xs font-bold pb-4 text-green-600">{flights[0].arrivalDate}</div>
            <div className="font-bold text-md mt-1">{flights[0].arrivalCity}</div>
              <div className="text-xs text-gray-600">{flights[0].arrivalAirport}</div>
            </div>
            <div className="col-span-1 text-xl align-text-bottom   font-bold p-2 items-center text-center pt-8">{flights[0].duration}</div>
          </div>

          {/* Layover Info (if exists) */}
       
            <div className=" ">
            <LayoverInfo/>
            </div>
         

          {/* Flight 2 */}
          <div className="grid grid-cols-1 md:grid-cols-7 border border-gray-300 rounded-b-lg">
          <div className="col-span-2 p-2 text-center border-r border-neutral-400">
              <div className='flex gap-4 items-center py-3'>
              <div className='w-12 h-12 rounded-full border overflow-hidden'>
                <Image src={"/batc.jpg"} alt='' width={40} height={60} className='rounded-full' style={{width:"100% ", height:"100%"}}/>
              </div>
              <div className='text-xl text-blue-900 font-bold'>
                Lufthansa
              </div>
              </div>
             
              <div className="font-semibold text-sm text-start">{flights[1].flightNumber}</div>
              <div className="text-xs text-start  text-blue-500">{flights[1].className}</div>
            </div>
            <div className="col-span-2 p-2 text-start border-r border-neutral-400">
              <div className="font-bold text-md text-blue-600">{flights[0].departureTime}</div>
              <div className="text-xs font-bold pb-4 text-green-600">{flights[0].departureDate}</div>
              <div className="font-bold text-md mt-1">{flights[0].departureCity}</div>
              <div className="text-xs  text-gray-600">{flights[0].departureAirport}</div>
            </div>
            <div className="col-span-2 p-2 text-start border-r border-neutral-400">
            <div className="font-bold text-md text-blue-600">{flights[0].arrivalTime}</div>
            <div className="text-xs font-bold pb-4 text-green-600">{flights[0].arrivalDate}</div>
            <div className="font-bold text-md mt-1">{flights[0].arrivalCity}</div>
              <div className="text-xs text-gray-600">{flights[0].arrivalAirport}</div>
            </div>
            <div className="col-span-1 text-xl align-text-bottom   font-bold p-2 items-center text-center pt-8 ">{flights[1].duration}</div>
          </div>
        </div>
         
        {/* Bar Code Column (1/5) */}
        <div className="col-span-1 md:ml-5 flex flex-col">
          <div className="bg-neutral-400 text-center border-white text-white rounded-t-lg p-2 ">
            Bar Code
          </div>
          <div className="flex-1 flex flex-col border border-neutral-400 items-center justify-center ">
            <BarCodeSection/>
          </div>
        </div>
      </div>
    </div>
  );
}