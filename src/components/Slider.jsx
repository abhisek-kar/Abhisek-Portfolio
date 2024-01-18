import React, { useState, useEffect } from "react";
import leftArrow from "../assets/left-arrow.png";
import rightArrow from "../assets/right-arrow.png";
const projectData = [
  {
    name: "Project Name1",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name2",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name3",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name4",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name5",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name6",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name7",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
  },
  {
    name: "Project Name8",
    description:
      "I specialize in the MERN (MongoDB, Express.js, React.js, Node.js) stack.",
    link: "#",
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
    <div className="min-h-screen  px-5 my-10">
      <div className="flex items-center justify-evenly  gap-5 ">
        <ArrowButton onClick={prevItem} buttonIcon={leftArrow} />
        {/* <div className="flex  gap-16">
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
        </div>  */}
        <div
          style={{
            display: "flex",
            gap: "5px",
            overflow: "hidden",
            width: "420px",
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7].map((item, idx) => {
            return (
              <div
                key={idx}
                style={{
                  flex: "0 0 60px",
                  height: "60px",
                  backgroundColor: "themegreen",
                }}
              >
                {item}
              </div>
            );
          })}
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
          source code <span className="font-bold text-lg animate-pulse">→</span>
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
