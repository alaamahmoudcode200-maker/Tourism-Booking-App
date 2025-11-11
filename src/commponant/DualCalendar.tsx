'use client';

import { useState } from 'react';

// أنواع البيانات
interface MonthData {
  name: string;
  days: number;
}

const DualCalendar = () => {
  // حالة الشهر والسنة
  const [currentMonth, setCurrentMonth] = useState<number>(4); // April
  const [currentYear, setCurrentYear] = useState<number>(2021);

  // أيام الأسبوع
  const daysOfWeek: string[] = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  // بيانات الشهور
  const months: MonthData[] = [
    { name: 'January', days: 31 },
    { name: 'February', days: 28 },
    { name: 'March', days: 31 },
    { name: 'April', days: 30 },
    { name: 'May', days: 31 },
    { name: 'June', days: 30 },
    { name: 'July', days: 31 },
    { name: 'August', days: 31 },
    { name: 'September', days: 30 },
    { name: 'October', days: 31 },
    { name: 'November', days: 30 },
    { name: 'December', days: 31 },
  ];

  // حساب عدد أيام الشهر
  const getDaysInMonth = (month: number, year: number): number => {
    return new Date(year, month, 0).getDate();
  };

  // حساب أول يوم في الشهر (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const getFirstDayOfMonth = (month: number, year: number): number => {
    return new Date(year, month - 1, 1).getDay();
  };

  // إنشاء أيام التقويم (بما في ذلك الأيام الفارغة)
  const getCalendarDays = (month: number, year: number): (number | null)[] => {
    const daysInMonth = getDaysInMonth(month, year);
    const firstDay = getFirstDayOfMonth(month, year);
    const calendarDays: (number | null)[] = [];

    // إضافة خلايا فارغة قبل أول يوم
    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(null);
    }

    // إضافة أيام الشهر
    for (let day = 1; day <= daysInMonth; day++) {
      calendarDays.push(day);
    }

    return calendarDays;
  };

  // الأيام المحددة (ثابتة للمثال)
  const selectedDays: number[] = [7, 9, 6]; // 7,9 في أبريل — 6 في مايو

  // دوال التنقل بين الشهور
  const goToPrevMonth = (): void => {
    if (currentMonth > 1) {
      setCurrentMonth(currentMonth - 1);
    } else {
      setCurrentMonth(12);
      setCurrentYear(currentYear - 1);
    }
  };

  const goToNextMonth = (): void => {
    if (currentMonth < 12) {
      setCurrentMonth(currentMonth + 1);
    } else {
      setCurrentMonth(1);
      setCurrentYear(currentYear + 1);
    }
  };

  // بيانات الشهرين
  const currentMonthData = months[currentMonth - 1];
  const nextMonthData = months[currentMonth % 12];

  // أيام الشهرين
  const currentMonthDays = getCalendarDays(currentMonth, currentYear);
  const nextMonthDays = getCalendarDays((currentMonth % 12) + 1, currentYear);

  // دالة تحقق مما إذا كان اليوم محددًا
  const isDaySelected = (day: number | null, monthIndex: number): boolean => {
    if (day === null) return false;
    if (monthIndex === currentMonth - 1) return selectedDays.includes(day);
    if (monthIndex === currentMonth % 12) return selectedDays.includes(day);
    return false;
  };

  // دالة تحقق مما إذا كان اليوم من شهر آخر (سابق/لاحق)
  const isOtherMonthDay = (day: number | null, monthIndex: number): boolean => {
    if (day === null) return true;
    if (monthIndex === currentMonth - 1) return day > months[currentMonth - 1].days;
    if (monthIndex === currentMonth % 12) return day > months[currentMonth % 12].days;
    return false;
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm">

      {/* التقويمان جنب بعض */}
      <div className="grid grid-cols-2 gap-4 py-3 rounded-2xl bg-gray-100">
        <div>
          <div className='grid grid-cols-8 px-2  items-center'>
            <div className=''>
                   <button
          onClick={goToPrevMonth}
          className=" rounded-full bg-gray-100"
          aria-label="Previous month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
        </button>
            </div>
     
        <div className="col-span-7 flex justify-center text-center">
         <div className='bg-white px-3  rounded-l-xl shadow py-1'>
          {currentMonthData.name}
         </div>
         <div className='bg-white px-2 rounded-e-xl shadow py-1'>
           {currentYear}
         </div>
          
        
        </div>
          </div>
                {/* التقويم الأول */}
        <div className=" p-4 ">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-xs text-gray-500 text-center">
                {day}
              </div>
            ))}
          </div>
          <div className="grid  grid-cols-7 gap-1">
            {currentMonthDays.map((day, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
                  day === null
                    ? 'text-gray-300'
                    : isDaySelected(day, currentMonth - 1)
                    ? 'bg-orange-500 text-white'
                    : isOtherMonthDay(day, currentMonth - 1)
                    ? 'text-gray-200'
                    : 'bg-orange-200 shadow text-orange-500 cursor-pointer'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        </div>
        {/* التقويم الثاني */}
          <div>
            <div  className='grid grid-cols-8 items-center'>
           <div className="col-span-7 flex justify-center text-center">
         <div className='bg-white px-3 rounded-l-xl shadow py-1'>
          {currentMonthData.name}
         </div>
         <div className='bg-white px-2 rounded-e-xl shadow py-1'>
           {currentYear}
         </div>
         </div>
              <div>
                  <button
          onClick={goToNextMonth}
          className=" rounded-full  bg-gray-100"
          aria-label="Next month"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </button>
              </div>
      
            </div>
              <div className=" p-4 ">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-xs text-gray-500 text-center">
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {nextMonthDays.map((day, index) => (
              <div
                key={index}
                className={`w-8 h-8 flex items-center justify-center rounded-md text-sm ${
                  day === null
                    ? 'text-gray-300'
                    : isDaySelected(day, currentMonth % 12)
                    ? 'bg-orange-500 text-white'
                    : isOtherMonthDay(day, currentMonth % 12)
                    ? 'text-gray-200'
                    : 'bg-white shadow cursor-pointer'
                }`}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
        </div>
    
      </div>

      {/* أزرار التحكم */}
      <div className="mt-6 flex justify-end gap-2">
        <button className=" py-2 px-4 bg-orange-100 hover:bg-orange-200 text-orange-500 rounded-md font-medium transition">
          Clear
        </button>
        <button className=" py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white rounded-md font-medium transition">
          Choose
        </button>
      </div>
    </div>
  );
};

export default DualCalendar;