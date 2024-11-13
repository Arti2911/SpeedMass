import React from "react";
import "./Articles.css";

const Posts = (props) => {
  return (
    <section className="post-wrapper">
      <div className="whole">
        <img src={props.images} alt="" />
        <div className="primaryText text-sm">
          {props.text}
        </div>
        <div className="  small-content">
          <div className="flexStart">
            <img src="./images/Image.png" alt="" />
            <span className="secondaryText">{props.spanText}</span>
          </div>
          <div className="orangeText date">{props.date}</div>
        </div>
      </div>
    </section>
  );
};

export default Posts;
