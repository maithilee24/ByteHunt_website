import React from "react";

const Profile = () => {
  return (
    <div className="bg-cover w-full h-screen flex items-center justify-center relative">
      {/* Background Image */}
      <img
        src="/bg.png"
        alt="Background"
        className="absolute w-full h-full object-cover z-0"
      />

      {/* Profile Card */}
      <div className="flex w-1/2 h-1/2 mx-auto bg-white rounded-lg overflow-hidden shadow-lg z-10  ">
        {/* Circular Profile Image */}
        <div className="flex-shrink-0 p-8">
          <img
            src="/profile.jpeg" // Replace with your actual image source
            alt="Profile"
            className="w-48 h-48  rounded-full"
          />
        </div>

        {/* User Information */}
        <div className="flex-grow  px-16 py-16 text-left">
          <div className="font-bold text-[#043F5D] text-3xl mb-4  underline ">
            Devendra Singh
          </div>
          <div className=" text-[#043F5D] text-2xl mb-2 font-semibold">
            Branch: CSE
          </div>
          <div className="text-[#043F5D] text-2xl mb-2 font-semibold">
            Batch: 2026
          </div>
          <div className="text-[#043F5D] text-lg  font-semibold">
            Email: devsa2067@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
