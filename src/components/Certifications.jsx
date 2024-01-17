import React from "react";
import webCertificate from "../assets/webcert.png";
import reactCertificate from "../assets/reactcert.png";
import amcatCertificate2 from "../assets/amcat2cert.png";
import amcatCertificate3 from "../assets/amcat3cert.png";
import amcatCertificate1 from "../assets/amacat1cert.png";

const certificateData = [
  {
    image: webCertificate,
    link: "https://www.udemy.com/certificate/UC-2fac9d04-ba08-46da-9894-c2ceee0e95cb/",
    description: "Web Dev Certification",
  },
  {
    image: reactCertificate,
    link: "https://www.linkedin.com/in/abhisek-kar/overlay/1635548077823/single-media-viewer/?profileId=ACoAADPzNvkBUB7LWmxXXMtZvr18U0Nws5DYTug",
    description: "React-Redux Certification",
  },
  {
    image: amcatCertificate1,
    link: "https://www.myamcat.com/certificate/32134419/software-development-trainee/166",
    description: "Amcat Certification",
  },
  {
    image: amcatCertificate2,
    link: "https://www.myamcat.com/certificate/32134419/in-english-comprehension/283",
    description: "Amcat Certification",
  },
  {
    image: amcatCertificate3,
    link: "https://www.myamcat.com/certificate/32134419/data-processing-specialist/211",
    description: "Amcat Certification",
  },
];

const Certifications = () => {
  return (
    <div
      id="certifications"
      className="min-h-screen px-10 flex flex-col gap-10 my-10"
    >
      <div className="text-center font-semibold text-2xl flex items-center justify-center gap-2">
        <div className="w-1 h-1 bg-themegreen rounded-full"></div>
        <div className="w-2 h-2 bg-themegreen rounded-full"></div>
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
        <div className="w-4 h-4 bg-themegreen rounded-full"></div>
        <div>Certifications</div>
        <div className="w-4 h-4 bg-themegreen rounded-full"></div>
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
        <div className="w-2 h-2 bg-themegreen rounded-full"></div>
        <div className="w-1 h-1 bg-themegreen rounded-full"></div>
      </div>
      <div className="grid grid-cols-5 grid-rows-2 gap-y-10">
        {certificateData &&
          certificateData.map((item, index) => {
            const positionStyle = getPositionStyle(index);

            return (
              <a
                target="_blank"
                data-tooltip-id="my-tooltip"
                data-tooltip-content="click to view"
                data-tooltip-variant="dark"
                data-tooltip-place="top"
                href={item.link}
                key={index}
                className="w-90 h-60 relative rounded-md shadow-2xl shadow-gray-700  overflow-hidden border-b-4 border-themegreen"
                style={{
                  ...positionStyle,
                }}
              >
                <div className="w-8 h-8 scale-[2.8] rotate-[135deg] bg-themegreen absolute  top-[-8%] right-[-8%] opacity-70"></div>
                <img src={item.image} alt="certificate image" className="p-1" />
                <div className="font-semibold text-gray-600 mt-2 text-base ml-2 ">
                  {item.description}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

const getPositionStyle = (index) => {
  switch (index) {
    case 0:
      return { gridRow: 1, gridColumn: 2 };
    case 1:
      return { gridRow: 1, gridColumn: 4 };
    case 2:
      return { gridRow: 2, gridColumn: 1 };
    case 3:
      return { gridRow: 2, gridColumn: 3 };
    case 4:
      return {
        gridRow: 2,
        gridColumn: 5,
        marginLeft: "-5%",
      };

    default:
      return {};
  }
};

export default Certifications;
