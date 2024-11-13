import React from "react";
import "./Innovation.css";

const Innovation = () => {
  return (
    <section className="flexStart paddings innerWidth inno-container">
      {/* left side */}
      <div className="flexColStart inno-left">
        <span className="orangeText">Modern Web Development</span>
        <span className="primaryText">Innovations</span>
        <p className="secondaryText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <button className="button">Discover More</button>
      </div>
      {/* right-side */}
      <div className="inno-right">
        <img src="./images/Open source-bro 2.png" alt="" />
      </div>
    </section>
  );
};

export default Innovation;
