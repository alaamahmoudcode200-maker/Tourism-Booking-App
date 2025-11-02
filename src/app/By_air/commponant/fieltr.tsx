'use client';


import { ChangeEvent, useState } from 'react';

// أنواع البيانات
interface AirlinesState {
  Austrian: boolean;
  AirFrance: boolean;
  Lufthansa: boolean;
  Brussels: boolean;
  TWA: boolean;
}

interface FiltersState {
  drinkIncluded: boolean;
  mealsIncluded: boolean;
  vip: boolean;
  childFriendly: boolean;
  petFriendly: boolean;
}

type RatingValue = 'outstanding' | 'veryGood' | 'good' | 'average' | 'poor';
 
const FlightFilters = () => {
       const [min, setMin] = useState(50);
    const [max, setMax] = useState(450);
  
    const handleChange = (e: ChangeEvent<HTMLInputElement>, isMin: boolean) => {
      const value = Number(e.target.value);
      if (isMin) {
        if (value < max) setMin(value);
      } else {
        if (value > min) setMax(value);
      }
    };
  // حالة شركات الطيران
  const [airlines, setAirlines] = useState<AirlinesState>({
    Austrian: false,
    AirFrance: false,
    Lufthansa: true,
    Brussels: false,
    TWA: false,
  });

  // حالة التقييم
  const [rating, setRating] = useState<RatingValue>('veryGood');

  // حالة الفلاتر الشائعة
  const [filters, setFilters] = useState<FiltersState>({
    drinkIncluded: false,
    mealsIncluded: false,
    vip: true,
    childFriendly: false,
    petFriendly: false,
  });

  // قائمة التقييمات
  const ratingOptions: { value: RatingValue; label: string }[] = [
    { value: 'outstanding', label: 'Outstanding' },
    { value: 'veryGood', label: 'Very Good' },
    { value: 'good', label: 'Good' },
    { value: 'average', label: 'Average' },
    { value: 'poor', label: 'Poor' },
  ];

  return (
    <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Departure Time */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Departure time</h3>
        <div className="grid grid-cols-4 items-center gap-2">
          <span className="text-xs text-gray-500">From 12:00</span>
          <div className="relative col-span-2 h-6 py-2">
            <div 
        className="absolute top-3 w-full h-1.5 bg-gray-200 -ml-4 rounded-full transform -translate-y-1/2"
        style={{ 
          left: `${(min / 500) * 100}%`, 
          right: `${100 - (max / 500) * 100}%` 
        }}
      ></div>

              <div 
        className="absolute top-1/2 h-1.5 bg-orange-500 rounded-full transform -translate-y-1/2"
        style={{ 
          left: `${(min / 500) * 100}%`, 
          right: `${100 - (max / 500) * 100}%` 
        }}
      ></div>

      {/* النقطة اليسرى */}
      <input
        type="range"
        min="0"
        max="500"
        value={min}
        onChange={(e) => handleChange(e, true)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(min / 500) * 100}%` }}
      ></div>

      {/* النقطة اليمنى */}
      <input
        type="range"
        min="0"
        max="500"
        value={max}
        onChange={(e) => handleChange(e, false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(max / 500) * 100}%` }}
      ></div>
          </div>
          <span className="text-xs text-gray-500">Up to 16:45</span>
        </div>
      </div>

      {/* Trip Duration */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Trip Duration</h3>
        <div className="grid grid-cols-4 items-center gap-2">
          <span className="text-xs text-gray-500">From 7h to 12h</span>
         <div className="relative  col-span-2  h-6 py-2">
        <div   className="absolute top-3 w-full h-1.5 bg-gray-200 -ml-4 rounded-full transform -translate-y-1/2"style={{ 
          left: `${(min / 500) * 100}%`, 
          right: `${100 - (max / 500) * 100}%` 
        }}></div>

      <div  className="absolute top-1/2 h-1.5 bg-orange-500 rounded-full transform -translate-y-1/2"
        style={{ 
          left: `${(min / 500) * 100}%`, 
          right: `${100 - (max / 500) * 100}%` 
        }}
      ></div>

    
      <input type="range"
        min="0"
        max="500"
        value={min}
        onChange={(e) => handleChange(e, true)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(min / 500) * 100}%` }}
      ></div>

      {/* النقطة اليمنى */}
      <input type="range"
        min="0"
        max="500"
        value={max}
        onChange={(e) => handleChange(e, false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(max / 500) * 100}%` }}
      ></div>
          </div>
          <button className="px-2 py-1 bg-gray-100 hover:bg-gray-200 text-xs rounded-md">
            One Stop
          </button>
        </div>
      </div>

      {/* Airline */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Airline</h3>
        <div className="space-y-2">
          {(Object.entries(airlines) as [keyof AirlinesState, boolean][]).map(([name, checked]) => (
            <label key={name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={() =>
                  setAirlines((prev) => ({
                    ...prev,
                    [name]: !prev[name],
                  }))
                }
                className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2 "
              />
              <span className="text-sm">{name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Passenger Rating */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Passenger Rating</h3>
        <div className="space-y-2">
          {ratingOptions.map((option) => (
            <label key={option.value} className="flex items-center gap-2">
              <input
                type="radio"
                name="rating"
                value={option.value}
                checked={rating === option.value}
                onChange={() => setRating(option.value)}
                className="w-4 h-4 radio checked:bg-orange-500 text-white border-gray-300 rounded-full focus:ring-2"
              />
              <span className="text-sm">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Popular Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Popular Filters</h3>
        <div className="space-y-2">
          {(Object.entries(filters) as [keyof FiltersState, boolean][]).map(([name, checked]) => (
            <label key={name} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={checked}
                onChange={() =>
                  setFilters((prev) => ({
                    ...prev,
                    [name]: !prev[name],
                  }))
                }
                className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2 "
              />
              <span className="text-sm">
                {name.replace(/([A-Z])/g, ' $1').trim()}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightFilters;