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
    // Handle feedback submission logic here
    console.log("Subject:", subject);
    console.log("Feedback:", feedback);
    // You can send the feedback data to your backend or perform any other actions here
  };

  return (
    <div className="content">
      <div className="content--header">
        <h1 className="header--title">Feedback</h1>
      </div>
      <div className="feedback-form">
        <div className="form-group">
          <label htmlFor="subject" className="block mb-2">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            className="w-full border rounded-md py-2 px-3 mb-4"
            placeholder="Enter subject"
          />
        </div>
        <div className="form-group">
          <label htmlFor="feedback" className="block mb-2">
            Feedback:
          </label>
          <textarea
            id="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            className="w-full border rounded-md py-2 px-3 mb-4"
            rows="5"
            placeholder="Enter your feedback"
          />
        </div>
        <button
          className="btnHoverEffect bg-[#ff7300] text-black rounded-md font-medium py-3 px-6"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FeedbackContent;
