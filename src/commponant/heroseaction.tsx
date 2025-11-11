import Image from "next/image";
import React from "react";

export default function Hero(): React.JSX.Element {
  return (
    <section className="w-full  sm:-mt-20 bg-gray-50">
      <div className="w-full grid grid-cols-1 items-center">
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] overflow-hidden shadow-md">
          {/* الصورة كخلفية مصغّرة وممتدة */}
          <Image
            src="/slider.jpg"
            alt="Scenic destination"
            fill
            className="object-cover"
            style={{ zIndex: 0 }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}