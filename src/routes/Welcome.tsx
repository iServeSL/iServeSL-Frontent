//SachinAkash01 - 2024
import React from "react";

const Welcome = () => {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div
        className="card text-center mb-3"
        style={{
          width: "660px",
          height: "160px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: "26px" }}>
              Welcome to iServeSL
            </h5>
            <br></br>
            <a
              className="btn btn-primary btn-lg"
              style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
            >
              GET STARTED
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
