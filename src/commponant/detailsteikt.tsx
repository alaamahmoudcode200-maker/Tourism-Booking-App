import { FaArrowRightLong  } from 'react-icons/fa6';
import ResponsiveSVG from './svg';
export default function DetailsTikte() {
  return (
    <div className="p-6 bg-white">
      <div className="px-4 text-3xl mb-6">
        <div className='flex items-center gap-4'>
          Luton <FaArrowRightLong /> Sofia
        </div>
        <span className="text-gray-500 text-sm">12 November, Wed</span>
      </div>
     <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg shadow-md overflow-hidden max-w-4xl">
      <div className="flex relative">
        <div className="w-1.5 bg-orange-500"></div>

        {/* Main content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-4 gap-10 items-center">
            {/* Left section - Flight times and route */}
            <div className="col-span-2  flex justify-center gap-6 items-center">
            <div className="w-1/2 h-full flex flex-col justify-center items-center">
                <div className="mb-15">
                  <div className="text-3xl font-bold text-gray-900">08:20</div>
                  <div className="text-xs text-gray-500 font-medium">12 Nov</div>
               </div>
               <div className="mb-2 ">
                  <div className="text-3xl font-bold text-gray-900">13:30</div>
                  <div className="text-xs text-gray-500 font-medium">12 Nov</div>
              </div>
            </div>
              <div className='px-2'>
  

        <div className="w-3 h-3 border -ml-1   border-gray-300 rounded-full"></div>


          <div className="w-0.5 bg-gray-300 h-30"></div>
          <br/>
  
       <div className="w-0.5 bg-gray-300 h-16"></div>

  <div className="w-3 h-3 -ml-1 border border-gray-300 rounded-full"></div>


              </div>
             
               <div  className="w-1/2"> 
                     <div className="mb-6">
                <div className="text-base font-semibold text-gray-900">Luton</div>
                <div className="text-xs text-gray-600 font-medium">LTN</div>
                <div className="text-xs text-gray-500">Luton, United Kingdom</div>
              </div>   
                 <div className="text-xs text-gray-500 font-medium mb-4">3 h 10 min duration</div>
                <div>
                <div className="text-base font-semibold text-gray-900">Sofia</div>
                <div className="text-xs text-gray-600 font-medium">Vrazhdebna</div>
                <div className="text-xs text-gray-500">SOF</div>
                <div className="text-xs text-gray-500">Sofia, Bulgaria</div>
              </div>
               </div>
            </div>
     {/* Right section - Flight details */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-0.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l0.03-.12 0.9-1.63h7.45c0.75 0 1.41-.41 1.75-1.03l3.58-6.49c0.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-0.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s0.89 2 1.99 2 2-0.9 2-2-0.9-2-2-2z" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-gray-900">Hand baggage:</div>
                  <div className="text-sm text-gray-600">1 pc / 40×30×20 cm</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zm0 5h-2V9h2v4zM3 9h10v10H3V9z" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-gray-900">Checked baggage:</div>
                  <div className="text-sm text-gray-600">1 × 20 kg</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 16v-5h-2V9.5h2V8c0-1.1-.9-2-2-2h-2V4h-2v2h-2V4h-2v2H9V4H7v2H5c-1.1 0-2 .9-2 2v1h2v5.5H3V16h2v1.5H3V19h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-1.5h2V16h-2zm-4 1.5H7V9.5h10v8z" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-gray-900">Flight:</div>
                  <div className="text-sm text-gray-600">W6 4302</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
                <div>
                  <div className="text-sm font-medium text-gray-900">Class:</div>
                  <div className="text-sm text-gray-600">Economy</div>
                </div>
              </div>
            </div>
            <div>
                <ResponsiveSVG/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-5 py-5 px-4'>
      <span className="text-gray-500 w-full text-sm">Departure and arrival times are shown in local time</span>
      <div className='flex justify-end py-2'>
              <button className="px-4 py-2 bg-orange-500 font-bold w-40 text-white rounded-md hover:bg-orange-600 transition" >
                     Select
             </button>
      </div>
    </div>
    </div>
  );
}