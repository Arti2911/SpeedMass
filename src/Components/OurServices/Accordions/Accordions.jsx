import React, { useState } from "react";
import "./Accordions.css";
import { Questions } from "./AccordionsData";
import SingleAccordions from "./SingleAccordions";

const Accordions = () => {
  const [data, setData] = useState(Questions);
  return (
    <section className="main_div">
      <h1 className="primaryText">Frequently asked questions</h1>
      <p className="secondaryText">
        We hope this section will help you better understand the issues related
        to software
      </p>
      <div>
        {data.map((item, i) => {
          return <SingleAccordions key={i} text={item} />;
        })}
      </div>
    </section>
  );
};

export default Accordions;
