import React from "react";
import Sidebar from "../components/Sidebar";
import GramaNiladhariContent from "../components/GramaNiladhariContent";
import "../styles/sidebar.css";

const GramaNiladhari = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <GramaNiladhariContent />
      </div>
    </div>
  );
};

export default GramaNiladhari;
