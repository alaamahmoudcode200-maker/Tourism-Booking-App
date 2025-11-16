'use client';

import Image from 'next/image';

export default function ResponsiveHeroImage() {
  return (
    <section className="w-full  bg-gray-50 ">
      <div className="w-full grid grid-cols-1 items-center">
        {/* حاوية الصورة مع ارتفاعات متجاوبة */}
        <div className="relative w-full h-[180px] sm:h-[250px] md:h-[350px] lg:h-[450px] xl:h-[550px] overflow-hidden shadow-md">
          {/* الصورة */}
          <Image
            src="/slider.jpg"
            alt="Scenic destination"
            fill
            className="object-cover"
            priority // يحسّن LCP
            sizes="(max-width: 640px) , (max-width: 768px) , (max-width: 1024px) "
            quality={85} // جودة مناسبة بين الحجم والأداء
            // اختياري: لو عندك blurDataURL
          />
        </div>
      </div>
    </section>
  );
}