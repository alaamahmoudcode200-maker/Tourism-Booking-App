'use client';

import Link from 'next/link';
export default function HeaderTest() {
  return (
    <header className="bg-white h-30 shadow-sm ">
      <div className="max-w-7xl mx-auto px-4 h-20 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <div className="flex-shrink-0 flex  items-center px-3">

              TestPage
         
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex flex-wrap space-x-8">
            <Link href="/HotelsPage" className="text-gray-700 hover:text-orange-500 transition">
              HotelsPage
            </Link>
            <Link href="/HotelsPage/HotelFavourites" className="text-gray-700 hover:text-orange-500 transition">
              HotelFavourites
            </Link>
            <Link href="/HotelsPage/HotelInfromation" className="text-gray-700 hover:text-orange-500 transition">
              HotelInfromation
            </Link>
            <Link href="/HotelsPage/HotelPaymente" className="text-gray-700 hover:text-orange-500 transition">
              HotelPaymente
            </Link>
              <Link href="/HotelsPage/HotelReservation" className="text-gray-700 hover:text-orange-500 transition">
              HotelReservation
            </Link>
            <Link href="/HotelsPage/producthotels" className="text-gray-700 hover:text-orange-500 transition">
              producthotels
            </Link>
            <Link href="/HotelsPage/SearchHotls" className="text-gray-700 hover:text-orange-500 transition">
              SearchHotls
            </Link>
             <Link href="/profile" className="text-gray-700 hover:text-orange-500 transition">
              profile
            </Link>
            <Link href="/By_air" className="text-gray-700 hover:text-orange-500 transition">
              By_air
            </Link>
             <Link href="/By_air/Finl_payment" className="text-gray-700 hover:text-orange-500 transition">
             By_air Finl_payment
            </Link>
             <Link href="/By_air/cheke_pref" className="text-gray-700 hover:text-orange-500 transition">
              By_air cheke_pref
            </Link>
            <Link href="/By_air/Tieket" className="text-gray-700 hover:text-orange-500 transition">
              By_air Tieket
            </Link>
               <Link href="/Railway_station" className="text-gray-700 hover:text-orange-500 transition">
              Railway_station
            </Link>
               <Link href="/Railway_station/Finl_payment" className="text-gray-700 hover:text-orange-500 transition">
             Railway_station Finl_payment
            </Link>
             <Link href="/Railway_station/cheke_pref" className="text-gray-700 hover:text-orange-500 transition">
              Railway_station cheke_pref
            </Link>
            <Link href="/Railway_station/Tieket" className="text-gray-700 hover:text-orange-500 transition">
              Railway_station Tieket
            </Link>
                           <Link href="/The_buses" className="text-gray-700 hover:text-orange-500 transition">
              The_buses
            </Link>
               <Link href="/The_buses/Finl_payment" className="text-gray-700 hover:text-orange-500 transition">
             The_buses Finl_payment
            </Link>
             <Link href="/The_buses/cheke_pref" className="text-gray-700 hover:text-orange-500 transition">
              The_buses cheke_pref
            </Link>
            <Link href="/The_buses/Tieket" className="text-gray-700 hover:text-orange-500 transition">
              The_buses Tieket
            </Link>
              <Link href="/Tours" className="text-gray-700 hover:text-orange-500 transition">
              Tours
            </Link>
               <Link href="/Tours/Finl_payment" className="text-gray-700 hover:text-orange-500 transition">
             The_buses Finl_payment
            </Link>
             <Link href="/Tours/TourInfromation" className="text-gray-700 hover:text-orange-500 transition">
              Tours TourInfromation
            </Link>
            <Link href="/Tours/Tieket" className="text-gray-700 hover:text-orange-500 transition">
              Tours Tieket
            </Link>
               <Link href="/ForgotPassword" className="text-gray-700 hover:text-orange-500 transition">
              ForgotPassword
            </Link>
                 <Link href="/otp" className="text-gray-700 hover:text-orange-500 transition">
             otp
            </Link>
          </nav>
          
          {/* Login Button */}
    
        </div>
      </div>
    </header>
  );
}