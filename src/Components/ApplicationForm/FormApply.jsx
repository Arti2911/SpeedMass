import React from "react";
import "./FormApply.css";

const FormApply = () => {
  return (
    <section className="flexStart paddings innerWidth app-container">
      {/* left side */}
      <div className="app-left">
        <img src="./images/Forms-amico 1.png" alt="" />
      </div>
      {/* right side */}
      <div className="app-right">
        <div className="flexStart">
          <div>
            <label htmlFor="n">First Name</label>
            <input type="text" name="" id="n" />
          </div>
          <div>
            <label htmlFor="l">Last Name</label>
            <input type="text" name="" id="l" />
          </div>
        </div>

        <div className="flexStart">
          <div>
            <label htmlFor="e">Email</label>
            <input type="email" name="" id="e" />
          </div>
          <div>
            <label htmlFor="nu">Phone Number</label>
            <input type="text" name="" id="nu" placeholder="+91 XXX XXX XXXX" />
          </div>
        </div>

        <div className="flexStart">
          <div className="flexColStart">
            <label htmlFor="p">Applied Position </label>
            <select name="" id="p">
              <option value="">SELECT</option>
              <option value="">Web Development</option>
              <option value="">App Development</option>
              <option value="">Web Design</option>
              <option value="">Analytic</option>
              <option value="">Artificial Intelligence</option>
            </select>
          </div>
          <div>
            <label htmlFor="nu">Preffered Interview Date</label>
            <input type="date" name="" id="nu" placeholder="DD-MM-YYYY" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormApply;
