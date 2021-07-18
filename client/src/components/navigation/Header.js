import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import golfBall from '../../images/golfball.png';
import "./_Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div className={click ? "header header-active" : "header"}>
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <Link to="/">
            <img src={golfBall} alt="golf-ball"></img>
          </Link>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="/" spy={true} smooth={true} duration={1000}>Home</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="/register" spy={true} smooth={true} duration={1000}>Register</Link>
          </li>
          <li className="option">
            <Link onClick={closeMobileMenu} activeClass="active" to="/attendees" spy={true} smooth={true} duration={1000}>Attendees</Link>
          </li>
        </ul>
      </div>
      <div>
      </div>
      <div className="header-mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default Header;