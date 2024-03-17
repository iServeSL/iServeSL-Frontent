import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import Profile from "../components/Profile";
import "../styles/sidebar.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <Content />
        <Profile />
      </div>
    </div>
  );
};

export default Dashboard;
