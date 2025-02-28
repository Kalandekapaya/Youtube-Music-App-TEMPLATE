import { React, useState } from "react";
import DownloadAds from "./DownloadAds";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "20rem",
    },
    false: {
      left: "15rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "140px",
    },
    false: {
      left: "125px",
    },
  };
  const rect = {
    true: {
      left: "12rem",
    },
    false: {
      left: "7rem",
    },
  }
  const heart = {
    true: {
      left: "10rem",
    },
    false: {
      left: "5.5rem",
    },
  };
  return (
    
      // <div className="wrapper bg-[#081730] flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
      //   {/* left side */}
      //   <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
      //     <span>Experience The</span>{" "}
      //     <span>
      //       <b>Largest Zambian Music Platform By 2025</b>
      //     </span>
      //     <span className="text-[15px] text-[#525D6E]">
      //       Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
      //       <br />
      //       Suspendisse in leo non risus tincidunt lobortis.
      //     </span>
      //     {/* download ads */}
      //     <div>
      //       <span className="text-[13px]">Download now on IOS and Android</span>
      //       <DownloadAds />
      //     </div>
      //   </div>


      <div className="hero min-h-screen bg-base-200 relative">
          <div className="hero-content flex-col lg:flex-row-reverse">
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                 {/* download ads */}
          <div>
            <span className="text-[13px]">Download now on IOS and Android</span>
            <DownloadAds />
          </div>
                <button className="btn btn-primary">Get Started</button>
              </div>
          </div> 
          <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
             minTopValue={100}>
        {/* right side */}
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animate={`${elementIsVisible}`}
            transition={{ duration: 0.9, type: "ease-out" }}
            src={require("../img/backgraphics.png")}
            alt=""
            className="absolute top-[-8rem] left-[9rem]"
          />
          <img
            src={require("../img/p 1.png")}
            alt=""
            className="absolute top-[-15rem] h-[34rem] left-[13rem]"
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={require("../img/p 2.png")}
            alt=""
            className="absolute left-[105px] top-[94px] w-[175px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 0.8,
            }}
            src={require("../img/p 3.png")}
            alt=""
            className="absolute w-[5rem] left-[13rem] top-[12rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 0.7,
            }}
            src={require("../img/p 4.png")}
            alt=""
            className="absolute w-[5rem] left-[12.5rem] top-[12rem]"
          />
        </div>
        </VisibilitySensor>
      </div>


       
      // </div>
    
  );
}

export default Hero;
