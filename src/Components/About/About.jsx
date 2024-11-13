import React from "react";
import OurClient from "./OurClient/OurClient";
import Relating from "./Relating/Relating";
import Mission from "./Mission/Mission";
import NewsLetter from "./NewsLetter/NewsLetter";
import TeamMember from "./TeamMember/TeamMember";
import HeadingCenter from "../HeadingCenter/HeadingCenter";

const About = () => {
  return (
    <>
      <HeadingCenter heading={"About Us"} />
      <OurClient />
      <Relating />
      <Mission />
      <TeamMember />
      <NewsLetter />
    </>
  );
};

export default About;
