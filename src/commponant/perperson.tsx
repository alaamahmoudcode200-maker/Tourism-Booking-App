'use client';

// تعريف نوع الرحلة
interface Tour {
  id: number;
  price: number;
  currency?: string;
  features: {
    duration: string;
    tourType: string;
    language: string;
    location: string;
  };
  buttonText: string;
}

export default function TourCard() {
  // ✅ بيانات الرحلات من مصفوفة
  const tours: Tour[] = [
    {
      id: 1,
      price: 708,
      currency: '$',
      features: {
        duration: 'Duration: 1 Hour And 30 Minutes',
        tourType: 'Group Tour',
        language: 'In Russian',
        location: '4/1 Malaya Morskaya Street',
      },
      buttonText: 'Select A Date',
    },
    // مثال على رحلة تانية (ممكن تبقي مخفية)
    {
      id: 2,
      price: 599,
      currency: '$',
      features: {
        duration: 'Duration: 2 Hours',
        tourType: 'Private Tour',
        language: 'In English',
        location: 'Central Avenue, Moscow',
      },
      buttonText: 'Book Now',
    },
  ];

  // استخدم أول رحلة (أو أي رحلة حسب الحاجة)
  const tour = tours[0]; // <-- ممكن تغيّر الرقم ده أو تمرّره من props

  return (
    <div className="w-full mt-3 mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
      {/* Price */}
      <div className="mb-4 flex items-center gap-2">
        <span className="text-2xl font-bold text-gray-900">from {tour.price}{tour.currency}</span>
        <span className="text-sm text-gray-500">per person</span>
      </div>

      {/* Features */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">{tour.features.duration}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">{tour.features.tourType}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">{tour.features.language}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <span className="text-sm text-gray-700">{tour.features.location}</span>
        </div>
      </div>

      {/* Button */}
      <button className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition">
        {tour.buttonText}
      </button>
    </div>
  );
}