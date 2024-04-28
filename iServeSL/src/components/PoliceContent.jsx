import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/content.css";

const PoliceContent = () => {
  const navigate = useNavigate();

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  const [nicNumber, setNicNumber] = useState("");
  const [addressDetails, setAddressDetails] = useState({
    no: "",
    street: "",
    village: "",
    postalCode: "",
    city: "",
  });

  // State variables for error messages
  const [errors, setErrors] = useState({
    nicNumber: "",
    no: "",
    village: "",
    postalCode: "",
    city: "",
  });

  const handleNicNumberChange = (e) => {
    setNicNumber(e.target.value);
    // Clear the NIC Number error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      nicNumber: "",
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    // Clear the error message for the changed input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
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

    // Check if any of the address fields except for street are empty
    const addressFields = Object.keys(addressDetails);
    for (const field of addressFields) {
      if (field !== "street" && !addressDetails[field].trim()) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          [field]: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        }));
        return;
      }
    }

    // If all checks pass, proceed with the submission
    console.log("NIC Number:", nicNumber);
    console.log("Address Details:", addressDetails);
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
        <p className="grama-title">
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
          <label htmlFor="no" className="block mb-2 font-bold">
            Address Details:
          </label>
          <div className="flex mb-2">
            <div className="w-full mr-2">
              {" "}
              <label htmlFor="no" className="block mb-2">
                No:
              </label>
              <input
                type="text"
                id="no"
                name="no"
                value={addressDetails.no}
                onChange={handleAddressChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="287"
              />
              {errors.no && (
                <p className="text-red-500 text-xs mt-1">{errors.no}</p>
              )}
            </div>
            <div className="w-full ml-2">
              {" "}
              <label htmlFor="street" className="block mb-2">
                Street:
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={addressDetails.street}
                onChange={handleAddressChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Daya Road"
              />
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full mr-2">
              {" "}
              <label htmlFor="village" className="block mb-2">
                Village:
              </label>
              <input
                type="text"
                id="village"
                name="village"
                value={addressDetails.village}
                onChange={handleAddressChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Thumbowila"
              />
              {errors.village && (
                <p className="text-red-500 text-xs mt-1">{errors.village}</p>
              )}
            </div>
            <div className="w-full ml-2">
              {" "}
              <label htmlFor="postalCode" className="block mb-2">
                Postal Code:
              </label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={addressDetails.postalCode}
                onChange={handleAddressChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="10300"
              />
              {errors.postalCode && (
                <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
              )}
            </div>
          </div>
          <div className="flex mb-2">
            <div className="w-full">
              {" "}
              <label htmlFor="city" className="block mb-2">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={addressDetails.city}
                onChange={handleAddressChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Piliyandala"
              />
              {errors.city && (
                <p className="text-red-500 text-xs mt-1">{errors.city}</p>
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
