'use client';

import { Star } from 'lucide-react';
import { ChangeEvent, useState } from 'react';
export default function FilterPanel() {
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

  return (
    <div>
<details className="dropdown dropdown-bottom lg:hidden">
  <summary className="bg-white shadow border border-gray-300 rounded-xl px-4 py-2">
    Filters
  </summary>

  <ul className="dropdown-content bg-white rounded-xl shadow-lg z-20 w-[70vw] max-w-sm p-4 max-h-[80vh] overflow-y-auto">

    {/* العنوان + Clear All */}
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-orange-500 font-bold">Filter By</h2>
      <button className="text-gray-700 text-sm hover:text-gray-900">Clear All</button>
    </div>

    {/* Budget */}
    <div className="mb-6">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Your Budget For Per Night
      </label>

      <div className="flex gap-2">
        <input
          type="number"
          defaultValue="5"
          className="w-1/2 text-black px-2 py-1 border border-gray-300 rounded text-center"
        />
        <span className="self-center">-</span>
        <input
          type="number"
          defaultValue="487"
          className="w-1/2 text-black px-2 py-1 border border-gray-300 rounded text-center"
        />
      </div>

      {/* Range Slider */}
      <div className="relative w-full h-6 py-2 mt-3">
        <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full -translate-y-1/2"></div>

        <div
          className="absolute top-1/2 h-1.5 bg-orange-500 rounded-full -translate-y-1/2"
          style={{
            left: `${(min / 500) * 100}%`,
            right: `${100 - (max / 500) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min="0"
          max="500"
          value={min}
          onChange={(e) => handleChange(e, true)}
          className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
        />

        <div
          className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${(min / 500) * 100}%` }}
        ></div>

        <input
          type="range"
          min="0"
          max="500"
          value={max}
          onChange={(e) => handleChange(e, false)}
          className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
        />

        <div
          className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow -translate-y-1/2 -translate-x-1/2"
          style={{ left: `${(max / 500) * 100}%` }}
        ></div>
      </div>
    </div>

    {/* أقسام الفلاتر */}
    {[
      {
        title: "Popular Filters",
        items: [
          ["Breakfast Included", 120],
          ["All-Inclusive", 87],
          ["Free Cancellation", 204],
          ["Pool", 103],
          ["Pet Friendly", 42],
        ],
      },
      {
        title: "Room Facilities",
        items: [
          ["Own Bathroom", 198],
          ["Kitchen", 113],
          ["Sea View", 76],
          ["Baby Bed", 94],
          ["Bathtub", 135],
        ],
      },
      {
        title: "Bed Type",
        items: [
          ["Two Single Beds", 142],
          ["King Beds", 89],
          ["Baby Cots", 67],
          ["Double Bed", 150],
          ["Single Beds", 98],
        ],
      },
      {
        title: "Distance From Center",
        items: [
          ["Less Than 1 Km", 76],
          ["Less Than 5 Km", 134],
          ["Less Than 15 Km", 201],
        ],
      },
    ].map((section, index) => (
      <div key={index} className="mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">{section.title}</h3>
        <ul className="space-y-2">
          {section.items.map(([label, count], i) => (
            <li key={i} className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="w-5 h-5 checkbox checked:bg-orange-500 border-gray-300"
                />
                <span className="text-sm text-black">{label}</span>
              </label>
              <span className="text-xs text-gray-700">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </ul>
</details>


   <div className="bg-white hidden  lg:block p-5 rounded-lg shadow-sm max-w-lg mx-auto">
      {/* العنوان + Clear All */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-orange-500 font-bold">Filter By</h2>
        <button className="text-gray-700 text-sm  hover:text-gray-700">Clear All</button>
      </div>

      {/* Your Budget For Per Night */}
      <div className="mb-6">
        <label className=" text-sm  font-medium text-gray-700 mb-2">Your Budget For Per Night</label>
        <div className="flex gap-2">
          <input
            type="number"
            defaultValue="5"
            className="w-1/2 text-black px-2 py-1 border border-gray-300 rounded text-center"
          />
          <span className="self-center">-</span>
          <input
            type="number"
            defaultValue="487"
            className="w-1/2 text-black px-2 py-1 border border-gray-300 rounded text-center"
          />
        </div>
         <div className="relative w-full h-6 py-2">
      {/* الخلفية الرمادية */}
      <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
      
      {/* الشريط الأحمر بين النقطتين */}
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
{/* Popular Filters */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Popular Filters</h3>
  <ul className="space-y-2">
    {[
      { label: 'Breakfast Included', count: 120 },
      { label: 'All-Inclusive', count: 87 },
      { label: 'Free Cancellation', count: 204 },
      { label: 'Pool', count: 103 },
      { label: 'Pet Friendly', count: 42 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500  border-gray-300 rounded focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>

{/* Room Facilities */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Room Facilities</h3>
  <ul className="space-y-2">
    {[
      { label: 'Own Bathroom', count: 198 },
      { label: 'Kitchen', count: 113 },
      { label: 'Sea View', count: 76 },
      { label: 'Baby Bed', count: 94 },
      { label: 'Bathtub', count: 135 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500  border-gray-300 rounded focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>

{/* Guests Rating */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Guests Rating</h3>
  <ul className="space-y-2">
    {[
      { label: 'All', stars: 0 },
      { label: 'Outstanding 9+', stars: 5 },
      { label: 'Very Good 8+', stars: 4 },
      { label: 'Good 7+', stars: 3 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="radio" 
            name="rating" 
            className="w-5 h-5 radio  rounded-full text-white checked:bg-orange-500 border-gray-300  focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
          {item.stars > 0 && (
            <div className="flex text-yellow-400">
              {[...Array(item.stars)].map((_, j) => (
                <Star key={j} size={14} fill="currentColor" />
              ))}
            </div>
          )}
        </label>
      </li>
    ))}
  </ul>
</div>

{/* Bed Type */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Bed Type</h3>
  <ul className="space-y-2">
    {[
      { label: 'Two Single Beds', count: 142 },
      { label: 'King Beds', count: 89 },
      { label: 'Baby Cots', count: 67 },
      { label: 'Double Bed', count: 150 },
      { label: 'Single Beds', count: 98 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500 border-gray-300 rounded focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>

{/* Leisure Activities */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Leisure Activities</h3>
  <ul className="space-y-2">
    {[
      { label: 'Sauna', count: 58 },
      { label: 'Fitness Centre', count: 112 },
      { label: 'Yoga', count: 74, checked: true },
      { label: 'Steam Bath', count: 43 },
      { label: 'Meditation', count: 29 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked={item.checked}
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500 border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>

{/* Travel Sustainability */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Travel Sustainability</h3>
  <ul className="space-y-2">
    {[
      { label: 'Level 2 and Above 1', count: 58 },
      { label: 'Level and Above 2', count: 112 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500 border-gray-300 rounded focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>

{/* Distance From Center */}
<div className="mb-6">
  <h3 className="font-semibold text-gray-800 mb-3">Distance From Center</h3>
  <ul className="space-y-2">
    {[
      { label: 'Less Than 1 Km', count: 76 },
      { label: 'Less Than 5 Km', count: 134 },
      { label: 'Less Than 15 Km', count: 201 },
    ].map((item, i) => (
      <li key={i} className="flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 checkbox  text-white checked:bg-orange-500 border-gray-300 rounded focus:ring-2 focus:ring-orange-500" 
          />
          <span className="text-sm text-black">{item.label}</span>
        </label>
        <span className="text-xs text-gray-700">{item.count}</span>
      </li>
    ))}
  </ul>
</div>
      </div>
    </div>
    </div>
  
  );
}