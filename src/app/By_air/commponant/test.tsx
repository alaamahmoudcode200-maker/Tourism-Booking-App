import { FaSuitcase, FaSuitcaseRolling, FaPlaneDeparture, FaPhone } from "react-icons/fa";

export default function FlightSelectCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-xl max-w-3xl w-full p-6 relative">
        {/* زر إغلاق */}
        <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl">
          &times;
        </button>
        {/* العنوان */}
        <div>
          <div className="text-2xl font-bold mb-1">Luton <span className="mx-2 text-xl">→</span> Sofia</div>
          <div className="text-gray-400 text-sm mb-4">12 November, Wed</div>
        </div>
        {/* كارت الرحلة */}
        <div className="bg-gray-50 rounded-2xl flex flex-row p-6 mb-4">
          {/* الشريط البرتقالي */}
          <div className="bg-orange-500 w-2 rounded-l-2xl mr-4" />
          {/* معلومات الرحلة */}
          <div className="flex-1 flex flex-row">
            {/* أوقات ومواقع */}
            <div className="flex flex-col justify-between min-w-[160px]">
              <div>
                <div className="text-2xl font-bold">08:20</div>
                <div className="text-gray-500 text-sm">12 Nov</div>
                <div className="mt-2 font-semibold">Luton <span className="bg-gray-100 text-xs px-1 py-0.5 rounded ml-1">LTN</span></div>
                <div className="text-gray-400 text-xs">Luton, United Kingdom</div>
                <div className="text-gray-400 text-xs mt-2">3 h 10 min duration</div>
              </div>
              <div className="mt-8">
                <div className="text-2xl font-bold">13:30</div>
                <div className="text-gray-500 text-sm">12 Nov</div>
                <div className="mt-2 font-semibold">Sofia Vrazhdebna <span className="bg-gray-100 text-xs px-1 py-0.5 rounded ml-1">SOF</span></div>
                <div className="text-gray-400 text-xs">Sofia, Bulgaria</div>
              </div>
            </div>
            {/* Divider */}
            <div className="w-8 flex flex-col items-center justify-center">
              <div className="h-2 w-2 rounded-full border-2 border-gray-300 mb-1" />
              <div className="flex-1 border-l-2 border-gray-200" />
              <div className="h-2 w-2 rounded-full border-2 border-gray-300 mt-1" />
            </div>
            {/* تفاصيل الرحلة */}
            <div className="flex-1 pl-4 flex flex-col justify-between">
              <div>
                <div className="font-semibold">Wizz Air</div>
                <ul className="mt-2 space-y-1 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <FaSuitcase className="text-gray-400" />
                    Hand baggage: <span className="font-medium">1 pc / 40×30×20 cm</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaSuitcaseRolling className="text-gray-400" />
                    Checked baggage: <span className="font-medium">1 × 20 kg</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPlaneDeparture className="text-gray-400" />
                    Flight: <span className="font-medium">W6 4302</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <FaPhone className="text-gray-400" />
                    Class: <span className="font-medium">Economy</span>
                  </li>
                </ul>
              </div>
              {/* ذيل الطائرة */}
              <div className="flex justify-end">
                <div className="w-24 h-14">
                  <svg viewBox="0 0 80 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M80 48L0 24L80 0V48Z" fill="#FF6B00"/>
                    <path d="M80 48L60 24L80 0V48Z" fill="#F9B233"/>
                    <rect x="60" y="22" width="20" height="4" fill="#B0B0B0"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ملاحظة الوقت */}
        <div className="text-gray-400 text-sm mb-6">
          Departure and arrival times are shown in local time
        </div>
        {/* زر الاختيار */}
        <div className="flex justify-end">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-8 rounded-xl text-lg transition">
            Select
          </button>
        </div>
      </div>
    </div>
  );
}