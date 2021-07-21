import React, { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import golfBall from '../../images/golfball.png';
import "./_Header.scss";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  let location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
  }, [location])

  let headerOptions;
  if (location.pathname === '/') {
    headerOptions = (
      <>
        <li className="option active-page">
          <Link onClick={closeMobileMenu} to="/" duration={1000}>Home</Link>
        </li>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/register" duration={1000}>Register</Link>
        </li>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/attendees" duration={1000}>Attendees</Link>
        </li>
      </>
    )
  } else if (location.pathname === '/register') {
    headerOptions = (
      <>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/" duration={1000}>Home</Link>
        </li>
        <li className="option active-page">
          <Link onClick={closeMobileMenu} to="/register" duration={1000}>Register</Link>
        </li>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/attendees" duration={1000}>Attendees</Link>
        </li>
      </>
    )
  } else {
    headerOptions = (
      <>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/" duration={1000}>Home</Link>
        </li>
        <li className="option">
          <Link onClick={closeMobileMenu} to="/register" duration={1000}>Register</Link>
        </li>
        <li className="option active-page">
          <Link onClick={closeMobileMenu} to="/attendees" duration={1000}>Attendees</Link>
        </li>
      </>
    )
  }

  return (
    <div className={click ? "header header-active" : "header"}>
      <div className="header-logo-nav">
        <div className="header-logo-container">
          <Link to="/">
            <img src={golfBall} alt="golf-ball"></img>
          </Link>
        </div>
        <ul className={click ? "header-nav-options active" : "header-nav-options"}>
          {headerOptions}
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