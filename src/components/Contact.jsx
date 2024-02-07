import React, { useState } from "react";
import contactSvg from "../assets/Contact us-amico.svg";
import user from "../assets/user.png";
import email from "../assets/email (1).png";
import mobileicon from "../assets/mobile.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [mobile, setMobile] = useState("");
  const handleClick = (e) => {
    if (!email || !name) {
      return alert("please fill all the fields");
    }
    alert("successfully submitted");
  };
  return (
    <div id="contact" className="min-h-screen px-5 mt-10 grid grid-cols-2">
      {/* contact details */}
      <div className="flex flex-col gap-6  justify-center items-center">
        <div className="text-center font-mono text-xl font-semibold tracking-wide">
          Contact Me
        </div>
        <div className="relative ">
          <input
            disabled
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            className="outline-none pl-12 py-2 rounded-full w-80 shadow-xl shadow-gray-400 font-mono text-lg tracking-wide"
          />
          <img
            src={user}
            alt=""
            className="w-5 h-5 absolute top-[25%] left-[4%]"
            style={{ filter: "invert(30%)" }}
            spellCheck={false}
          />
        </div>
        <div className="relative">
          <input
            disabled
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Mail"
            className="outline-none pl-12 py-2 rounded-full w-80 shadow-xl shadow-gray-400 font-mono text-lg tracking-wide"
          />
          <img
            src={email}
            alt=""
            className="w-5 h-5 absolute top-[25%] left-[4%]"
            style={{ filter: "invert(30%)" }}
            spellCheck={false}
          />
        </div>
        <div className="relative">
          <input
            disabled
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="number"
            placeholder="Mobile no. (optional)"
            className="outline-none pl-12 py-2 rounded-full w-80 shadow-xl shadow-gray-400 font-mono text-lg tracking-wide"
          />
          <img
            src={mobileicon}
            alt=""
            className="w-5 h-5 absolute top-[25%] left-[4%]"
            style={{ filter: "invert(30%)" }}
            spellCheck={false}
          />
        </div>
        <button
          disabled
          onClick={handleClick}
          className="mt-5  py-2 rounded-full w-80  bg-themegreen text-white font-mono text-xl tracking-wide"
        >
          {" "}
          submit
        </button>
      </div>
      {/* contact icon */}
      <div className="">
        <img
          src={contactSvg}
          alt="contcat image"
          className="w-3/4 m-auto pt-5 "
        />
      </div>
    </div>
  );
};

export default Contact;
