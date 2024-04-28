import React from "react";
import Sidebar from "../components/Sidebar";
import PoliceContent from "../components/PoliceContent";
import "../styles/sidebar.css";

const Police = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <PoliceContent />
      </div>
    </div>
  );
};

export default Police;
