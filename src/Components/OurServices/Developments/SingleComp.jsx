import React from "react";
import "./Developments.css";

const SingleComp = (props) => {
  return (
    <div className="boxes">
      <div className="flexStart">
        <span>
          {props.icon}
        </span>
        <span className="flexColStart content">
          {props.content} <span className="font-bold">{props.boldd}</span>
        </span>
      </div>
      <p className="secondaryText">
       {props.para}
      </p>
    </div>
  );
};

export default SingleComp;
