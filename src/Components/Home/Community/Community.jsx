import React from "react";
import "./Community.css";

const Community = () => {
  return (
    <section className="c-wrapper">
      <div className="flexStart paddings innerWidth c-container">
        {/* left side */}
        <div className="flexColCenter c-left">
          <img src="./images/rectangle 8.png" alt="" />
        </div>

        {/* right side */}
        <div className="flexColStart c-right">
          <span className="orangeText">Join Our</span>
          <br />
          <span className="primaryText text-4xl leading-tight">
            Community As An Investor
          </span>
          <br />
          <span className="secondaryText">
            Embark on a journey of shared success by becoming part of our
            investor community. At Speedomass, we extend a warm invitation to
            individuals eager to contribute to and benefit from the growth and
            innovation we're cultivating. As an investor, you join a dynamic
            community where your insights and support play a pivotal role in
            shaping the future. Let's build success together – join our
            community and be a key player in our exciting ventures.
          </span>
          <button className="button">
            <a href="#">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;
