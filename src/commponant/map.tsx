'use client';

export default function CityCard() {
  return (
    <div className="w-full lg:w-6xl   mx-auto">
   
      <div className="bg-white p-6 rounded-lg shadow-sm  md:max-w-full flex flex-col md:flex-row gap-6">

        {/* الخريطة على اليسار (iframe) */}
        <div className="w-full md:w-1/3 relative">
          {/* iframe خريطة جوجل */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198765.5861949775!2d11.920592599999999!3d57.7088572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff3b87c54e751%3A0x344740921276984!2sGothenburg%2C%20Sweden!5e0!3m2!1sen!2sus!4v1720000000000!5m2!1sen!2sus"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
            title="Gothenburg Map"
          ></iframe>

          {/* زر View larger map */}
          <div className="absolute top-2 left-2 bg-white px-3 py-1 rounded-md shadow-sm text-xs font-medium z-10">
            <div className="text-gray-800">Gothenburg</div>
            <a
              href="https://www.google.com/maps/place/Gothenburg,+Sweden"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View larger map
            </a>
          </div>

          {/* أيقونة تكبير الخريطة (سهم) */}
          <div className="absolute bottom-2 right-2 bg-white p-1 rounded-full shadow-sm z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 12L4 8l4-4v3H5v2h3v3zM9 12v-3h3V7H9V4l4 4-4 4z"/>
            </svg>
          </div>
        </div>

        {/* النصوص على اليمين */}
        <div className="md:w-2/3 space-y-3">
           <div className="flex items-center mb-4">
        <span className="font-medium text-gray-700 mr-3">Sort By :</span>
        <select className="border border-gray-300 text-gray-800 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>Our Top Picks For Families</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating: Highest First</option>
        </select>
      </div>
          <h2 className="text-xl font-bold text-gray-800">Gothenburg</h2>
          <div className="text-gray-500">120 Properties Found</div>

          <p className="text-gray-600 mt-2">
            Travel Professionals Dedicated To Simplifying Your Travel Experience By Curating Flight And Accommodation Services On A User-Friendly Platform. Committed To Quality And Assurance.
            <span className="text-orange-500 font-medium ml-1 cursor-pointer">Find More Here ...</span>
          </p>
        </div>
      </div>
    </div>
  );
}