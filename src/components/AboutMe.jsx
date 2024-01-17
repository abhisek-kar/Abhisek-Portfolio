import React, { useState } from "react";
import MySVG from "../assets/Programming-amico.svg";
import Arrow from "../assets/left-arrow.png";

const AboutMe = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div id="about" className=" min-h-screen mt-10 px-5 grid grid-cols-2">
      {/* images */}
      <div className="flex items-center justify-center">
        <img src={MySVG} alt="image" className="w-3/4 " />
      </div>
      {/* professional summary */}
      <div className="pl-5 flex flex-col justify-center items-start">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-semibold tracking-wide text-gray-900">
            Who'm I
          </div>
          <div className="w-[10px] h-[10px]  bg-themegreen rounded-full"></div>
        </div>
        <p className="mt-5 text-base text-gray-700  leading-7 text-justify">
          Greetings! 👋 I'm Abhisek Kar, a final year B.Tech student majoring in
          Computer Science and Engineering at Government College of Engineering,
          Keonjhar. 🎓 Enthusiastic about leveraging technology to build
          innovative web solutions, I specialize in the MERN (MongoDB,
          Express.js, React.js, Node.js) stack. 🌐 My journey in the world of
          web development has equipped me with hands-on experience and a knack
          for crafting seamless and user-friendly applications.
        </p>
        <button
          className="mt-5 font-semibold flex items-center gap-2 border-2 px-2 py-1 rounded-md bg-themegreen text-white text-xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          More About Me{" "}
          {isHovered && isHovered ? (
            <img
              src={Arrow}
              alt="arrow"
              className={`w-6 h-6 translate-x-2 rotate-180 `}
              style={{ filter: "invert(100%)" }}
            />
          ) : (
            <img
              src={Arrow}
              alt="arrow"
              className={`w-6 h-6 rotate-180 `}
              style={{ filter: "invert(100%)" }}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default AboutMe;
