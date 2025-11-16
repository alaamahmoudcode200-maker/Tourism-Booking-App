import React from 'react';

interface ProfileSectionProps {
  onEdit?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onEdit }) => {
   return (
    <section>
      <h2 className="text-lg font-semibold mb-2 flex justify-between items-center">
        Basic Information <span className="text-orange-600 text-sm cursor-pointer">Edit</span>
      </h2>
      <p className="text-gray-600 text-sm mb-6">
        Make sure this information matches your travel ID, like your passport or license.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          ["Full Name", "Anna Carolina"],
          ["Date Of Birth", "Not Provided"],
          ["Gender", "Not Provided"],
          ["Mobile Number", "Not Provided"],
          ["Email", "AnnaCarolina@gmail.com"],
          ["Emergency Contact", "Not Provided"],
          ["Address", "Not Provided"],
        ].map(([label, value]) => (
          <div key={label}>
            <strong className="block text-sm text-gray-900">{label}</strong>
            <span className="text-gray-600 text-sm">{value}</span>
          </div>
        ))}
      </div>
    </section>
  );
};


