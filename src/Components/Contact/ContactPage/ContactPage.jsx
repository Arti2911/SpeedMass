import React from "react";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <section className="contact-wrapper">
      <div className="flexStart paddings innerWidth contact-container">
        {/* left side */}
        <div className="contact-left">
          <h1>Contact Information</h1>
          <div className="info">
            <i class="ri-phone-fill"></i>
            <span>+91 134 123456</span>
          </div>
          <div className="info">
            <i class="ri-mail-unread-fill"></i>
            <span>Info@speedomasscommunication.com</span>
          </div>
          <div className="info">
            <i class="ri-map-pin-fill"></i>
            <span>G 223 hub town near modhera circle Mahesana, India</span>
          </div>
          <div className="contact-links">
            <i class="ri-facebook-fill"></i>
            <i class="ri-instagram-line"></i>
            <i class="ri-linkedin-fill"></i>
            <i class="ri-twitter-x-fill"></i>
          </div>
        </div>
        {/* right side */}
        <div className="contact-right">
          <div className="flexStart inputs">
            <div className="s-input">
              <label htmlFor="fname">First Name</label>
              <input type="text" name="" id="fname" />
            </div>
            <div className="s-input">
              <label htmlFor="lname">Last Name</label>
              <input type="text" name="" id="lname" />
            </div>
          </div>

          <div className="flexStart inputs">
            <div className="s-input">
              <label htmlFor="email">Email</label>
              <input type="email" name="" id="email" />
            </div>
            <div className="s-input">
              <label htmlFor="num">Phone Number</label>
              <input
                type="text"
                name=""
                id="num"
                placeholder="+91 XXX XXX XXXX"
              />
            </div>
          </div>
          <div className="flexStart inputs">
            <div className="s-input">
              <label htmlFor="country">Country Of Residence</label>
              <select name="" id="country">
                <option value="">--select your country</option>
                <option value="">India</option>
                <option value="">China</option>
                <option value="">pakistan</option>
                <option value="">afganistan</option>
                <option value="">shrilanka</option>
              </select>
            </div>
          </div>

          <div className="flexStart inputs">
            <div className="s-input">
              <label htmlFor="country">Select Subject?</label>
              <div className="flexStart">
                <span className="flexStart">
                  <input type="radio" name="g" id="" />
                  General Inquiry
                </span>
                <span className="flexStart">
                  <input type="radio" name="g" id="" />
                  General Inquiry
                </span>
                <span className="flexStart">
                  <input type="radio" name="g" id="" />
                  General Inquiry
                </span>
              </div>
            </div>
          </div>

          <div className="flexStart inputs">
            <div className="s-input">
              <label htmlFor="msg">Message</label>
              <textarea
                name=""
                id="msg"
                cols="50"
                rows="1"
                placeholder="Write Your Message..."
              ></textarea>
            </div>
          </div>
          <button className="inputs button">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
