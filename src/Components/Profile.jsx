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
      <div className="flex max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-lg z-10">
        {/* Circular Profile Image */}
        <div className="flex-shrink-0 p-4">
          <img
            src="/bg.png" // Replace with your actual image source
            alt="Profile"
            className="w-20 h-20 rounded-full"
          />
        </div>

        {/* User Information */}
        <div className="flex-grow px-8 py-6 text-left">
          <div className="font-bold text-3xl mb-4">Devendra Singh</div>
          <div className="text-gray-700 text-lg mb-2 font-semibold">
            Branch: CSE
          </div>
          <div className="text-gray-700 text-lg mb-2 font-semibold">
            Batch: 2026
          </div>
          <div className="text-gray-700 text-lg font-semibold">
            Email: devsa2067@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
