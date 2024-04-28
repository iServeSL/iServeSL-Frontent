import React, { useState } from "react";
import "../styles/content.css";

const FeedbackContent = () => {
  const [subject, setSubject] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleSubmit = () => {
    console.log("Subject:", subject);
    console.log("Feedback:", feedback);
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
