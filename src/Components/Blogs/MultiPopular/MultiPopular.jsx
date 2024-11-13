import React from "react";
import "./MultiPopular.css";
import Posts from "../../Home/Articles/Posts";

const MultiPopular = () => {
  return (
    <div className="flexStart paddings innerWidth multiple-container">
      {/* left side */}
      <div className="popular-post">
        <h1 className="primaryText">Popular Posts</h1>
        <Posts
          images={"./images/Group 1000001794.png"}
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
      </div>
      {/* right side */}
      <div className="flexColStart recent-post">
        <h1 className="primaryText">Recent Posts</h1>
        <Posts
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
        <Posts
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
        <Posts
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
      </div>
    </div>
  );
};

export default MultiPopular;
