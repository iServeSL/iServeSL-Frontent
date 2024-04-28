import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/content.css";

const EditProfileContent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [profession, setProfession] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  const saveDetails = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }
    // Logic to save personal details
  };

  const changePassword = () => {
    // Password matching validation
    if (newPassword !== confirmNewPassword) {
      setPasswordError("New password and confirm password do not match.");
      return;
    } else {
      setPasswordError("");
    }
    // Logic to change password
  };

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">
          <span onClick={dashboardNavigate} style={{ cursor: "pointer" }}>
            Dashboard
          </span>{" "}
          {">>"} Edit Profile (sachinakash_)
        </h1>
      </div>
      <div className="grama-form mt-20">
        <div className="form-container">
          {/* Personal Details Section */}
          <div className="form-section mr-20">
            <h2 className="section-title font-bold text-center mb-10 text-xl">
              Personal Details
            </h2>
            <div className="form-group">
              <label htmlFor="email" className="block mb-2">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="john@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError && e.target.value) setEmailError("");
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {emailError && (
                <p className="text-red-500 text-sm">{emailError}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="contact" className="block mb-2">
                Contact Number:
              </label>
              <input
                type="text"
                id="contact"
                name="contact"
                placeholder="+94 xxxxxxxx"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="profession" className="block mb-2">
                Profession:
              </label>
              <input
                type="text"
                id="profession"
                name="profession"
                placeholder="Accountant"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="text-center">
              <button
                onClick={saveDetails}
                className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-2 px-4 mt-6"
              >
                Save Details
              </button>
            </div>
          </div>
          {/* Change Password Section */}
          <div className="form-section ml-20">
            <h2 className="section-title font-bold text-center mb-10 text-xl">
              Change Password
            </h2>
            <div className="form-group">
              <label htmlFor="oldPassword" className="block mb-2">
                Old Password:
              </label>
              <input
                type="password"
                id="oldPassword"
                name="oldPassword"
                placeholder="****************"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword" className="block mb-2">
                New Password:
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                placeholder="****************"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  if (passwordError && e.target.value) setPasswordError("");
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword" className="block mb-2">
                Confirm New Password:
              </label>
              <input
                type="password"
                id="confirmNewPassword"
                name="confirmNewPassword"
                placeholder="****************"
                value={confirmNewPassword}
                onChange={(e) => {
                  setConfirmNewPassword(e.target.value);
                  if (passwordError && e.target.value) setPasswordError("");
                }}
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              {passwordError && (
                <p className="text-red-500 text-sm">{passwordError}</p>
              )}
            </div>
            <div className="text-center">
              <button
                onClick={changePassword}
                className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-2 px-4 mt-6"
              >
                Change Password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileContent;
