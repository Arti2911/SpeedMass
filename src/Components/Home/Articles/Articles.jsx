import React from "react";
import "./Articles.css";
import Posts from "./Posts";

const Articles = () => {
  return (
    <section className="Articles-wrapper">
      <div className="flexColStart paddings innerWidth Articles-container">
        <h1 className="primaryText text-3xl">Variety of Articles and Posts</h1>
        <div className="flexStart all-posts">
          <Posts
            images={"./images/Group 1000001797.png"}
            text={
              "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
            }
            spanText={"By Admin"}
            date={"Oct 25, 2023"}
          />

          <Posts
            images={"./images/Group 1000001798.png"}
            text={
              "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
            }
            spanText={"By Admin"}
            date={"Oct 25, 2023"}
          />

          <Posts
            images={"./images/Group 1000001799.png"}
            text={
              "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
            }
            spanText={"By Admin"}
            date={"Oct 25, 2023"}
          />
        </div>
        <button className="button ">See More</button>
      </div>
    </section>
  );
};

export default Articles;
