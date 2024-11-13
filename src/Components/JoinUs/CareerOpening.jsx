import React from "react";
import "./CareerOpening.css";
import SingleCareerOpening from "./SingleCareerOpening";

const CareerOpening = () => {
  return (
    <section className="flexColCenter paddings innerWidth opening-container">
      <span className="orangeText">Come join us</span>
      <h1 className="primaryText">Career Openings</h1>
      <p className="secondaryText text-center">
        We’re always looking for creative, talented self-starters to join the
        Speedomass <br /> family. Check out our open roles below and fill out an
        application.
      </p>
      <div className="flexStart main-opening">
        {/* left side */}
        <div className="flexColStart primaryText left-opening">
          <span>HT & Admin</span>
          <span>Engineering (20)</span>
          <span>Support</span>
          <span>DEsign</span>
          <span>Digital Marketing</span>
        </div>
        {/* right side */}
        <div className="flexColStart right-side">
          <SingleCareerOpening
            head={"Wordpress Developer"}
            seco={"Experience"}
            yrs={"2 Years"}
            deadline={"Deadline"}
            date={"30 Dec, 2023"}
            icon={<i class="ri-arrow-right-line secondaryText"></i>}
          />
          <SingleCareerOpening
            head={"JavaScript"}
            seco={"Experience"}
            yrs={"2 Years"}
            deadline={"Deadline"}
            date={"30 Dec, 2023"}
            icon={<i class="ri-arrow-right-line secondaryText"></i>}
          />
          <SingleCareerOpening
            head={"App Developer"}
            seco={"Experience"}
            yrs={"2 Years"}
            deadline={"Deadline"}
            date={"30 Dec, 2023"}
            icon={<i class="ri-arrow-right-line secondaryText"></i>}
          />
          <SingleCareerOpening
            head={"Node Js Developer"}
            seco={"Experience"}
            yrs={"2 Years"}
            deadline={"Deadline"}
            date={"30 Dec, 2023"}
            icon={<i class="ri-arrow-right-line secondaryText"></i>}
          />
        </div>
      </div>
    </section>
  );
};

export default CareerOpening;
