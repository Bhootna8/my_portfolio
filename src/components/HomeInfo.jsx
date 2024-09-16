import React from "react";
import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 mx-5">
        Hi, I'm
        <span className="text-white font-semibold mx-2">Anos</span>
        👋
        <br />A Software Engineer from India
      </h1>
    );
  }

  if (currentStage === 2) {
    return (
      <div className=" info-box">
        <p className=" font-medium sm:text-xl text-center">
          Worked with many people <br />
          and picked up many skills along the way
        </p>

        <Link to={'/about'} className="neo-brutalism-white neo-btn">
        Learn more
        <img src="/assets/assets/icons/arrow.svg" className="w-4 h-4 object-contain" alt="" />
        </Link>
      </div>
    );
  }

  if(currentStage === 3) {
    return (
        <div className="info-box">
            <p className=" font-medium sm:text-xl text-center">
                Led multiples projects to success over the years. <br /> Curious about the impact?
            </p>

            <Link to={'/projects'} className="neo-brutalism-white neo-btn">
            Visit my portfolio
            <img src="/assets/assets/icons/arrow.svg" className="w-4 h-4 object-contain" alt="arrow" />
            </Link>
        </div>
    )
}

if(currentStage===4) {
    return (
        <div className="info-box">
            <p className=" font-medium sm:text-xl text-center">
                Need a project done or looking for a dev? <br /> I'm just a few keystrokes away
            </p>

            <Link to={'/contact'} className="neo-brutalism-white neo-btn">
            Let's talk
            <img src="/assets/assets/icons/arrow.svg" className="w-4 h-4 object-contain" alt="arrow" />
            </Link>
        </div>
    )
}

return null;
};

export default HomeInfo;
