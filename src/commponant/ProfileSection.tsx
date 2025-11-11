import React from 'react';

interface ProfileSectionProps {
  onEdit?: () => void;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ onEdit }) => {
  return (
    <section className="mb-10">
      <div className="mb-6">
        <h2 className="text-[18px] flex items-center justify-between">
          Basic Information
          <span
            className="text-[#ff5722] text-[14px] cursor-pointer"
            onClick={onEdit}
          >
            Edit
          </span>
        </h2>
        <p className="text-[#666] text-[14px] mb-5">
          Make Sure This Information Matches Your Travel ID, Like Your Passport Or License.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div className="text-[14px]"><strong className="block text-black mb-1">Full Name</strong><span className="text-[#666]">Anna Carolina</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Date Of Birth</strong><span className="text-[#666]">Not Provided</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Gender</strong><span className="text-[#666]">Not Provided</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Mobile Number</strong><span className="text-[#666]">Not Provided</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Email</strong><span className="text-[#666]">AnnaCarolina@gmail.com</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Emergency Contact</strong><span className="text-[#666]">Not Provided</span></div>
          <div className="text-[14px]"><strong className="block text-black mb-1">Address</strong><span className="text-[#666]">Not Provided</span></div>
        </div>
      </div>
    </section>
  );
};


