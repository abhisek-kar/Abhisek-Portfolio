import React from "react";

import Carousel from "react-elastic-carousel";

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
const Projects = () => {
  const projectCards = projectData.map((item, idx) => (
    <ProjectCard
      key={idx}
      projectName={item.name}
      description={item.description}
      link={item.link}
    />
  ));
  return (
    <div
      id="projects"
      className="px-5 my-10 flex gap-5 min-h-screen flex-col justify-center items-center"
    >
      <div className="text-center font-semibold text-2xl flex items-center justify-center gap-2">
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
        <div>My Projects</div>
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
      </div>

      <Carousel
        pagination={true}
        itemPadding={[10, 50]}
        itemsToShow={3}
        className=" px-5"
      >
        {projectCards}
      </Carousel>
    </div>
  );
};

export default Projects;

export const ProjectCard = ({ projectName, description, link }) => {
  return (
    <>
      <a
        href={link}
        className=" contains relative w-90 h-72 bg-slate-200 my-5 rounded-sm flex flex-col gap-5   cursor-pointer  hover:text-white "
        style={{
          transition: "ease-in-out all .4s",
        }}
        target="_blank"
      >
        <div className=" cover"></div>
        <div className="texts mx-auto mt-[15%] text-xl z-10">{projectName}</div>
        <p className="texts mx-4 text-sm tracking-wide text-justify z-10">
          {description}
        </p>
        <div className="texts mx-4 mt-auto mb-2 text-end font-semibold z-10">
          source code <span className="font-bold text-lg animate-pulse">→</span>
        </div>
      </a>
    </>
  );
};
