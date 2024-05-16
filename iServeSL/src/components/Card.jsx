// Copyright ©2024 SachinAkash01, All rights reserved.
import React from "react";
import { BiSolidConversation } from "react-icons/bi";
import { MdOutlineLocalPolice } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Grama Niladhari Service",
    icon: <GrUserManager />,
    route: "/dashboard/grama-niladhari",
  },
  {
    title: "Police Service",
    icon: <MdOutlineLocalPolice />,
    route: "/dashboard/police",
  },
  {
    title: "Online Support",
    icon: <BiSolidConversation />,
    route: "/online-support",
  },
];

const Card = () => {
  const navigate = useNavigate();

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <div className="card--container">
      {services.map((item) => (
        <div className="card" onClick={() => handleCardClick(item.route)}>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2 className="item-title">{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
