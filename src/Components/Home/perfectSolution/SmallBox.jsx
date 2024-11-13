import React from "react";
import "./PerfectSolution.css";

const SmallBox = (props) => {
  return (
    <div className="small-box">
      <span className="orangeText">{props.icon}</span>
      <h1 className="primaryText">{props.title}</h1>
      <p className="secondaryText">
        Unlock operational efficiency with SpeedoMass's innovative Software as a
        Service (SaaS) solutions. Tailored to your needs, our SaaS offerings
        streamline processes and provide scalable solutions.
      </p>
    </div>
  );
};

export default SmallBox;
