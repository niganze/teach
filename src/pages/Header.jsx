import React from "react";
import { Link } from 'react-router-dom'
import "../css/Header.css";
function Header() {
  return (
    <div>
      <div className="nav_container">
        <div className="logo">ALAIN GN </div>
        <div className="links">
          <a href="#home">HOME</a>
          <a href="#service">SERVICE</a>
          <a href="#about">ABOUT</a>
          <a href="#project">PROJECTS</a>
          <a href="#contact">CONTACT</a>
          <a href="#blog">BLOG</a>
          <Link to='./login'>LOGIN</Link>
          <a href="#pages">SIGN UP</a>
        </div>
      </div>
    </div>
  );
}
export default Header;
