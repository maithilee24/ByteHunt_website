import React from "react";
import Dashboard from "./dashboard";
import Complaint from "./Complaint";

const Home = () => {
  return (
    <div className="">
      <Dashboard />
      <div className="px-32 mt-56">
        <Complaint />
      </div>
    </div>
  );
};

export default Home;