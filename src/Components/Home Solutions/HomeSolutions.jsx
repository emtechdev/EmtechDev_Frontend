import React from "react";
import HomeSolutionImageOne from "../../assets/home_solutions_one.png";
import HomeSolutionImageTwo from "../../assets/home_solutions_two.png";
import HomeSolutionImageThree from "../../assets/home_solutions_three.png";
import "./HomeSolutions.css";

export default function HomeSolutions() {
  return (
    <>
      <div className="home_solutions px-10 py-10">
        <h1 className="home_solutions_title text-center mb-20">
          Make Your Factory Smarter
        </h1>
        <div className="home_solutions_container">
          <div className="home_solutions_item text-center p-4">
            <img
              src={HomeSolutionImageOne}
              alt="Home Solution"
              className="mx-auto mb-7"
            />
            <h2 className="home_solutions_heading font-bold mb-5">
              Digital Transformation Solutions
            </h2>
            <p className="home_solutions_desc text-gray-500 mb-3">
              Kojo combine the leading edge computing hardware and easy-to-use
              software to accelerate digital transformation and Industry 4.0.
            </p>
            <button className="home_solutions_btn hvr-pulse">
              Find Out More
            </button>
          </div>
          <div className="home_solutions_item text-center p-4">
            <img
              src={HomeSolutionImageTwo}
              alt="Home Solution"
              className="mx-auto mb-7"
            />
            <h2 className="home_solutions_heading font-bold mb-5">
              Robotic & Automation Solutions
            </h2>
            <p className="home_solutions_desc text-gray-500 mb-3">
              Robotic solutions help manufacturers fulfill the needs of mass
              customization, and address issues related to rising labor costs
              and labor shortages.
            </p>
            <button className="home_solutions_btn hvr-pulse">
              Find Out More
            </button>
          </div>
          <div className="home_solutions_item text-center p-4">
            <img
              src={HomeSolutionImageThree}
              alt="Home Solution"
              className="mx-auto mb-7"
            />
            <h2 className="home_solutions_heading font-bold mb-5">
              Automated Inspection Solutions
            </h2>
            <p className="home_solutions_desc text-gray-500 mb-3">
              We design and deliver automated inspection solutions that solve
              the most challenging inspection requirement in the industry.
            </p>
            <button className="home_solutions_btn hvr-pulse">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
