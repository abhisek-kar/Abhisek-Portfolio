import * as React from "react";
import email from "../assets/at.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github-sign.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";
import telegram from "../assets/telegram.png";

const Footer = () => {
  return (
    <>
      <div className="-mt-44 relative">
        <SVGComponent />
        <div className="absolute  top-[55%] right-[5%]">
          <div className="text-white text-lg font-semibold pl-2 mb-3">
            Let's Stay Connected
          </div>
          <div className="flex relative">
            <img
              src={email}
              alt=""
              className="w-4 h-4 absolute top-[25%] left-2"
            />
            <input
              disabled
              placeholder="drop ur mail"
              type="email"
              className="outline-none py-1 pl-8 pr-2 w-60 rounded-full font-mono text-lg bg-white"
            />
            <button
              disabled
              className="px-2 py-1 bg-white rounded-full ml-2 font-semibold text-lg "
            >
              Connect
            </button>
          </div>
          <div className="my-5 pl-2 text-white font-bold tracking-wide">
            <div>Follow me on</div>
            <div className="mt-4 flex gap-5">
              <a
                href="http://www.linkedin.com/in/abhisek-kar"
                className=" "
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt="linkedin image"
                  className="w-8 h-8 p"
                  style={{ filter: "invert(100%)" }}
                />
              </a>
              {/* <a href="https://github.com/abhisek-kar" target="_blank">
                <img
                  src={github}
                  alt="github image"
                  className="w-8 h-8"
                  style={{ filter: "invert(100%)" }}
                />
              </a> */}
              <a href="" target="_blank">
                <img
                  src={twitter}
                  alt="github image"
                  className="w-8 h-8"
                  style={{ filter: "invert(100%)" }}
                />
              </a>
              <a href="">
                <img
                  src={whatsapp}
                  alt="github image"
                  className="w-8 h-8"
                  style={{ filter: "invert(100%)" }}
                />
              </a>
              <a href="">
                <img
                  src={telegram}
                  alt="github image"
                  className="w-8 h-8"
                  style={{ filter: "invert(100%)" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
export const SVGComponent = () => (
  <svg
    width="100%"
    height="100%"
    id="svg"
    viewBox="0 0 1440 490"
    xmlns="http://www.w3.org/2000/svg"
    className="transition duration-300 ease-in-out delay-150"
  >
    <style>
      {
        '\n          .path-0{\n            animation:pathAnim-0 4s;\n            animation-timing-function: linear;\n            animation-iteration-count: infinite;\n          }\n          @keyframes pathAnim-0{\n            0%{\n              d: path("M 0,500 L 0,187 C 178.2666666666667,204.46666666666667 356.5333333333334,221.93333333333334 500,206 C 643.4666666666666,190.06666666666666 752.1333333333334,140.73333333333335 903,132 C 1053.8666666666666,123.26666666666667 1246.9333333333334,155.13333333333333 1440,187 L 1440,500 L 0,500 Z");\n            }\n            25%{\n              d: path("M 0,500 L 0,187 C 118.80000000000001,208.33333333333334 237.60000000000002,229.66666666666669 419,224 C 600.4,218.33333333333331 844.4000000000001,185.66666666666666 1025,175 C 1205.6,164.33333333333334 1322.8,175.66666666666669 1440,187 L 1440,500 L 0,500 Z");\n            }\n            50%{\n              d: path("M 0,500 L 0,187 C 171.06666666666666,229 342.1333333333333,271 503,255 C 663.8666666666667,239 814.5333333333333,165 969,144 C 1123.4666666666667,123 1281.7333333333333,155 1440,187 L 1440,500 L 0,500 Z");\n            }\n            75%{\n              d: path("M 0,500 L 0,187 C 197.59999999999997,165.39999999999998 395.19999999999993,143.79999999999998 530,161 C 664.8000000000001,178.20000000000002 736.8000000000001,234.2 878,245 C 1019.1999999999999,255.8 1229.6,221.4 1440,187 L 1440,500 L 0,500 Z");\n            }\n            100%{\n              d: path("M 0,500 L 0,187 C 178.2666666666667,204.46666666666667 356.5333333333334,221.93333333333334 500,206 C 643.4666666666666,190.06666666666666 752.1333333333334,140.73333333333335 903,132 C 1053.8666666666666,123.26666666666667 1246.9333333333334,155.13333333333333 1440,187 L 1440,500 L 0,500 Z");\n            }\n          }'
      }
    </style>
    <path
      d="M 0,500 L 0,187 C 178.2666666666667,204.46666666666667 356.5333333333334,221.93333333333334 500,206 C 643.4666666666666,190.06666666666666 752.1333333333334,140.73333333333335 903,132 C 1053.8666666666666,123.26666666666667 1246.9333333333334,155.13333333333333 1440,187 L 1440,500 L 0,500 Z"
      stroke="none"
      strokeWidth={0}
      fill="#00838d"
      fillOpacity={1}
      className="transition-all duration-300 ease-in-out delay-150 path-0"
    />
  </svg>
);
