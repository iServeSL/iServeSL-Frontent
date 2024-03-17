import React from "react";
import { BiSolidConversation } from "react-icons/bi";
import { MdOutlineLocalPolice } from "react-icons/md";
import { GrUserManager } from "react-icons/gr";

const courses = [
  {
    title: "Grama Niladhari Service",
    icon: <GrUserManager />,
  },
  {
    title: "Police Service",
    icon: <MdOutlineLocalPolice />,
  },
  {
    title: "Online Support",
    icon: <BiSolidConversation />,
  },
];

const Card = () => {
  return (
    <div className="card--container">
      {courses.map((item) => (
        <div className="card">
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
