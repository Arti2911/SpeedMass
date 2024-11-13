import React from "react";
import "./PerfectSolution.css";
import SmallBox from "./SmallBox";

const PerfectSolution = () => {
  return (
    <section className="perfect-wrapper">
      <div className="flexStart paddings innerWidth perfect-container">
        {/* left side */}
        <div className="perfect-left">
          <span className="orangeText">What we do</span>
          <h1 className="primaryText">Perfect Solution For Your Business</h1>
          <p className="secondaryText">
            our commitment to excellence extends to providing perfect solutions
            tailored for your business needs. We specialize in a spectrum of
            services designed to elevate your brand and streamline your
            operations. From innovative mobile app development and captivating
            web design to strategic digital marketing, we deliver comprehensive
            solutions that are finely tuned to perfection.
          </p>
          <button className="button">Start A Project</button>
        </div>
        {/* right side */}
        <div>
          <div className=" flexStart perfect-right">
            <SmallBox icon={<i class="ri-centos-line"></i>} title={"SaaS"} />
            <div className="marginBottom">
              <SmallBox
                icon={<i class="ri-megaphone-line"></i>}
                title={"Marketing"}
              />
            </div>
          </div>
          <div className=" flexStart perfect-right ">
            <SmallBox
              icon={<i class="ri-shield-flash-line"></i>}
              title={"Technology"}
            />
            <div className="marginBottom">
              <SmallBox
                icon={<i class="ri-pencil-ruler-2-fill"></i>}
                title={"Designing"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectSolution;
