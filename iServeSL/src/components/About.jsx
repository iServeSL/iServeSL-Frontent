import React from "react";
import eGovernance from "../assets/eGovernance.png";
import { TfiArrowCircleRight } from "react-icons/tfi";

const About = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={eGovernance} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#ff7300] font-bold ">
            STREAMLINING & EMPOWERING G2C
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Access Government Services Centrally
          </h1>
          <p>
            iServeSL revolutionizes government services in Sri Lanka through its
            centralized web platform, leveraging cutting-edge distributed AI
            chatbot architecture. By automating processes and enhancing user
            experience, iServeSL provides seamless access to government
            services, addressing inefficiencies and frustrations associated with
            manual procedures. Experience the future of streamlined
            government-citizen interaction with iServeSL, where accessing
            services is effortless, efficient, and intelligent.
          </p>
          <button className="btnHoverEffect bg-[#ff7300] text-black w-[200px] rounded-md font-medium my-6 py-3 flex justify-center">
            User Guide
            <TfiArrowCircleRight TopRight size={20} className="ml-2 mt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
