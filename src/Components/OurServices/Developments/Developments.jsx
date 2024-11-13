import React from "react";
import "./Developments.css";
import SingleComp from "./SingleComp";

const Developments = () => {
  return (
    <section className="flexstart paddings innerWidth dev-container">
      <div className="flexStart multi-comp">
        <SingleComp
          icon={<i class="ri-smartphone-line"></i>}
          content={"Mobile App"}
          boldd={"Development"}
          para={
            " Crafting seamless experiences that reside in your users' pockets. Our mobile app development team breathes life into your ideas, ensuring user-friendly interfaces and cutting-edge functionality. Elevate your brand with apps that captivate and convert."
          }
        />
        <SingleComp
          icon={<i class="ri-html5-line"></i>}
          content={"Web"}
          boldd={"Development"}
          para={
            " Empower your brand online. Our web development wizards turn ideas into visually stunning websites, from elegant portfolios to robust e-commerce platforms. Transform your vision into a captivating online presence"
          }
        />
        <SingleComp
          icon={<i class="ri-send-backward"></i>}
          content={"Backend"}
          boldd={"Development"}
          para={
            " In the digital landscape, we guide your brand to new heights. Tailored strategies amplify your voice, engage your audience, and drive conversions. From SEO to PPC campaigns, we boost your online visibilit"
          }
        />
      </div>

      <div className="flexStart multi-comp">
        <SingleComp
          icon={<i class="ri-dashboard-line"></i>}
          content={"Dashboard"}
          boldd={"Designing"}
          para={
            " We pioneers intuitive dashboard designs, transforming complex data into actionable insights. Elevate your user experience with our precision-crafted dashboard solutions."
          }
        />
        <SingleComp
          icon={<i class="ri-command-fill"></i>}
          content={"Artificial"}
          boldd={"Intelligence"}
          para={
            " the potential of Artificial Intelligence to transform your business. From machine learning algorithms to predictive analytics, we deliver AI solutions that propel your operations into the future."
          }
        />
        <SingleComp
          icon={<i class="ri-code-block"></i>}
          content={"Blockchain"}
          boldd={"Development"}
          para={
            " Explore the possibilities of decentralized technology with Our blockchain deve-lopment services ensure secure & transparent transactions, bringing innovation & trust to your digital ventures."
          }
        />
      </div>
    </section>
  );
};

export default Developments;
