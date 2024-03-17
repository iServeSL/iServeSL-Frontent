import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BiHome,
  BiSolidReport,
  BiSolidConversation,
  BiLogOut,
} from "react-icons/bi";
import { IoIosSend } from "react-icons/io";
import { MdReportProblem } from "react-icons/md";
import "../styles/sidebar.css";
import Logo from "../assets/iServeSL.png";

const Sidebar = () => {
  const navigate = useNavigate();

  const welcomeNavigate = () => {
    navigate("/");
  };

  return (
    <div className="menu">
      <div className="logo">
        <img
          src={Logo}
          className="logo-icon w-[170px] mx-0 my-4 cursor-pointer"
          onClick={welcomeNavigate}
        />
        {/* <h2 className='appName'>iServeSL</h2> */}
      </div>

      <div className="menu--list">
        <a href="#" className="item active">
          <BiHome className="icon" />
          Dashboard
        </a>
        <a href="#" className="item">
          <IoIosSend className="icon" />
          Requests
        </a>
        <a href="#" className="item">
          <BiSolidReport className="icon" />
          User Guide
        </a>
        <a href="#" className="item">
          <MdReportProblem className="icon" />
          Feedback
        </a>
        <a href="#" className="item">
          <BiSolidConversation className="icon" />
          Online Support
        </a>
      </div>
      <div className="logout-menu">
        <a href="#" className="item active">
          <BiLogOut className="icon-logout" />
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
