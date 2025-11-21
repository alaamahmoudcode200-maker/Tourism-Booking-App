'use client';

// استيراد المكونات
import MiniSeatMap from './firstclass';
import LongSeatMap from './economclass';
import PlaneBackgroundSVG from './svgplan';

export default function PreferredSeat() {
  return (
    <div
      className="bg-white rounded-2xl p-4 md:w-2xl lg:w-5xl mx-auto shadow my-15"
      
    >
      {/* العنوان */}
      <div className="font-bold text-lg mb-2">Preferred Seat</div>

       <div className="flex items-center gap-6 mb-8">
            <span className="text-sm font-medium text-foreground">Seat selection:</span>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-orange-400"></div>
              <span className="text-sm text-muted-foreground">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-gray-400"></div>
              <span className="text-sm text-muted-foreground">Reserved</span>
            </div>
          </div>

      {/* شكل الطائرة والمقاعد */}
      <div className="relative flex flex-col items-center py-3 shadow overflow-hidden h-[1000px]">

        {/* ======== جسم الطائرة (على اليمين فقط) ======== */}
        <div
          className="absolute top-10 right-0 w-[450px] hidden lg:block z-0 pointer-events-none"
        >
          <PlaneBackgroundSVG
            width="2450px"
            height="1300px"
            className=" -translate-x-318  -translate-y-40  "
          />
        </div>

        {/* المقاعد */}
        <div className="relative  flex justify-center z-10 w-full">
          <div className="flex flex-col  items-center">
            <MiniSeatMap />

             <LongSeatMap  />
         
         
          </div>
        </div>
      </div>

      {/* السعر وزر الدفع */}
      <div className="flex items-center justify-between gap-3 mt-4 border-t pt-4">
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
