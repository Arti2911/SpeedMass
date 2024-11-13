import React from "react";
import "./TeamMember.css";

const Single = (props) => {
  return (
    <div className="team-inner">
      <div className="img">
        <img src={props.image} alt="" />

        <div className=" flexColCenter lorem">
          <span className="font-bold">{props.lorem}</span>
          <span>{props.desi}</span>
        </div>
      </div>
    </div>
  );
};

export default Single;
