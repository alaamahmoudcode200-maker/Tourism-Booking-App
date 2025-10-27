'use client';

import Image from 'next/image';
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaInstagram,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-black w-full text-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      {/* القسم الرئيسي */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">

        {/* العمود 1: الشعار + رقم الهاتف */}
        <div className="sm:col-span-2 lg:col-span-1">
          <Image
            src="/logo.png"
            alt="Matroshka Travel"
            width={150}
            height={50}
            className="mb-4 sm:mb-6 w-[120px] sm:w-[150px] h-auto"
          />
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <FaPhone size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span className="text-sm sm:text-base">Need help? Call us</span>
          </div>
          <div className="text-lg sm:text-xl font-bold text-orange-400">1-800-222-8888</div>
        </div>

        {/* العمود 2: Company */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Company</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">About Us</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Community Blog</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Jobs & Careers</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Our Awards</a></li>
          </ul>
        </div>

        {/* العمود 3: Services */}
        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Tour Guide</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Tour Booking</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Hotel Booking</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Ticket Booking</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Rental Services</a></li>
          </ul>
        </div>

        {/* العمود 4: Support + Newsletter */}
        <div className="sm:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 mb-4 sm:mb-6">
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Forum support</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">How it works</a></li>
            <li><a href="#" className="hover:text-white transition text-sm sm:text-base">Security</a></li>
          </ul>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Newsletter</h3>
            <form className="flex flex-col gap-2 sm:gap-3">
              <div className="relative">
                <FaEnvelope
                  size={14}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 sm:w-4 sm:h-4"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 sm:py-3 bg-gray-800 border border-gray-700 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 sm:py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-medium transition text-sm sm:text-base"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

      </div>

      {/* خط فاصل */}
      <div className="border-t border-gray-800 mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
        <div className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
          © 2025 Matroshka. All rights reserved.
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-xs sm:text-sm text-gray-400">Social</span>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaFacebookF size={16} className="sm:w-5 sm:h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTwitter size={16} className="sm:w-5 sm:h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaTiktok size={16} className="sm:w-5 sm:h-5" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition"><FaInstagram size={16} className="sm:w-5 sm:h-5" /></a>
        </div>
      </div>
    </footer>
  );
}