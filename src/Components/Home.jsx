import React from "react";
import Dashboard from "./dashboard";
import Complaint from "./Complaint";
import Feedback from "./Feedback";

const Home = () => {
  return (
    <div className="">
      <Dashboard />
      <div className="px-32 mt-56">
        <Complaint />
      </div>
      <div className="px-32 pt-24">
        <Feedback />
      </div>
    </div>
  );
};

export default Home;
