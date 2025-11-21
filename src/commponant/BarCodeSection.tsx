'use client';
import Image from 'next/image';

export default function BarCodeSection() {
  return (
    <div className="grid grid-cols-3 items-center lg:grid-cols-1 sm:flex-row  justify-center p-4 bg-white rounded-lg ">
      {/* QR Code */}
      <div className="w-20 h-20 sm:w-24 sm:h-2 rounded-md flex items-center justify-center mb-4 sm:mb-0 sm:mr-4">
       <Image src={"/qr-code.png"} alt='' width={60} height={60} style={{}}/>
      </div>

      {/* Barcode + Serial Number */}
      <div className="col-span-2 flex flex-col items-center mt-3 justify-center sm:items-start">
        {/* Barcode */}
        <div className="h-full hidden  sm:h-[200px] w-16 bg-white ml-4  border-gray-300 lg:flex items-center justify-center mb-2">
          <div className="h-[90%]  w-full bg-black grid grid-cols-1 ">
            {Array.from({ length: 50 }, (_, i) => (
              <div
                key={i}
                className={`w-full ${
                  i % 3 === 0 ? 'h-1' : i % 3 === 1 ? 'h-0.5' : 'h-0.25'
                } bg-white`}
              ></div>
            ))}
          </div>
        </div>
<div className="w-full lg:hidden sm:w-[200px] h-16 bg-white ml-4 border-gray-300 flex items-center justify-center mb-2">
  <div className="h-[90%] w-full bg-white flex items-stretch">
    {Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        className={`h-full ${
          i % 3 === 0 ? 'w-1' : i % 3 === 1 ? 'w-0.5' : 'w-0.5'
        } bg-black mx-[1px]`}
      ></div>
    ))}
  </div>
</div>

        {/* Serial Number */}
     
      </div>
    </div>
  );
}