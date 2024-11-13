import React from "react";
import "./Services.css";

const SingleComp = (props) => {
  return (
    <div>
      <div className="flexStart ">
        {props.icon}
        <h1>
          {props.heading} <br />{" "}
          <span className="font-bold">{props.headingSpan}</span>
        </h1>
      </div>
      <p className="secondaryText">{props.para} </p>{" "}
    </div>
  );
};

export default SingleComp;
