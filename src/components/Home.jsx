import React, { useState, useEffect } from "react";
import modelImage from "../assets/me.png";
import cvPdf from "../assets/AbhisekKar.pdf";
import Typewriter from "typewriter-effect";

const Home = () => {
  const handleDownload = () => {
    window.open(cvPdf, "_blank");
  };

  return (
    <div id="home" className="grid grid-cols-2 h-96 px-20 mt-10">
      {/* intro part */}
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="">
          <div className="mb-5 text-5xl font-bold text-gray-800">
            Hi! Abhisek Here
          </div>
          <div className="text-xl font-semibold text-gray-700">
            <Typewriter
              options={{
                strings: ["Fullstack Web Developer", "Open For Collaboration"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="text-2xl mt-10 flex gap-5">
          <button
            className="hover:text-gray-800 px-2 py-1 rounded-md font-semibold transition-all bg-themegreen text-white hover:border-2 hover:border-themegreen hover:bg-white"
            onClick={handleDownload}
          >
            Hire Me
          </button>
          <a
            href={cvPdf}
            download="Abhisek_CV.pdf"
            className="text-gray-800 px-2 py-1 rounded-md font-semibold transition-all border-2 border-themegreen hover:bg-themegreen hover:text-white"
          >
            Download CV
          </a>
        </div>
      </div>
      {/* image part */}
      <div className="relative flex justify-center items-center ">
        <div className="w-72 h-72 rounded-full bg-slate-200 absolute"></div>
        <img
          src={modelImage}
          alt=""
          className="absolute w-72 h-72 rounded-full"
        />
      </div>
    </div>
  );
};

export default Home;
