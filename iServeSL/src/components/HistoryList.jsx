// Copyright ©2024 SachinAkash01, All rights reserved.
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import "../styles/historyList.css";

const HistoryList = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userEmail = Cookies.get("email");
        if (userEmail) {
          setEmail(userEmail);
          const response = await axios.get(
            `http://localhost:3001/api/users/${userEmail}`
          );
          const userData = response.data;
          setUsername(userData.username);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  const history = [
    {
      name: username,
      service: "Police Service",
    },
    {
      name: username,
      service: "Police Service",
    },
    {
      name: username,
      service: "Grama Niladhari Service",
    },
  ];

  return (
    <div className="history--list">
      <div className="list--header">
        <h2 className="historyListTitle">Recents</h2>
      </div>
      <div className="list--container">
        {history.map((history) => (
          <div className="list h-[40px]">
            <div className="history--detail">
              <h2 className="font-bold ml-2">{history.name}</h2>
            </div>
            <span className="w-[500px] text-center">{history.service}</span>
            <span className="history--todo">:</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
