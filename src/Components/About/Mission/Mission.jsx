import React from "react";
import "./Mission.css";
import CountUp from "react-countup";

const Mission = () => {
  return (
    <section className="m-wrapper">
      <div className="flexStart paddings innerWidth m-container">
        {/* left side */}
        <div className="m-left">
          <img src="./images/image 4.png" alt="" />
        </div>
        {/* right side */}
        <div className="m-right">
          <h1 className="primaryText">
            Mission & Values Of Your Law Consult Firm
          </h1>
          <p className="secondaryText">
            At the very core of SpeedoMass, our mission and values serve as the
            guiding compass, shaping our identity and directing our every
            endeavor. Our mission is crystal clear: to take the lead in
            innovation within the realms of IT Development and Event Management.
            We are dedicated to delivering nothing short of cutting-edge
            solutions and curating events that leave lasting impressions.
          </p>
          <div className="flexStart twoBoxes">
            <div className="m-box">
              <CountUp
                className="primaryText"
                start={10}
                end={25}
                duration={5}
              />
              <span className="primaryText">+</span>
              <p>Apps Complete</p>
            </div>
            <div className="m-box">
              <CountUp
                className="primaryText"
                start={10}
                end={50}
                duration={5}
              />
              <span className="primaryText">+</span>
              <p>Website Live</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
