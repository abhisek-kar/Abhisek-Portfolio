import React, { useState } from "react";
import { Link } from "react-scroll";

const navbarData = [
  {
    title: "Home",
    to: "home",
  },
  {
    title: "About",
    to: "about",
  },
  {
    title: "Skills",
    to: "skills",
  },
  {
    title: "Projects",
    to: "projects",
  },
  {
    title: "Certifications",
    to: "certifications",
  },
  {
    title: "Blogs",
    to: "blogs",
  },
];
const NavBar = () => {
  return (
    <div className="py-3 pr-[4%] flex justify-center">
      <div className="m-auto flex gap-[8%] ">
        {navbarData &&
          navbarData.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.to}
                smooth={true}
                duration={500}
                className={`text-lg font-medium  transition-all cursor-pointer ${
                  index === 0 ? "border-b-2" : ""
                } hover:border-b-2 border-themegreen text-gray-600 hover:text-gray-800`}
              >
                {item.title}
              </Link>
            );
          })}
      </div>
      <Link to="contact" smooth={true} duration={700}>
        <button className="text-xl font-semibold bg-themegreen text-white transition-all px-2 py-1 rounded-md">
          Contact Me
        </button>
      </Link>
    </div>
  );
};

export default NavBar;
