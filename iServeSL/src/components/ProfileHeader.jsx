// Copyright ©2024 SachinAkash01, All rights reserved.
import React from "react";
import { useNavigate } from "react-router-dom";
import { BiEdit } from "react-icons/bi";

const ProfileHeader = () => {
  const navigate = useNavigate();

  const editProfileNavigate = () => {
    navigate("/dashboard/edit-profile");
  };

  return (
    <div>
      <div className="profile--header">
        <h2 className="header--title">Profile</h2>
        <div className="edit">
          <BiEdit className="icon" onClick={editProfileNavigate} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
