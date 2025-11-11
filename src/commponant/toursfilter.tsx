'use client';

import { ChangeEvent, useState } from 'react';

// أنواع البيانات
interface FiltersState {
  individualService: boolean;
  groupPolicy: boolean;
  morning: boolean;
  evening: boolean;
  day: boolean;
  night: boolean;
  byBus: boolean;
  byWater: boolean;
  onFoot: boolean;
}

export default function FlightFiltersTours() {
  // حالة الفلاتر
  const [filters, setFilters] = useState<FiltersState>({
    individualService: false,
    groupPolicy: false,
    morning: false,
    evening: false,
    day: true, // محدد بالافتراضي
    night: false,
    byBus: false,
    byWater: false,
    onFoot: true, // محدد بالافتراضي
  });

  // حالة السلايدر (الميزانية والمدة)
  const [budgetMin, setBudgetMin] = useState(50);
  const [budgetMax, setBudgetMax] = useState(450);
  const [durationMin, setDurationMin] = useState(0);
  const [durationMax, setDurationMax] = useState(100);

  // دوال تعديل السلايدر
  const handleBudgetChange = (e: ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = Number(e.target.value);
    if (isMin) {
      if (value < budgetMax) setBudgetMin(value);
    } else {
      if (value > budgetMin) setBudgetMax(value);
    }
  };

  const handleDurationChange = (e: ChangeEvent<HTMLInputElement>, isMin: boolean) => {
    const value = Number(e.target.value);
    if (isMin) {
      if (value < durationMax) setDurationMin(value);
    } else {
      if (value > durationMin) setDurationMax(value);
    }
  };

  // دالة تغيير الفلاتر
  const toggleFilter = (key: keyof FiltersState) => {
    setFilters(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-80 mx-auto p-6 bg-white rounded-lg shadow-sm">
      {/* Filter By */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filter By</h2>

      {/* Your Budget For Per Night */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Your Budget For Per Night</h3>
        <div className="flex items-center gap-2">
        <div className="relative w-full h-6 py-2">
      {/* الخلفية الرمادية */}
      <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
      
      {/* الشريط الأحمر بين النقطتين */}
      <div 
        className="absolute top-1/2 h-1.5 bg-orange-500 rounded-full transform -translate-y-1/2"
        style={{ 
          left: `${(durationMin / 500) * 100}%`, 
          right: `${100 - (durationMax / 500) * 100}%` 
        }}
      ></div>

      {/* النقطة اليسرى */}
      <input
        type="range"
        min="0"
        max="500"
        value={durationMin}
        onChange={(e) => handleBudgetChange(e, true)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(durationMin / 500) * 100}%` }}
      ></div>

      {/* النقطة اليمنى */}
      <input
        type="range"
        min="0"
        max="500"
        value={durationMax}
        onChange={(e) => handleDurationChange(e, false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(durationMax / 500) * 100}%` }}
      ></div>


      </div>
          
      
        </div>
        <div className="flex justify-between mt-2">
          <div className="bg-gray-100 px-2 py-1 text-xs rounded-md">Min Price $</div>
          <div className="bg-gray-100 px-2 py-1 text-xs rounded-md">Max Price $</div>
        </div>
      </div>

      {/* Type Of Excursion */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Type Of Excursion</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.individualService}
              onChange={() => toggleFilter('individualService')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Individual Service</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.groupPolicy}
              onChange={() => toggleFilter('groupPolicy')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Group Policy</span>
          </label>
        </div>
      </div>

      {/* Time Of The Event */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Time Of The Event</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.morning}
              onChange={() => toggleFilter('morning')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Morning &nbsp; 06:00 - 12:00</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.evening}
              onChange={() => toggleFilter('evening')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Evening &nbsp; 18:00 - 23:00</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.day}
              onChange={() => toggleFilter('day')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Day &nbsp; 12:00 - 18:00</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.night}
              onChange={() => toggleFilter('night')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">Night &nbsp; 23:00 - 06:00</span>
          </label>
        </div>
      </div>

      {/* Moving Method */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Moving Method</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.byBus}
              onChange={() => toggleFilter('byBus')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">By Bus</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.byWater}
              onChange={() => toggleFilter('byWater')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">By Water</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.onFoot}
              onChange={() => toggleFilter('onFoot')}
              className="w-4 h-4 checkbox checked:bg-orange-500 text-white border-gray-300 rounded focus:ring-2"
            />
            <span className="text-sm">On Foot</span>
          </label>
        </div>
      </div>

      {/* Duration */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-800 mb-2">Duration</h3>
        <div className="  items-center gap-2">
          <div className="text-sm text-gray-500">Any Duration</div>
             <div className="relative w-full h-6 py-2">
      {/* الخلفية الرمادية */}
      <div className="absolute top-1/2 left-0 right-0 h-1.5 bg-gray-200 rounded-full transform -translate-y-1/2"></div>
      
      {/* الشريط الأحمر بين النقطتين */}
      <div 
        className="absolute top-1/2 h-1.5 bg-orange-500 rounded-full transform -translate-y-1/2"
        style={{ 
          left: `${(durationMin / 500) * 100}%`, 
          right: `${100 - (durationMax / 500) * 100}%` 
        }}
      ></div>

      {/* النقطة اليسرى */}
      <input
        type="range"
        min="0"
        max="500"
        value={durationMin}
        onChange={(e) => handleDurationChange(e, true)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(durationMin / 500) * 100}%` }}
      ></div>

      {/* النقطة اليمنى */}
      <input
        type="range"
        min="0"
        max="500"
        value={durationMax}
        onChange={(e) => handleDurationChange(e, false)}
        className="absolute top-0 w-full h-6 opacity-0 cursor-pointer"
      />
      <div 
        className="absolute top-1/2 w-6 h-6 bg-orange-500 rounded-full border-2 border-white shadow-md transform -translate-y-1/2 -translate-x-1/2"
        style={{ left: `${(durationMax / 500) * 100}%` }}
      ></div>


      </div>
          
     
        </div>
      </div>
    </div>
  );
}