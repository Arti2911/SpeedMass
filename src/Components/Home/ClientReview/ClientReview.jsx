import React from "react";
import "./ClientReview.css";

const ClientReview = () => {
  return (
    <section className="flexStart paddings innerWidth client-container">
      {/* left side */}
      <div className="client-left">
        <img src="./images/Group 65.png" alt="" />
      </div>
      {/* right-side */}
      <div className="client-right">
        <span className="orangeText">Our Client Feedback</span>
        <h1 className="primaryText">We Are Happy To Say Our Client Review</h1>
        <p className="secondaryText">
          Discover the joy in our client reviews. Short, sweet, and straight
          from the source - our clients share their happiness with Speedomass
        </p>
        <div className="box">
          <h1 className="primaryText comma">"</h1>
          <p className="secondaryText">
            Got my android and iOS application designed by the Speedomass, it
            was delivered earlier than I expected. I’ll definitely work with
            them again in future for my app management and updates
          </p>
          <div className="flexMargin">
            <div className="flexStart">
              <img src="./images/Ellipse 20.png" alt="" />
              <div className="flexColStart name">
                <span className="primaryText">Brandon Farris</span>
                <span className="primaryText">Berlin</span>
              </div>
            </div>
            <img src="./images/star.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientReview;
