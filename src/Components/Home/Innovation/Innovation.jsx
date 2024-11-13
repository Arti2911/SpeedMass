import React from "react";
import "./Innovation.css";

const Innovation = () => {
  return (
    <section className="inn-wrapper">
      <div className="flexStart paddings innerWidth inn-container">
        {/* left side */}
        <div className="inn-left">
          <h1>Unleash Innovation: Let's Build Together!</h1>
          <p className="secondaryText">
            Welcome to the dynamic realm of SpeedoMass, where innovation is not
            just a goal but a way of life. At SpeedoMass, we extend a heartfelt
            invitation to embark on an exhilarating journey of creativity and
            collaboration. Together, let's build something truly remarkable. Our
            passion lies in transforming your visionary ideas into tangible
            realities, be it groundbreaking mobile apps, dynamic websites, or a
            revolutionized digital presence.
          </p>
          <p className="secondaryText">
            Through collaborative excellence, our team of skilled professionals,
            each an expert in their field, forms a synergy that transforms
            concepts into tangible solutions, pushing the boundaries of what's
            possible.
          </p>
        </div>
        {/* right side */}
        <div className="inn-right">
          <img src="./images/software-right 1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Innovation;
