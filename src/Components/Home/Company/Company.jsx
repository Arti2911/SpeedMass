import React from "react";
import "./Company.css";

const Company = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="flexStart paddings innerWidth c-container">
          {/* left side */}
          <div className="flexColStart c-left">
            <span className="orangeText">About Our Company</span>
            <br />
            <span className="primaryText text-4xl leading-tight">
              Stay Up Stay Running Stay Protected
            </span>
            <br />
            <span className="secondaryText">
              At SpeedoMass, we go beyond coding; we sculpt digital stories and
              curate exceptional events. As a dynamic software agency, we blend
              creativity, technology, and meticulous event management to
              redefine excellence.
            </span>
            <div className=" ">
              <div className="c-top">
                <div>
                  <i class="ri-award-fill"></i>Award Winning
                </div>
                <div>
                  <i class="ri-time-zone-line"></i>24/7 Support
                </div>
              </div>

              <div className="c-top">
                <div>
                  <i class="ri-magic-fill"></i>Professional Staff
                </div>
                <div>
                  <i class="ri-money-dollar-circle-line"></i>Fair prices
                </div>
              </div>
            </div>
            <br />
            <button className="button">
              <a href="#">Start A Project</a>
            </button>
          </div>
          {/* right side */}
          <div className="flexColCenter c-right">
            <img src="./images/image 1.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Company;
