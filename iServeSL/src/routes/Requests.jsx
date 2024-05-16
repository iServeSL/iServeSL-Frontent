// Copyright ©2024 SachinAkash01, All rights reserved.
import React from "react";
import Sidebar from "../components/Sidebar";
import RequestContent from "../components/RequestContent";
import "../styles/sidebar.css";

const Requests = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <RequestContent />
      </div>
    </div>
  );
};

export default Requests;
