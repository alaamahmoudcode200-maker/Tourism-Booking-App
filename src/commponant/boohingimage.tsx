'use client';

export default function HotelImageGallery() {
  // مصفوفة الصور (يمكنك تغيير الروابط حسب الحاجة)
  const images = [
    '/deitals.jpg',
    '/room2.jpg',
    '/room3.jpg',
    '/room.jpg',
    '/room.jpg',
  ];

  return (
    <div className="w-full mb-5 mx-auto p-4">
      {/* Main Image */}
      <div className="mb-4">
        <img
          src={images[0]}
          alt="Hotel Exterior"
          className="w-full h-[400px] sm:h-[500px] object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {images.slice(1).map((src, index) => (
          <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-md">
            <img
              src={src}
              alt={`Hotel Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      </div>

  );
}