'use client';
import Image from "next/image";
export default function AccountCard() {
  return (
    <div className="w-full my-3 mx-auto p-6 bg-gray-100 rounded-lg shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        {/* Profile Image */}
        <Image
          fill
          src="/profile.jpg" // استبدلها بصورتك الفعلية
          alt="Profile"
          className="w-12 h-12 rounded-full object-cover"
        />

        {/* Name & Role */}
        <div>
          <h3 className="text-lg font-bold text-orange-500">Your Account</h3>
          <p className="text-xs text-gray-500">organizer</p>
        </div>
      </div>

      {/* Description */}
      <div className="text-sm text-gray-700 leading-relaxed">
        This Stylish And Roomy Family Home Is Nestled In Stockholms Kista District, Just 14 Km Away From The Royal Swedish Opera, Museum Of Medieval Stockholm, And Stureplan. Offering The Convenience Of Free Private Parking. It&apos;s Also A Short 9 Km Drive From Friends Arena And 14 Km From Sergels Torg Square.
      </div>
    </div>
  );
}