import React from "react";
import "./ResponsiveDevice.css";

const ResponsiveDevice = () => {
  return (
    <section className="flexColStart paddings innerWidth device-container">
      <div className="flexStart respo">
        <div>
          <span style={{ backgroundColor: "blue" }}>1</span>
          <span className="primaryText">Fully Responsive</span>
        </div>
        <div>
          <span style={{ backgroundColor: "red" }}>2</span>
          <span className="primaryText">Device Testing</span>
        </div>
        <div>
          <span style={{ backgroundColor: "blue" }}>3</span>
          <span className="primaryText">Clean & Modern</span>
        </div>
        <div>
          <span style={{ backgroundColor: "orange" }}>4</span>
          <span className="primaryText">Great Experience</span>
        </div>
      </div>
      <div className="challenges">
        <h1 style={{ color: "#fff" }}>
          Challenges into Opportunities with Our Expertise
        </h1>
        <p className="secondaryText">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500sLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s
        </p>
      </div>
    </section>
  );
};

export default ResponsiveDevice;
