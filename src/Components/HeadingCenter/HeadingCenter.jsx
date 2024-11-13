import React from "react";
import "./HeadingCenter.css";

const HeadingCenter = (props) => {
  return (
    <div className="heading-container">
      <h1 className="primaryText">{props.heading}</h1>
    </div>
  );
};

export default HeadingCenter;
