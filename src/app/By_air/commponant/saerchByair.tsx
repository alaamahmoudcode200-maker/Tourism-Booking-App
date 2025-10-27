'use client';
import PassengerSelector from './PassengerSelector';
import Calendar from './calender';
export default function SearchByAir() {

  return (
    <section className="mx-auto -mt-10 my-12 max-w-[1000px] px-4 text-center">
      <div className="mb-5 text-left">
        <h2 className="text-[20px] font-extrabold text-[#E85528] mb-1">
          Where Is Your Next Dream Place?
        </h2>
        <p className="text-sm text-gray-500">
          Find Exclusive Genius Rewards In Every Corner Of The World!
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg  shadow-md">
        <form className="flex flex-row items-stretch">
          {/* From */}
          <div className="flex-1 px-4 py-3 text-sm text-gray-800 border-r border-gray-100">
            <label htmlFor="from" className="block text-gray-400 text-xs mb-1">From</label>
            <input
              id="from"
              type="text"
              value="Moscow"
              readOnly
              className="w-full bg-transparent outline-none font-semibold text-gray-800"
            />
          </div>

          {/* To */}
          <div className="flex-1 px-4 py-3 text-sm text-gray-800 border-r border-gray-100">
            <label htmlFor="to" className="block text-gray-400 text-xs mb-1">To</label>
            <input
              id="to"
              type="text"
              value="Sochi"
              readOnly
              className="w-full bg-transparent outline-none font-semibold text-gray-800"
            />
          </div>

          {/* When */}
          <div className="flex-1 px-4 py-3 text-sm text-gray-800 border-r border-gray-100">
             <Calendar />
          </div>

          {/* Back */}
          <div className="flex-1 px-4 py-3 text-sm text-gray-800 border-r border-gray-100">
            <label htmlFor="back" className="block text-gray-400 text-xs mb-1">Back</label>
            <input
              id="back"
              type="text"
              value="22 Aug"
              readOnly
              className="w-full bg-transparent outline-none font-semibold text-gray-800"
            />
          </div>

          {/* Who's Flying? */}
          <div className="flex-1 px-4 py-3 text-sm text-gray-800">
            <PassengerSelector />
          </div>

          {/* Find flights button */}
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-r-lg transition-colors duration-200 flex items-center justify-center"
          >
            Find flights
          </button>
        </form>
      </div>
    </section>
  );
}