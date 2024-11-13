import React from "react";

const Simple1 = (props) => {
  return (
    <div>
      
      <div className="flexStart small-div">
        <span>
          {props.icon}
        </span>
        <div>
          <h2>{props.head}</h2>
          <p className="secondaryText">
            {props.para}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Simple1;
