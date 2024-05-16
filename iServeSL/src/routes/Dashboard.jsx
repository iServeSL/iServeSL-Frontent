// Copyright ©2024 SachinAkash01, All rights reserved.
import React from "react";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import Profile from "../components/Profile";
import "../styles/sidebar.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <DashboardContent />
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
