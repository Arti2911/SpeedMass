import React from "react";
import "./CareerOpening.css";

const SingleCareerOpening = (props) => {
  return (
    <div className=" r-cont">
      <h1 className="primaryText">{props.head}</h1>

      <div className="flexColStart">
        <span className="secondaryText">{props.seco}</span>
        <span className="primaryText">{props.yrs}</span>
      </div>
      <div className="flexColStart">
        <span className="secondaryText">{props.deadline}</span>
        <span className="primaryText">{props.date}</span>
      </div>
      <span>{props.icon}</span>
    </div>

    // <table>
    //   <thead>
    //     <tr>
    //       <th>
    //         <h1 className="primaryText">{props.head}</h1>
    //       </th>
    //       <th>
    //         <div className="flexColStart">
    //           <span className="secondaryText">{props.seco}</span>
    //           <span className="primaryText">{props.yrs}</span>
    //         </div>
    //       </th>
    //       <th>
    //         <div className="flexColStart">
    //           <span className="secondaryText">{props.deadline}</span>
    //           <span className="primaryText">{props.date}</span>
    //         </div>
    //       </th>
    //       <th>
    //         <span>{props.icon}</span>
    //       </th>
    //     </tr>
    //   </thead>
    // </table>
    // <div className="w-full flex justify-between  gap-16">
    //   <div className="flex gap-4 flex-col">
    //     <h2>Wordpress Developer</h2>
    //     <h2>Javascript</h2>
    //     <h2>App Developer</h2>
    //     <h2>Node JS Developer</h2>
    //   </div>
    //   <div className="flex gap-4 flex-col">
    //     <div className="">
    //       <span>Experience</span>
    //       <h4>2 Years</h4>
    //     </div>
    //     <div>
    //       <span>Experience</span>
    //       <h4>2 Years</h4>
    //     </div>
    //     <div>
    //       <span>Experience</span>
    //       <h4>2 Years</h4>
    //     </div>
    //     <div>
    //       <span>Experience</span>
    //       <h4>2 Years</h4>
    //     </div>
    //   </div>
    //   <div className="flex gap-4 flex-col">
    //     <div className=" gap-4">
    //       <span>Deadline</span>
    //       <h4>30 Dec, 2023</h4>
    //     </div>
    //     <div>
    //       <span>Deadline</span>
    //       <h4>30 Dec, 2023</h4>
    //     </div>
    //     <div>
    //       <span>Deadline</span>
    //       <h4>30 Dec, 2023</h4>
    //     </div>
    //     <div>
    //       <span>Deadline</span>
    //       <h4>30 Dec, 2023</h4>
    //     </div>
    //   </div>
    //   <div className="flex gap-4 flex-col">
    //     <span>Arrow</span>
    //     <span>Arrow</span>
    //     <span>Arrow</span>
    //     <span>Arrow</span>
    //   </div>
    // </div>
  );
};

export default SingleCareerOpening;
