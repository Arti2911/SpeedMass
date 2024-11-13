import React from "react";
import "./OurClient.css";

const OurClient = () => {
  return (
    <section className="our-wrapper">
      <div className="flexStart paddings innerWidth our-container">
        {/* left side */}
        <div className="our-left">
          <h1 className="primaryText">Our Client Say About Us</h1>
          <p className="secondaryText">
            Explore the experiences shared by our clients as they offer insights
            into their journey with us. Uncover the stories of satisfaction,
            partnership, and success that define our collaborative efforts. Our
            client testimonials speak louder than words, providing a glimpse
            into the genuine trust and satisfaction that define our
            relationships.
          </p>
          <p className="secondaryText">
            Discover the genuine experiences of our valued clients as they share
            their thoughts on partnering with us. These testimonials reflect the
            trust, satisfaction, and success that define our relationships. Join
            us in celebrating the voices of those who have experienced the
            difference with us.
          </p>
        </div>
        {/* right side */}
        <div className="our-right">
          <img src="./images/blog-pic 1.png" className="img1" alt="" />
          <img src="./images/1 1.png"className="img2" alt="" />
        </div>
      </div>
    </section>
  );
};

export default OurClient;
