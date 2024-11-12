import React, { useState, useEffect } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import {  NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Link,animateScroll } from "react-scroll";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolled(true);
    } else {
      setScrolled(false);  
    }
  };

  const handleClick = () => {
    setClicked(prevClicked => !prevClicked);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`NavbarItems ${scrolled ? "scrolled" : ""}`}>
      <div className="navhead">
        <div
          className="navhead"
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <NavLink to={"/"}>
            <img className="logoimg"
              src={Logo}
              alt="img_1"
            />
          </NavLink>
          <NavLink to={"/"} style={{textDecoration:"none"}}>
          <h1 className="navbar-logo" style={{ margin: "auto" }}>
            Sorted Trips
          </h1>
          </NavLink>  
        </div>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
          {item.url.startsWith("#") ? (
            <Link 
        className={item.cName} to={item.url.substring(1)}
        spy={true}
        smooth={true}
        offset={-70}
        duration={300}
        >
              <i className={item.icon}></i>
             <span> {item.title}</span>
            </Link>
          ):(
           <Link classID={item.cName} to={item.url} >
           <i className={item.icon}></i>
           <span> {item.title}</span>
           </Link>
          )}
          </li>
        ))}
        <button>
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
