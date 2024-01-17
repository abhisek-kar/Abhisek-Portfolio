import React, { useState } from "react";
import backgroundImage from "../assets/blog.png";

import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import blog5 from "../assets/blog5.png";
import blog6 from "../assets/blog6.png";
import blog7 from "../assets/blog7.png";

const blogData = [
  {
    img: blog1,
    link: "https://medium.com/gitconnected/axios-vs-fetch-a-comprehensive-comparison-for-javascript-http-requests-1f658b220d9",
  },
  {
    img: blog2,
    link: "https://medium.com/gitconnected/event-loop-in-node-js-vs-browser-28a3e6b57d8b",
  },
  {
    img: blog3,
    link: "https://medium.com/gitconnected/unlocking-the-power-of-react-hooks-a-comprehensive-guide-for-interviews-c7fb34302f0b",
  },
  {
    img: blog4,
    link: "https://medium.com/gitconnected/node-js-20-unleashing-a-new-era-in-javascript-development-8ac3bef81e21",
  },
  {
    img: blog5,
    link: "https://medium.com/gitconnected/demystifying-the-event-loop-in-asynchronous-programming-0f8f2553f48e",
  },
  {
    img: blog6,
    link: "https://medium.com/gitconnected/beyond-create-react-app-exploring-lightning-fast-alternatives-for-modern-web-development-in-2023-732062c672d6",
  },
  {
    img: blog7,
    link: "https://medium.com/javascript-in-plain-english/web-api-essentials-connecting-and-extending-web-applications-7ae488e9ce22",
  },
];

const Blogs = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id="blogs"
      className="relative overflow-hidden mt-5 z-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%", // Adjusted for responsiveness
        height: "100vh",
      }}
    >
      <div className="text-center font-semibold text-2xl flex items-center justify-center gap-2">
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
        <div>Blog Arena</div>
        <div className="w-3 h-3 bg-themegreen rounded-full"></div>
      </div>
      <div className="absolute top-[40%] left-[9%] w-full h-full overflow-auto px-1">
        {/*  scrollable content goes here */}
        {blogData &&
          blogData.map((item, idx) => {
            return (
              <a
                href={item.link}
                key={idx}
                className="w-[50%] h-auto  border-b-2 border-themegreen mb-3 p-1 flex flex-col justify-center cursor-pointer "
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Recommended for security
                onMouseOver={() => setIsHovered(true)}
              >
                <img
                  src={item.img}
                  alt="blog image"
                  className={`max-w-full max-h-full ${
                    idx === 0 && !isHovered ? "animate-pulse" : ""
                  }   `}
                />
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Blogs;
