import React from "react";
import "./CaseStudies.css";

const CaseStudies = () => {
  return (
    <section className="case-wrapper">
      <div className="flexColStart paddings innerWidth case-container">
        <h1 className="primaryText">Case Studies Our Featured Projects</h1>
        <div className="flexStart case-div ">
          <div className="flexColStart case-left">
            <button className="button">Mobile Apps</button>
            <button className="button">Web Development</button>
            <button className="button">Dashboard Design</button>
            <button className="button">Artificial Intelligence</button>
            <button className="button">BlockChain Development</button>
          </div>
          <div className="flexStart case-right">
            <div className="case-right-left">
              <h2 className="primaryText">App Name Here</h2>
              <p className="secondaryText">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it
              </p>
              <button className="button">Read More</button>
            </div>
            <div className="case-right-right">
              <img src="./images/Group 54.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
