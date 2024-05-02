import React, { useState, useEffect } from "react";
import { MdDelete } from "react-icons/md";
import jsPDF from "jspdf";
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

  const updatePoliceRequestStatus = async (uuidString, newStatus) => {
    try {
      await axios.put(`http://localhost:4040/updateStatus/${uuidString}`, {
        status: newStatus,
      });
      setPoliceRequests(
        policeRequests.map((request) =>
          request.id === uuidString
            ? { ...request, status: newStatus }
            : request
        )
      );
    } catch (error) {
      console.error("API cannot be accessed: ", error);
    }
  };

  const updateGramaRequestStatus = async (uuidString, newStatus) => {
    try {
      await axios.put(`http://localhost:8080/updateStatus/${uuidString}`, {
        status: newStatus,
      });
      setGramaRequests(
        gramaRequests.map((request) =>
          request.id === uuidString
            ? { ...request, status: newStatus }
            : request
        )
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

  const handleStatusUpdate = (id, service, newStatus) => {
    if (service === "police") {
      updatePoliceRequestStatus(id, newStatus);
    } else if (service === "grama") {
      updateGramaRequestStatus(id, newStatus);
    }
  };

  const downloadPolicePDF = async (request) => {
    const nic = request.NIC;
    const uuid = request.id;
    const currentDate = new Date().toLocaleDateString();
    console.log(nic);
    try {
      const { data } = await axios.get(
        `http://localhost:8081/getPoliceUserRecord/${nic}`
      );
      const doc = new jsPDF();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text(
        "Police Character Certificate",
        doc.internal.pageSize.getWidth() / 2,
        15,
        { align: "center" }
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Ref No: ${uuid}`, 10, 40);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text(`NIC: ${nic}`, 10, 60);
      doc.text(`Name: ${data[0].fullname}`, 10, 70);
      doc.text(
        `Address: ${data[0].address.no}, ${data[0].address.street}, ${data[0].address.village}, ${data[0].address.city}, ${data[0].address.postalcode}`,
        10,
        80
      );
      doc.text(`Date of Birth: ${data[0].DoB}`, 10, 90);
      doc.text(`Level of Criminal Records: ${data[0].criminalstatus}`, 10, 100);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const textWidth =
        (doc.getStringUnitWidth(`Issued Date: ${currentDate}`) *
          doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const x = doc.internal.pageSize.getWidth() - 20 - textWidth;
      doc.text(`Issued Date: ${currentDate}`, x, 140);

      doc.save(`Police_Character_Certificate_${nic}.pdf`);
    } catch (error) {
      console.error("Error fetching police user record: ", error);
    }
  };

  const downloadGramaPDF = async (request) => {
    const nic = request.NIC;
    const uuid = request.id;
    const currentDate = new Date().toLocaleDateString();
    console.log(nic);
    try {
      const { data } = await axios.get(
        `http://localhost:8081/getCitizenUserRecord/${nic}`
      );
      const doc = new jsPDF();
      doc.setFont("helvetica", "bold");
      doc.setFontSize(18);
      doc.text(
        "Grama Niladhari Certificate",
        doc.internal.pageSize.getWidth() / 2,
        15,
        { align: "center" }
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text(`Ref No: ${uuid}`, 10, 40);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text(`NIC: ${nic}`, 10, 60);
      doc.text(`Name: ${data[0].fullname}`, 10, 70);
      doc.text(
        `Address: ${data[0].address.no}, ${data[0].address.street}, ${data[0].address.village}, ${data[0].address.city}, ${data[0].address.postalcode}`,
        10,
        80
      );
      doc.text(`Profession: ${data[0].profession}`, 10, 90);
      doc.text(`Date of Birth: ${data[0].DoB}`, 10, 100);
      doc.text(`Marital Status: ${data[0].maritalStatus}`, 10, 110);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(13);
      doc.text(
        `I hereby confirm the above details about this person is correct and up-to-date!`,
        10,
        140
      );

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      const textWidth =
        (doc.getStringUnitWidth(`Issued Date: ${currentDate}`) *
          doc.internal.getFontSize()) /
        doc.internal.scaleFactor;
      const x = doc.internal.pageSize.getWidth() - 20 - textWidth;
      doc.text(`Issued Date: ${currentDate}`, x, 160);

      doc.save(`Grama_Niladhari_Certificate_${nic}.pdf`);
    } catch (error) {
      console.error("Error fetching grama user record: ", error);
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
                        onClick={() => downloadPolicePDF(request)}
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
                        onClick={() => downloadGramaPDF(request)}
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
