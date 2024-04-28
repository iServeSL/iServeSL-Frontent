import React from "react";
import Sidebar from "../components/Sidebar";
import GramaNiladhariContent from "../components/GramaNiladhariContent";
import "../styles/sidebar.css";

const Feedback = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <GramaNiladhariContent />
      </div>
    </div>
  );
};

export default Feedback;
