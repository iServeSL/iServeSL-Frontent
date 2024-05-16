// Copyright ©2024 SachinAkash01, All rights reserved.
import React from "react";
import Sidebar from "../components/Sidebar";
import EditProfileContent from "../components/EditProfileContent";
import "../styles/sidebar.css";

const EditProfile = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard--content">
        <EditProfileContent />
      </div>
    </div>
  );
};

export default EditProfile;
