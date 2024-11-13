import React from "react";
import Posts from "../Home/Articles/Posts";
import "../Home/Articles/Articles.css";
import "./BlogPost.css";

const BlogPost = () => {
  return (
    <div className="flexColStart paddings innerWidth Articles-container">
      <div className="flexStart all-posts">
        <Posts
          images={"./images/Group 1000001794.png"}
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
        <Posts
          images={"./images/Group 1000001795.png"}
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
        <Posts
          images={"./images/Group 1000001796.png"}
          text={
            "Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text"
          }
          spanText={"By Admin"}
          date={"Oct 25, 2023"}
        />
      </div>
      <div className="flexStart" style={{ margin: "1rem 0" }}>
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
    </div>
  );
};

export default BlogPost;
