import React, { useState } from "react";
import axios from "axios";
import "../styles/content.css";

const FeedbackContent = () => {
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");
  const [subjectError, setSubjectError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
    if (e.target.value.trim() !== "") {
      setSubjectError("");
    }
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
    if (e.target.value.trim() !== "") {
      setFeedbackError("");
    }
  };

  const handleSubmit = async () => {
    let isValid = true;

    if (subject.trim() === "") {
      setSubjectError("Subject cannot be empty");
      isValid = false;
    }

    if (feedback.trim() === "") {
      setFeedbackError("Feedback cannot be empty");
      isValid = false;
    }

    if (isValid) {
      try {
        const response = await axios.post(
          "http://localhost:3001/api/send-email",
          {
            subject: subject,
            feedback: feedback,
          }
        );
        if (response.status === 200) {
          alert("Thanks for sharing your feedback with us.");
        } else {
          alert("Feedback submission unsuccessful! Please try again.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
      setSubject("");
      setFeedback("");
    }
  };

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">Feedback Form</h1>
      </div>
      <div className="feedback-form">
        <div className="form-group">
          <label htmlFor="subject" className="block mb-2 font-bold">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={handleSubjectChange}
            className="feedback-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            placeholder="Enter subject"
          />
          {subjectError && (
            <p className="text-red-500 text-xs mt-1">{subjectError}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="feedback" className="block mb-2 font-bold">
            Feedback:
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="feedback-input bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-4"
            rows="5"
            placeholder="Enter your feedback"
          />
          {feedbackError && (
            <p className="text-red-500 text-xs mt-1">{feedbackError}</p>
          )}
        </div>
        <div align="right">
          <button
            className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-3 px-6"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <br />
          <br />
          <br />
        </div>
        <p className="paragraph-feedback">
          Note: These feedbacks are completely{" "}
          <span className="word-anonymous">anonymous</span> and we don't record
          any type of personal information regarding the user when submitting a
          feedback form!
        </p>
      </div>
    </div>
  );
};

export default FeedbackContent;
