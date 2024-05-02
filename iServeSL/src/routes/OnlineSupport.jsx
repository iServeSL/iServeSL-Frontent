import React from "react";
import Sidebar from "../components/Sidebar";
import OnlineSupportContent from "../components/OnlineSupportContent";
import "../styles/sidebar.css";

const OnlineSupport = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <OnlineSupportContent />
      </div>
    </div>
  );
};

export default OnlineSupport;
