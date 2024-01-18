import React from "react";
import PlusIcon from "../assets/plus.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const skillData = [
  {
    skillName: "Programming",
    skills: "Java, C, Python, Javascript",
  },
  {
    skillName: "Frontend Dev",
    skills: "Html, CSS, Javacript, ReactJS",
  },
  {
    skillName: "Backend Dev",
    skills: "NodeJS, ExpressJS, REST Api",
  },
  {
    skillName: "Database",
    skills: "MySQL, MongoDB, Sequelize, Mongoose",
  },
  {
    skillName: "Frameworks",
    skills: "Tailwind CSS, Bootstrap, MaterialUI",
  },
  {
    skillName: "Developer Tool",
    skills: "Chrome Devtools, VS code, Postman, NPM, Git & Github",
  },
];
const Skills = () => {
  return (
    <>
      <div id="skills" className="min-h-screen mx-5 my-10 text-center">
        <div className="text-2xl font-semibold">What I've</div>
        {/*  */}
        <VerticalTimeline lineColor="black">
          {skillData &&
            skillData.map((item, index) => {
              return (
                <VerticalTimelineElement
                  key={index}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: "#00838d", color: "#fff" }}
                  contentArrowStyle={{ borderRight: "15px solid  #00838d" }}
                  iconStyle={{ background: "#00838d", color: "#fff" }}
                >
                  <h3 className="vertical-timeline-element-title text-xl font-semibold">
                    {item.skillName}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-base font-sans">
                    {item.skills}
                  </h4>
                </VerticalTimelineElement>
              );
            })}

          <VerticalTimelineElement
            iconStyle={{ background: "#00838d", color: "#fff" }}
            icon={
              <img
                src={PlusIcon}
                style={{ filter: "invert(100%)", padding: "15px" }}
              />
            }
          />
        </VerticalTimeline>
        {/*  */}
        <div className="text-base font-semibold">Still Upskilling</div>
      </div>
    </>
  );
};

export default Skills;
