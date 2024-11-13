import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth f-container">
        <form action="">
          <input type="text" name="" id="" placeholder="Enter Your Name" />
          <div className=" Select">
            <label htmlFor="">Country Of Residence</label>
            <select name="" id="">
              <option value="">select your country</option>
              <option value="india">India</option>
              <option value="china">China</option>
            </select>
          </div>
          <span>
            <input type="email" name="" id="" placeholder="Email" />
            <input type="number" name="" id="" placeholder="Phone" />
          </span>
          <div className=" Select">
            <label htmlFor="">Service Required</label>
            <select name="" id="">
              <option value="">Choose an option</option>
              <option value="adhar card">Adhar Card</option>
              <option value="10th marksheet">10th Marksheet</option>
              <option value="12th marksheet">12th Marksheet</option>
              <option value="income certificate">Income Certificate</option>
              <option value="caste certificate">Cast Cetificate</option>
            </select>
          </div>
          <textarea
            name=""
            id="textarea"
            cols="30"
            rows="3"
            placeholder="Type your Requirements Here"
          ></textarea>
          <br />
          <button className="button innerWidth btn1">Request A Quote</button>
        </form>
      </div>
    </section>
  );
};

export default Form;
