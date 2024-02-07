import React, { useState, useEffect } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
const projectData = [
  {
    name: "Ecommerce Application",
    description:
      "Ecommerec website where you can buy online at an afforadable price",
    link: "https://github.com/abhisek-kar/Ecommerce-MERN-stack",
  },
  {
    name: "Node-Bite",
    description: "A Node and Express based REST API, for food ordering",
    link: "https://github.com/abhisek-kar/NODE-BITE",
  },
  {
    name: "Portfolio",
    description: "A simple static portfolio website of me",
    link: "https://github.com/abhisek-kar/Abhisek-Portfolio",
  },
  {
    name: "Campus Track",
    description:
      "MERN based website curated for acdemic purpose in a university to track student attendance",
    link: "https://github.com/abhisek-kar/Campus-Track",
  },
  {
    name: "Amaz Calculator",
    description: "A simple calculator made using HTML,CSS, JAVASCRIPT",
    link: "https://abhisek-kar.github.io/amaz-calculator.github.io/",
  },
  {
    name: "DrumKIT",
    description: "A great Band website made with love using html, css, js",
    link: "https://abhisek-kar.github.io/drumkit.github.io/",
  },
  {
    name: "GIPHY SEARCH",
    description: "GIF searching website using GIPHY API with pagination",
    link: "https://alpha-bi-project-b7ea1yn2h-abhisek-kars-projects.vercel.app/",
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const len = projectData.length;

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % len);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + len) % len);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextItem();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const handlePaginationClick = (groupIndex) => {
    const newIndex = groupIndex * 3;
    setCurrentIndex(newIndex);
  };
  return (
    <div className="min-h-screen  px-5 my-10 flex flex-col gap-10 justify-center items-center">
      <div className=" text-center font-semibold text-2xl flex items-center justify-center gap-2">
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
        <div>My Projects</div>
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
      </div>
      <div className="flex items-center justify-evenly  gap-5 ">
        <ArrowButton onClick={prevItem} buttonIcon={leftArrow} />
        <div className="flex  gap-16">
          {[
            currentIndex,
            (currentIndex + 1) % len,
            (currentIndex + 2) % len,
          ].map((index) => (
            <ProjectCard
              key={index}
              index={index}
              currentIndex={currentIndex}
              ProjectDesciption={projectData[index]?.description}
              projectName={projectData[index]?.name}
              projectLink={projectData[index]?.link}
            />
          ))}
        </div>

        <ArrowButton onClick={nextItem} buttonIcon={rightArrow} />
      </div>
      <div className=" flex items-center justify-center mt-[5%]">
        {[0, 1, 2].map((groupIndex) => (
          <PaginationCircle
            key={groupIndex}
            groupIndex={groupIndex}
            currentIndex={currentIndex}
            onClick={handlePaginationClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;

const ArrowButton = ({ onClick, buttonIcon }) => {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 p-2 rounded-full bg-themegreen  "
    >
      <img
        src={buttonIcon}
        alt=""
        className="mx-auto"
        style={{ filter: "invert(100%)" }}
      />
    </button>
  );
};

const ProjectCard = ({
  index,
  currentIndex,
  projectName,
  ProjectDesciption,
  projectLink,
}) => {
  const isCenter = (currentIndex + 1) % projectData.length === index;

  return (
    <>
      <a
        href={projectLink}
        className={`contains relative w-72 h-72 bg-slate-200 my-5 rounded-sm flex flex-col gap-5 cursor-pointer hover:text-white ${
          isCenter ? "transform scale-125" : "opacity-75"
        }`}
        style={{
          transition: "ease-in-out all .4s",
        }}
        target="_blank"
      >
        <div className="cover"></div>
        <div className="texts mx-auto mt-[15%] text-xl z-10">{projectName}</div>
        <p className="texts mx-4 text-sm tracking-wide text-justify z-10">
          {ProjectDesciption}
        </p>
        <div className="texts mx-4 mt-auto mb-2 text-end font-semibold z-10">
          <span className="font-bold text-lg animate-pulse scale-[]">→</span>
        </div>
      </a>
    </>
  );
};

const PaginationCircle = ({ groupIndex, currentIndex, onClick }) => {
  const startIndexOfGroup = groupIndex * 3;
  const isActive =
    currentIndex >= startIndexOfGroup && currentIndex < startIndexOfGroup + 3;

  return (
    <div
      className={`mx-2 rounded-full cursor-pointer ${
        isActive ? "bg-themegreen w-2 h-2" : "bg-gray-300 w-3 h-3"
      }`}
      onClick={() => onClick(groupIndex)}
      style={{
        transition: "ease-in-out all .4s",
      }}
    />
  );
};
