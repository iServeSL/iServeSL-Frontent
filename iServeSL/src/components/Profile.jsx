import React from "react";
import ProfileHeader from "./ProfileHeader";
import "../styles/profile.css";
import {
  BiEnvelope,
  BiLock,
  BiMobile,
  BiUser,
  BiPen,
  BiSolidHeart,
} from "react-icons/bi";

const details = [
  {
    title: "Username",
    data: "sachinakash_",
    icon: <BiUser />,
  },
  {
    title: "Email",
    data: "sachin@wso2.com",
    icon: <BiEnvelope />,
  },
  {
    title: "Profession",
    data: "Software Engineer",
    icon: <BiPen />,
  },
  {
    title: "Password",
    data: "********",
    icon: <BiLock />,
  },
  {
    title: "Contact",
    data: "+94783439022",
    icon: <BiMobile />,
  },
];

const Profile = () => {
  return (
    <div className="profile">
      <ProfileHeader />

      <div className="user--profile">
        <div className="user-details">
          {details.map((details) => (
            <div className="user">
              <div className="user-detail">
                <div className="user-cover">{details.icon}</div>
                <div className="user-name">
                  <h5 className="title">{details.title}</h5>
                  <span className="duration">{details.data}</span>
                </div>
              </div>
              <div className="action">:</div>
            </div>
          ))}
          <p class="font-mono italic text-sm text-black text-center uppercase tracking-wider mt-7">
            Made with <span class="text-black text-xl">❤️</span> by{" "}
            <a href="https://github.com/SachinAkash01">SachinAkash01</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
