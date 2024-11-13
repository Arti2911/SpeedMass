import React from "react";
import "./PartnerWithUs.css";

function PartnerWithUs() {
  return (
    <section className="flexStart paddings innerWidth partner-container">
      {/* left side */}
      <div className="partner-left">
        <img src="./images/Static assets-bro 1.png" alt="" />
      </div>
      {/* right-side */}
      <div className="partner-right">
        <span className="primaryText">
          Partner with Us for Your Next Web Development Project
        </span>
        <p className="secondaryText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
        <p className="secondaryText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
      </div>
    </section>
  );
}

export default PartnerWithUs;
