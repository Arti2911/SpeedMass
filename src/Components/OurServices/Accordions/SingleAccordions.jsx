import React, { useState } from "react";

const SingleAccordions = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="main_heading">
        <p  onClick={() => setShow(!show)}>
          {show ? "➖" : "➕"}
        </p>
        <h3 className="primaryText">{props.text.questions}</h3>
      </section>
      {show && <p className=" secondaryText answer">{props.text.answer}</p>}
    </>
  );
};

export default SingleAccordions;
