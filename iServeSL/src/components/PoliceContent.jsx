import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/content.css";

const PoliceContent = () => {
  const navigate = useNavigate();

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  const [nicNumber, setNicNumber] = useState("");
  const [fullName, setFullName] = useState("");

  // State variables for error messages
  const [errors, setErrors] = useState({
    nicNumber: "",
    fullName: "",
  });

  const handleNicNumberChange = (e) => {
    setNicNumber(e.target.value);
    // Clear the NIC Number error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      nicNumber: "",
    }));
  };

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
    // Clear the Full Name error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      fullName: "",
    }));
  };

  const handleSubmit = () => {
    // Check if NIC number is entered
    if (!nicNumber.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nicNumber: "NIC Number is required",
      }));
      return;
    }

    // Check if Full Name is entered
    if (!fullName.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Full Name is required",
      }));
      return;
    }

    // If all checks pass, proceed with the submission
    console.log("NIC Number:", nicNumber);
    console.log("Full Name:", fullName);
  };

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">
          <span onClick={dashboardNavigate} style={{ cursor: "pointer" }}>
            Dashboard
          </span>{" "}
          {">>"} Police Service
        </h1>
      </div>
      <div>
        <p className="grama-title mb-20">
          Request Police Character Certificate Below..
        </p>
      </div>
      <div className="grama-form">
        <div className="form-group">
          <label htmlFor="nicNumber" className="block mb-2 font-bold">
            NIC Number:
          </label>
          <input
            type="text"
            id="nicNumber"
            name="nicNumber"
            value={nicNumber}
            onChange={handleNicNumberChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            placeholder="2001xxxxxxxx"
          />
          {errors.nicNumber && (
            <p className="text-red-500 text-xs mt-1">{errors.nicNumber}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="fullName" className="block mb-2 font-bold">
            Full Name:
          </label>
          <div className="flex mb-2">
            <div className="w-full">
              {" "}
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={fullName}
                onChange={handleFullNameChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Jane Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
              )}
            </div>
          </div>
        </div>
        <div align="right">
          <button
            className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-3 px-6"
            onClick={handleSubmit}
          >
            Request Certificate
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default PoliceContent;
