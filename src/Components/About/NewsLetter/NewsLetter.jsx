import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <section className="flexColCenter paddings innerWidth news-container">
      <h1 className="primaryText">Join Our Newsletter</h1>
      <p className="secondaryText">
        Stay Informed and Inspired: Join Our Newsletter Today!
      </p>
      <div className="flexstart inputTag">
        <input type="text" name="" id="" placeholder="Full Name" />
        <input
          type="email"
          name=""
          id=""
          placeholder="Enter Your Email Address..."
        />
        <input type="submit" value="SUBSCRIBE" />
      </div>
    </section>
  );
};

export default NewsLetter;
