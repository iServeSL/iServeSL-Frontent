import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChatFeed, Message } from "react-chat-ui";
import { GrSend } from "react-icons/gr";
import "../styles/content.css";

const Chatbot = () => {
  const navigate = useNavigate();

  const dashboardNavigate = () => {
    navigate("/dashboard");
  };

  // Load messages from session storage if available, otherwise use initial message
  const [messages, setMessages] = useState(
    JSON.parse(sessionStorage.getItem("chatMessages")) || [
      new Message({
        id: 1,
        message: "Hello, Welcome to iServeSL! How may I help you today?",
      }),
    ]
  );
  const [input, setInput] = useState("");
  const chatFeedRef = useRef(null);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async () => {
    if (input.trim() !== "") {
      const userMessage = new Message({ id: 0, message: input });
      setMessages((prevMessages) => [...prevMessages, userMessage]); // Preserve previous messages and add new user message
      setInput("");

      try {
        const response = await fetch(
          "http://localhost:5005/webhooks/rest/webhook",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sender: "user1",
              message: input,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        const botResponse = responseData[0].text;

        const botMessage = new Message({
          id: 1,
          message: botResponse,
        });

        setMessages((prevMessages) => [...prevMessages, botMessage]); // Preserve previous messages and add new bot message
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  useEffect(() => {
    // Save messages to session storage whenever messages state changes
    sessionStorage.setItem("chatMessages", JSON.stringify(messages));

    // Scroll down chat feed after messages update
    if (chatFeedRef.current) {
      chatFeedRef.current.scrollTop = chatFeedRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className="content-feedback">
      <div className="content--header">
        <h1 className="header--title">
          <span onClick={dashboardNavigate} style={{ cursor: "pointer" }}>
            Dashboard
          </span>{" "}
          {">>"} Online Customer Support
        </h1>
      </div>
      <div className="chatbot-container">
        <div className="chat-window">
          <div className="chat-feed-container" ref={chatFeedRef}>
            <ChatFeed
              className="chat-feed"
              messages={messages}
              isTyping={false} // Set to true if the bot is typing
              hasInputField={false}
              showSenderName
              bubblesCentered={false}
              bubbleStyles={{
                text: {
                  fontSize: 16,
                },
                chatbubble: {
                  borderRadius: 20,
                  padding: 10,
                  backgroundColor: "#808080",
                  marginLeft: 10,
                  marginRight: 10,
                },
                userBubble: {
                  backgroundColor: "#ff7300",
                },
              }}
            />
          </div>
          <div className="user-input">
            <input
              type="text"
              placeholder="Type your message here..."
              value={input}
              onChange={handleInput}
              onKeyPress={handleKeyPress} // Add event listener for key press
            />
            <GrSend
              onClick={handleSend}
              disabled={input.trim() === ""}
              className="send-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
