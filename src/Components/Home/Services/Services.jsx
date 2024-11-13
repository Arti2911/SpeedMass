import React from "react";
import "./Services.css";
import SingleComp from "./SingleComp";

const Services = () => {
  return (
    <section className="service-wrapper">
      <div className=" paddings innerWidth ">
        <h1 className="primaryText">Services</h1>
        <div className="flexStart paddings service-container">
          <div className="flexColStart paddings top mr-4">
            <SingleComp
              icon={<i class="ri-smartphone-line"></i>}
              heading={"Mobile App"}
              headingSpan={"Development"}
              para={
                "Crafting seamless experiences that reside in your users' pockets. Our mobile app development team breathes life into your ideas, ensuring user-friendly interfaces and cutting-edge functionality. Elevate your brand with apps that captivate and convert"
              }
            />
          </div>
          <div className="flexColStart paddings top mr-4">
            <SingleComp
              icon={<i class="ri-pages-line"></i>}
              heading={"Website"}
              headingSpan={"Development"}
              para={
                "Empower your brand online. Our web development wizards turn ideas into visually stunning websites, from elegant portfolios to robust e-commerce platforms. Transform your vision into a captivating online presence"
              }
            />
          </div>
          <div className="flexColStart paddings top">
            <SingleComp
              icon={<i class="ri-megaphone-line"></i>}
              heading={"Digital"}
              headingSpan={"Marketing"}
              para={
                "In the digital landscape, we guide your brand to new heights. Tailored strategies amplify your voice, engage your audience, and drive conversions. From SEO to PPC campaigns, we boost your online visibilit"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
