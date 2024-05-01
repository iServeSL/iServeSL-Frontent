import React, { useState, useEffect } from "react";
import { MdDownload, MdDelete } from "react-icons/md";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/content.css";

const RequestContent = () => {
  const [email, setEmail] = useState("");
  const [policeRequests, setPoliceRequests] = useState([]);
  const [gramaRequests, setGramaRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const email = Cookies.get("email");
      if (email) {
        setEmail(email);
        try {
          const policeResponse = await axios.get(
            `http://localhost:4040/getRequests/${email}`
          );
          setPoliceRequests(policeResponse.data.reverse()); // Reverse the order of police requests
        } catch (error) {
          console.error("Cannot connect to Police API:", error);
        }
        try {
          const gramaResponse = await axios.get(
            `http://localhost:8080/getRequests/${email}`
          );
          setGramaRequests(gramaResponse.data.reverse()); // Reverse the order of grama requests
        } catch (error) {
          console.error("Cannot connect to Grama Niladhari API:", error);
        }
      }
    };

    fetchRequests();
  }, []);

  const deletePoliceRequest = async (uuidString) => {
    try {
      await axios.delete(`http://localhost:4040/deleteRequest/${uuidString}`);
      setPoliceRequests(
        policeRequests.filter((request) => request.id !== uuidString)
      );
    } catch (error) {
      console.error("API cannot be accessed: ", error);
    }
  };

  const deleteGramaRequest = async (uuidString) => {
    try {
      await axios.delete(`http://localhost:8080/deleteRequest/${uuidString}`);
      setGramaRequests(
        gramaRequests.filter((request) => request.id !== uuidString)
      );
    } catch (error) {
      console.error("API cannot be accessed: ", error);
    }
  };

  const handleDelete = (id, service) => {
    if (service === "police") {
      deletePoliceRequest(id);
    } else if (service === "grama") {
      deleteGramaRequest(id);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-500";
      case "rejected":
        return "bg-red-500";
      case "pending":
        return "bg-orange-500";
      default:
        return "";
    }
  };

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title mb-5">Requests</h1>
      </div>
      <div className="request--content">
        <div className="section-heading font-semibold text-lg mb-5">
          Police Character Certificate Requests
        </div>
        {/* Render police requests */}
        {policeRequests.map((request) => (
          <div key={request.id} className="police-requests">
            <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12 ml-16 mb-2">
              <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div className="flex items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                  <div>
                    <h5 className="mr-3 font-semibold dark:text-white">
                      Ref No: {request.id}
                    </h5>
                    <p className="text-gray-500 dark:text-gray-400">
                      Police Character Certificate
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className={`status-button ${getStatusColor(
                        request.status
                      )} text-white rounded-md font-medium py-2 px-9 mr-4 cursor-default ${
                        request.status === "rejected" ? "disabled" : ""
                      }`}
                      disabled={request.status === "rejected"}
                    >
                      {request.status}
                    </button>
                    {/* Conditionally render Download button */}
                    {request.status !== "rejected" && (
                      <button
                        type="button"
                        className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-2 px-7 mr-4"
                        disabled={request.status === "rejected"}
                      >
                        Download
                      </button>
                    )}
                    <MdDelete
                      size={25}
                      className="text-gray-400 cursor-pointer"
                      onClick={() => handleDelete(request.id, "police")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="section-heading font-semibold text-lg my-5">
          Grama Niladhari Certificate Requests
        </div>
        {/* Render grama niladhari requests */}
        {gramaRequests.map((request) => (
          <div key={request.id} className="grama-requests">
            <div className="w-full max-w-screen-xl px-4 mx-auto lg:px-12 ml-16 mb-5">
              <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                <div className="flex items-center justify-between p-4 space-y-3 sm:flex sm:space-y-0 sm:space-x-4">
                  <div>
                    <h5 className="mr-3 font-semibold dark:text-white">
                      Ref No: {request.id}
                    </h5>
                    <p className="text-gray-500 dark:text-gray-400">
                      Grama Niladhari Certificate
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className={`status-button ${getStatusColor(
                        request.status
                      )} text-white rounded-md font-medium py-2 px-9 mr-4 cursor-default ${
                        request.status === "rejected" ? "disabled" : ""
                      }`}
                      disabled={request.status === "rejected"}
                    >
                      {request.status}
                    </button>
                    {/* Conditionally render Download button */}
                    {request.status !== "rejected" && (
                      <button
                        type="button"
                        className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-2 px-7 mr-4"
                        disabled={request.status === "rejected"}
                      >
                        Download
                      </button>
                    )}
                    <MdDelete
                      size={25}
                      className="text-gray-400 cursor-pointer"
                      onClick={() => handleDelete(request.id, "grama")}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequestContent;
