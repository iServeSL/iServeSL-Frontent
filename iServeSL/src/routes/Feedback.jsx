import React from "react";
import Sidebar from "../components/Sidebar";
import FeedbackContent from "../components/FeedbackContent";
import "../styles/sidebar.css";

const Feedback = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <FeedbackContent />
      </div>
    </div>
  );
};

export default Feedback;
