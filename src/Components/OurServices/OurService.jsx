import React from "react";
import Developments from "./Developments/Developments";
import EfficiencyFocus from "./EfficiencyFocus/EfficiencyFocus";
import Application from "../Home/Application/Application";
import Accordions from "./Accordions/Accordions";
import HeadingCenter from "../HeadingCenter/HeadingCenter";

const OurService = () => {
  return (
    <>
      <HeadingCenter heading={"Our Service"} />
      <Developments />
      <EfficiencyFocus />
      <Application />
      <Accordions />
    </>
  );
};

export default OurService;
