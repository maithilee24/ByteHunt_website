import React, { useState } from "react";

const Dashboard = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollDown = () => {
    const scrollAmount = 100;

    const container = document.getElementById("scrollContainer");

    if (container) {
      const newScrollPosition = scrollPosition + scrollAmount;
      container.scrollTop = newScrollPosition;
      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <main className="">
      <h1 className="px-20 text-[5rem]  text-white font-semibold py-20">
        Student Council
      </h1>
      <img
        src="/bg-home.png"
        alt="background image"
        className="w-full absolute -top-64"
        style={{
          zIndex: "-1",
        }}
      ></img>
      <div className="flex flex-row justify-between px-40">
        <div className="h-72 w-72 bg-[#ECF4F7] flex flex-col justify-center shadow-2xl">
          <img
            alt="icon"
            src="/gg_profile.png"
            className="h-1/2 w-1/2 m-auto"
          ></img>
          <h2 className="text-[#043F5D] text-3xl font-medium mx-auto pb-10 pointer  shadow-sm ">
            Profile
          </h2>
        </div>
        <div className="h-72 w-72 bg-[#ECF4F7] flex flex-col justify-center shadow-sm">
          <img
            alt="icon"
            src="/material-symbols_comment-outline.png"
            className="h-1/2 w-1/2 m-auto"
          ></img>
          <h2 className="text-[#043F5D] text-3xl font-medium mx-auto pb-10 pointer shadow-sm">
            Complaints
          </h2>
        </div>
        <div
          className="h-72 w-72 bg-[#ECF4F7] flex flex-col justify-center  shadow-2xl"
          onClick={handleScrollDown}
        >
          <img
            alt="icon"
            src="/clarity_form-line.png"
            className="h-1/2 w-1/2 m-auto"
          ></img>
          <h2 className="text-[#043F5D] text-3xl font-medium mx-auto pb-10 pointer  shadow-sm">
            Complaint Form
          </h2>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
