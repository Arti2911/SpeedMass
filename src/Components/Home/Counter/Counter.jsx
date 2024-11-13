import React from "react";

import CountUp from "react-countup";

const Counter = () => {
  return (
    <>
      <section className="wrapper">
        <div className="flexCenter paddings innerWidth count-container">
          <div className="flexStart paddings">
            <span>
              <i class="ri-chat-heart-line primaryText text-5xl"></i>
            </span>
            <span className="flexColStart">
              <CountUp
                className="primaryText"
                start={2010}
                end={2013}
                duration={4}
              />
              <span>Founded Years</span>
            </span>
          </div>
          <div className="flexStart paddings">
            <span>
              <i class="ri-group-line primaryText text-5xl"></i>
            </span>
            <span className="flexColStart">
              <span>
                <CountUp
                  className="primaryText"
                  start={10}
                  end={50}
                  duration={4}
                />
                <span>
                  <i class="ri-add-fill primaryText primaryText text-xl"></i>
                </span>
              </span>
              <span>Team Member</span>
            </span>
          </div>
          <div className="flexStart paddings">
            <span>
              <i class="ri-user-follow-line primaryText text-5xl"></i>
            </span>
            <span className="flexColStart">
              <span>
                <CountUp
                  className="primaryText"
                  start={410}
                  end={550}
                  duration={4}
                />
                <span>
                  <i class="ri-add-fill primaryText primaryText text-xl"></i>
                </span>
              </span>
              <span>Happy Customers</span>
            </span>
          </div>
          <div className="flexStart paddings">
            <span>
              <i class="ri-user-follow-line primaryText text-5xl"></i>
              <i class="ri-projector-fill primaryText text-5xl"></i>
            </span>
            <span className="flexColStart">
              <span>
                <CountUp
                  className="primaryText"
                  start={410}
                  end={500}
                  duration={4}
                />
                <span>
                  <i class="ri-add-fill primaryText primaryText text-xl"></i>
                </span>
              </span>
              <span>Successful Projects</span>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
