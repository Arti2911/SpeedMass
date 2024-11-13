import React from "react";
import "./Hero.css";
import Form from "../Form/Form";

const Hero = () => {
  return (
    <>
      <section className="h-wrapper">
        <div className="flexStart paddings innerWidth h-container">
          {/* left side */}
          <div className="flexColStart h-left">
            <span className="orangeText">We Buits Teams Thats Built</span>{" "}
            <br />
            <span className="primaryText text-5xl">YOUR SOFTWARE</span> <br />
            <span className="secondaryText">
              Welcome to SpeedoMass, Your Gateway to Innovation! At SpeedoMass,
              we are not just a software agency; we are the architects of
              technological transformations and the maestros of unforgettable
              events. We pride ourselves on being a dynamic and innovative
              company, dedicated to pushing the boundaries of IT development and
              event management.
            </span>{" "}
            <br />
            <button className="button">
              <a href="#">Discover More</a>
            </button>
          </div>
          {/* right side */}
          <div className="flexColCenter h-right">
            <Form />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
