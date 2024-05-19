import React from "react";
import eGovernance from "../assets/eGovernance.png";
import { TfiArrowCircleRight } from "react-icons/tfi";
import "../styles/content.css";

const UserGuideContent = () => {
  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">User Guide</h1>
      </div>
      <div className="guide-text">
        <p className="guide-text--paragraph">
          Go through the complete user guide on how to use iServeSL e-governance
          web application..
        </p>
        <a
          href="https://github.com/iServeSL/iServeSL-Docs/blob/main/iServeSL%20-%20User%20Guide.md"
          target="_blank"
        >
          <button className="btnHoverEffect bg-[#ff7300] text-black w-[200px] rounded-md font-medium my-6 py-3 flex justify-center">
            User Guide
            <TfiArrowCircleRight TopRight size={20} className="ml-2 mt-1" />
          </button>
        </a>
        <img className="w-[500px] mx-[600px]" src={eGovernance} alt="/" />
      </div>
    </div>
  );
};

export default UserGuideContent;
