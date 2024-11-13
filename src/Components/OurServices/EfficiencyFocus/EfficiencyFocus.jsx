import React from "react";
import "./EfficiencyFocus.css";
import Simple1 from "./Simple1";

const EfficiencyFocus = () => {
  return (
    <section className="flexColStart paddings innerWidth effi-container">
      <h1>Tech & Efficiency Focus</h1>

      <div className="flexStart ">
        <div className="flexColStart effi-left">
          <Simple1
            icon={<i class="ri-reply-all-line"></i>}
            head={"Strategy & Business"}
            para={
              "We design business models and growth strategies to be effective and competitive."
            }
          />

          <Simple1
            icon={<i class="ri-product-hunt-line"></i>}
            head={"Product Development"}
            para={"Innovative product development for the modern age."}
          />

          <Simple1
            icon={<i class="ri-zoom-in-line"></i>}
            head={"Futures Research"}
            para={
              "Exploring the possibilities of tomorrow through Futures Research."
            }
          />
        </div>
        {/* right side */}
        <div className="effi-right">
          <img src="./images/dashboard-final 1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default EfficiencyFocus;
