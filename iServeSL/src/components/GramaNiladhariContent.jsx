import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/content.css";

const GramaNiladhariContent = () => {
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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uuidString, setUuidString] = useState("");
  const [identityCheck, setIdentityCheck] = useState("");
  const [addressCheck, setAddressCheck] = useState("");
  const [completeResponse, setCompleteResponse] = useState("");
  const [rejectResponse, setRejectResponse] = useState("");

  // State variables for error messages
  const [errors, setErrors] = useState({
    nicNumber: "",
    no: "",
    village: "",
    postalCode: "",
    city: "",
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

  const handleSubmit = async () => {
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

    try {
      const response = await axios.get(
        `http://localhost:3001/api/users/${email}/phone`
      );
      const { phone } = response.data;
      setPhone(phone);

      try {
        const postResponse = await axios.post(
          "http://localhost:8080/newRequestRecord",
          {
            NIC: nicNumber,
            email: email,
            no: addressDetails.no,
            street: addressDetails.street,
            village: addressDetails.village,
            city: addressDetails.city,
            postalcode: addressDetails.postalCode,
            phone: phone,
          }
        );
        const uuidString = postResponse.data;
        setUuidString(uuidString);

        try {
          const identityCheckResponse = await axios.get(
            `http://localhost:7070/checkNIC/${nicNumber}`
          );
          const identityCheck = identityCheckResponse.data;
          setIdentityCheck(identityCheck);

          const addressCheckResponse = await axios.get(
            "http://localhost:9090/checkAddress",
            {
              params: {
                NIC: nicNumber,
                no: addressDetails.no,
                village: addressDetails.village,
                city: addressDetails.city,
                postalcode: addressDetails.postalCode,
                street: addressDetails.street,
              },
            }
          );
          const addressCheck = addressCheckResponse.data;
          setAddressCheck(addressCheck);

          if (identityCheck && addressCheck) {
            try {
              const updateStatusCompleted = await axios.put(
                `http://localhost:8080/updateRequest/${uuidString}/completed`
              );
              const completeResponse = updateStatusCompleted.data;
              setCompleteResponse(completeResponse);
            } catch (error) {
              console.error("Status cannot be updated:", error);
            }
          } else {
            try {
              const updateStatusRejected = await axios.put(
                `http://localhost:8080/updateRequest/${uuidString}/rejected`
              );
              const rejectResponse = updateStatusRejected.data;
              setRejectResponse(rejectResponse);
            } catch (error) {
              console.error("Status cannot be updated:", error);
            }
          }
        } catch (error) {
          console.error("Invalid NIC:", error);
        }
      } catch (error) {
        console.error("Error sending POST request:", error);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }

    // Display success alert
    alert(
      `Your Grama Niladhari certificate request has been sent successfully! Use ${uuidString} to track your request`
    );

    // Clear input fields
    setNicNumber("");
    addressDetails.no = "";
    addressDetails.street = "";
    addressDetails.village = "";
    addressDetails.city = "";
    addressDetails.postalCode = "";
  };

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">
          <span onClick={dashboardNavigate} style={{ cursor: "pointer" }}>
            Dashboard
          </span>{" "}
          {">>"} Grama Niladhari Service
        </h1>
      </div>
      <div>
        <p className="grama-title">
          Request Grama Niladhari Certificate Below..
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

export default GramaNiladhariContent;
