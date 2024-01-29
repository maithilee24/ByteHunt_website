import React from "react";
import Dashboard from "./dashboard";
import Complaint from "./Complaint";
import Feedback from "./Feedback";
import Footer from "./footer";
import Intro from "./intro";

const Home = () => {
  return (
    <div className="">
      <Dashboard />
      <Intro />
      <div className="px-32 mt-24">
        <Complaint />
      </div>
      <div className="px-32 pt-24">
        <Feedback />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
