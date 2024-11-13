import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div>
        <div className="flexStart paddings innerWidth  footer-container">
          <div className="flexColStart footer-logo">
            <img src="./images/logo.png" alt="" />
            <h1 className="primaryText">Looking to Get Started?</h1>
            <p className="secondaryText">
              Ready to get started on your project? Contact us today and let us
              help you bring your ideas to life.
            </p>
          </div>
          <div className="flexColStart footer-menu">
            <h1 className="primaryText">Menu</h1>

            <Link to="/" className="secondaryText">
              <span>Home</span>
            </Link>

            <Link to="/about" className="secondaryText">
              <span>About us</span>
            </Link>
            <Link to="" className="secondaryText">
              <span>Case Study</span>
            </Link>
            <Link to="/blogs" className="secondaryText">
              <span>Blogs</span>
            </Link>
            <Link to="/app" className="secondaryText">
              <span>Career / Job Opening</span>
            </Link>
            <Link to="/policy" className="secondaryText">
              <span>Privacy Policy</span>
            </Link>
            <Link to="/term" className="secondaryText">
              <span>Term & Conditions</span>
            </Link>
          </div>
          <div className="flexColStart footer-services">
            <h1 className="primaryText">Services</h1>
            <Link to="" className="secondaryText">
              <span>Android App Development</span>
            </Link>
            <Link to="" className="secondaryText">
              <span>iOS App Development</span>
            </Link>
            <Link to="/web" className="secondaryText">
              <span>Web Design & Development</span>
            </Link>
            <Link to="" className="secondaryText">
              <span>Dashboard Design & Development</span>
            </Link>
            <Link to="" className="secondaryText">
              <span>Blockchain Development</span>
            </Link>
            <Link to="" className="secondaryText">
              <span>Artificial Intelligence</span>
            </Link>
          </div>
          <div className="flexColStart address">
            <h1 className="primaryText">Get In touch with us</h1>
            <div className="flexColStart">
              <span className="secondaryText">Phone: +91 134 123456</span>
              <span className="secondaryText">
                Email: info@Info@speedomasscommunication.com
              </span>
              <span className="secondaryText">
                Location: G 223 hub town near modhera circle Mahesana, India
              </span>
            </div>
            <div className="footer-icons">
              <a href="#">
                <i class="ri-facebook-fill secondaryText"></i>
              </a>
              <a href="#">
                <i class="ri-instagram-fill secondaryText"></i>
              </a>
              <a href="#">
                <i class="ri-linkedin-fill secondaryText"></i>
              </a>
              <a href="#">
                <i class="ri-twitter-x-fill secondaryText"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="SecondaryText footer-copyright">
          <p className="secondaryText">
            Copyright &copy; 2023 Speedmass | All Rights Reserved Designed By
            Aru Singh
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
