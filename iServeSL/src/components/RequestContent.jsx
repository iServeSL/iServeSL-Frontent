import React, { useState } from "react";
import "../styles/content.css";

const RequestContent = () => {
  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">Requests</h1>
      </div>
      <div className="requests-form"></div>
    </div>
  );
};

export default RequestContent;
