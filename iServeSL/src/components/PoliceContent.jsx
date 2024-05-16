// Copyright ©2024 SachinAkash01, All rights reserved.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/iServeSL.png";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/content.css";

const PoliceContent = () => {
  const navigate = useNavigate();

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  const [nicNumber, setNicNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uuidString, setUuidString] = useState("");
  const [availability, setAvailability] = useState("");
  const [completeResponse, setCompleteResponse] = useState("");
  const [rejectResponse, setRejectResponse] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  // State variables for error messages
  const [errors, setErrors] = useState({
    nicNumber: "",
    fullName: "",
  });

  // Effect to fetch email from cookies when component mounts
  useEffect(() => {
    const email = Cookies.get("email");
    if (email) {
      setEmail(email);
    }
  }, []); // Empty dependency array to run this effect only once when component mounts

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

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
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

    try {
      const response = await axios.get(
        `http://localhost:3001/api/users/${email}/phone`
      );
      const { phone } = response.data;
      setPhone(phone);

      try {
        const postResponse = await axios.post(
          "http://localhost:4040/newRequestRecord",
          {
            NIC: nicNumber,
            email: email,
            name: fullName,
            phone: phone,
          }
        );
        const uuidString = postResponse.data;
        setUuidString(uuidString);

        // Display success alert
        if (uuidString) {
          setModalContent(
            `Your Police Character Certificate request has been sent successfully! Use ${uuidString} to track your request.`
          );
          setModalOpen(true);
        } else {
          setModalContent(
            `Your request for Police Charater Certificate was unsuccessful! Please try again!`
          );
          setModalOpen(true);
        }

        try {
          const availableResponse = await axios.get(
            `http://localhost:5050/checkAvailability/${nicNumber}`
          );
          const availability = availableResponse.data;
          setAvailability(availability);

          if (availability) {
            try {
              const updateStatusCompleted = await axios.put(
                `http://localhost:4040/updateRequest/${uuidString}/completed`
              );
              const completeResponse = updateStatusCompleted.data;
              setCompleteResponse(completeResponse);
            } catch (error) {
              console.error("Status cannot be updated:", error);
            }
          } else {
            try {
              const updateStatusRejected = await axios.put(
                `http://localhost:4040/updateRequest/${uuidString}/rejected`
              );
              const rejectResponse = updateStatusRejected.data;
              setRejectResponse(rejectResponse);
            } catch (error) {
              console.error("Status cannot be updated:", error);
            }
          }
        } catch (error) {
          console.error("Invalid NIC;", error);
          try {
            const updateStatusRejected = await axios.put(
              `http://localhost:4040/updateRequest/${uuidString}/rejected`
            );
            const rejectResponse = updateStatusRejected.data;
            setRejectResponse(rejectResponse);
          } catch (error) {
            console.error("Status cannot be updated:", error);
          }
        }
      } catch (error) {
        console.error("Error sending POST request:", error);
        setModalContent(
          `Your request for Police Charater Certificate was unsuccessful! Please try again!`
        );
        setModalOpen(true);
      }
    } catch (error) {
      console.error("Error fetching user's phone number:", error);
      setModalContent(
        `Your request for Police Charater Certificate was unsuccessful! Please try again!`
      );
      setModalOpen(true);
    }

    // Clear input fields
    setNicNumber("");
    setFullName("");
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
      {modalOpen && (
        <div className="modal-overlay">
          <dialog
            id="my_modal_5"
            className="modal modal-center"
            open
            onClick={handleCloseModal}
          >
            <div className="modal-box" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-left">
                <img
                  src={Logo}
                  className="logo-icon w-[80px] mx-0 my-2 cursor-pointer"
                  alt="Logo"
                />
                <h3 className="font-cursive font-bold text-lg ml-1 mt-5">
                  iServeSL - Alert
                </h3>
              </div>
              <p className="py-4 text-left ml-8">{modalContent}</p>
              <div className="modal-action text-right">
                <button
                  className="btn btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-2 px-7 mr-4"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        </div>
      )}
    </div>
  );
};

export default PoliceContent;
