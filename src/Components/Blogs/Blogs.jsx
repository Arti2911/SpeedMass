import React from "react";
import BlogPost from "./BlogPost";
import HeadingCenter from "../HeadingCenter/HeadingCenter";
import NewsLetter from "../About/NewsLetter/NewsLetter";
import MultiPopular from "./MultiPopular/MultiPopular";
import Categories from "./Categories/Categories";

const Blogs = () => {
  return (
    <>
      <HeadingCenter heading={"Blogs"} />
      <Categories />
      <MultiPopular />
      <BlogPost />
      <NewsLetter />
    </>
  );
};

export default Blogs;
