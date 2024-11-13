import "./Navbar.css";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
    console.log("hello");
    // console.log("hii");
  };

  return (
    <section className="n-wrapper">
      <div className="flexCenter paddings innerWidth n-container ">
        <img src="./images/logo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(menuOpened);
            // console.log("hiii");
          }}
        >
          <div
            className="flexCenter n-menu "
            style={{ right: menuOpened ? "-200px" : "-200px" }}
          >
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/services" onClick={toggleMenu}>
              Services
            </Link>
            <Link to="/web" onClick={toggleMenu}>
              Case Studies
            </Link>
            <a href="#" onClick={toggleMenu}>
              Portfolio
            </a>
            <Link to="/contact" onClick={toggleMenu}>
              Contact Us
            </Link>
            <button className="button">
              <a href="/join">Join us</a>
            </button>
          </div>
        </OutsideClickHandler>
        <button className="menu-icon" onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </button>
      </div>
    </section>
  );
};

export default Navbar;
// export default Navbar;
