'use client';

export default function SeatMap() {
  // بيانات الخريطة: 0 = محجوز، 1 = متاح، 2 = مختار
  const seats = [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 
   
  ];
  const seats2 = [
    [2, 1, 1, 1, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 2, 1, 1, 1, 1],
 
   
  ];

  return (
    <div className="w-full  bg-gray-50 rounded-lg p-2">
        <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-10 gap-1 h-1/2">
        {seats.map((row, rowIndex) =>
          row.map((seat, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-4 h-4 rounded-sm ${
                seat === 0
                  ? 'bg-gray-300'
                  : seat === 1
                  ? 'bg-gray-200'
                  : 'bg-orange-500 border-2 border-orange-400'
              }`}
            ></div>
          ))
        )}
      </div>
      <div className="grid grid-cols-10 gap-1  h-1/2">
        {seats2.map((row, rowIndex) =>
          row.map((seat, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-4 h-4 rounded-sm ${
                seat === 0
                ? 'bg-gray-300'
                : seat === 1
                ? 'bg-gray-200'
                : 'bg-orange-500 border-2 border-orange-400'
            }`}
            ></div>
          ))
        )}
      </div>
        </div>
   
    </div>
  );
}