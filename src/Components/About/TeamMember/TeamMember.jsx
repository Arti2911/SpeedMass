import React from "react";
import "./TeamMember.css";
import Single from "./Single";

const TeamMember = () => {
  return (
    <section className="paddings innerWidth Team-container">
      <h1 className="primaryText">Our Team Members </h1>
      <div className="flexStart team-outer">
       <div>
       <Single
          image={"./images/TeamMember.png"}
          lorem={"Lorem Ipsum"}
          desi={"Designation"}
        />
       </div>
        <Single
          image={"./images/TeamMember.png"}
          lorem={"Lorem Ipsum"}
          desi={"Designation"}
        />
        <Single
          image={"./images/TeamMember.png"}
          lorem={"Lorem Ipsum"}
          desi={"Designation"}
        />
      </div>
    </section>
  );
};

export default TeamMember;
