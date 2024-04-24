import React from "react";
import eGovernance from "../assets/eGovernance.png";
import { MdDownload } from "react-icons/md";
import "../styles/content.css";

const UserGuideContent = () => {
  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">User Guide</h1>
      </div>
      <div className="guide-text">
        <p className="guide-text--paragraph">
          Download the complete user guide on how to use iServeSL e-governance
          web application..
        </p>
        <button className="btnHoverEffect bg-[#ff7300] text-black w-[200px] rounded-md font-medium my-6 py-3 flex justify-center">
          User Guide
          <MdDownload size={30} className="ml-2" />
        </button>
        <img className="w-[500px] mx-[600px]" src={eGovernance} alt="/" />
      </div>
    </div>
  );
};

export default UserGuideContent;
