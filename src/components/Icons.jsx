import React from "react";
import Logo1 from "../assets/linkedin.png";
import Logo2 from "../assets/github-sign.png";
import Logo3 from "../assets/email.png";

const Icons = () => {
  return (
    <div className="my-10 flex gap-5 items-center justify-center">
      <a href="http://www.linkedin.com/in/abhisek-kar" target="_blank">
        <img
          src={Logo1}
          alt="linkedin"
          className="w-12 h-12 p-2  cursor-pointer animate-bounce hover:animate-none  transition-all bg-slate-200 "
        />
      </a>
      <a href="https://github.com/abhisek-kar/" target="_blank">
        <img
          src={Logo2}
          alt=""
          className="w-12 h-12 p-2  cursor-pointer animate-bounce hover:animate-none transition-all bg-slate-200 "
        />
      </a>
      <a href="mailto:karabhisek16@gmail.com">
        {" "}
        <img
          src={Logo3}
          alt=""
          className="w-12 h-12 p-2  cursor-pointer animate-bounce hover:animate-none transition-all bg-slate-200 "
        />
      </a>
    </div>
  );
};

export default Icons;
