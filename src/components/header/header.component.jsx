import React from "react";
import "./header.styles.scss";
import { Link } from 'react-router-dom';
import { ReactComponent as LumaLogo } from "../../assests/LumaLogo.svg";
import { ReactComponent as SearchLogo } from "../../assests/searchLogo.svg";
import Navbar from "../navbar/navbar.component";

const Header = () => (
  <div className="header">
    <div className="header__panel">
      <div className='header_panel_container'>
        <span className="header__signinLink">
          <Link to="/signIn" className="link__signin">
            Sign In  
          </Link>
          <span> or </span> 
          <a href="/" className="link__signin">
             Create Account 
          </a>
        </span>
      </div>
    </div>

    <div className="header__wrapper">
      <Link to='/' className="logoContainer">
        <LumaLogo />
      </Link>
      <div className="serchbarContainer">
        <input type="text" placeholder="Search Products" className="serchBar" />
        <button className="btn">
          <SearchLogo className="seachIcon" />
        </button>
      </div>
    </div>
    <div className="navbar">
      <Navbar />
    </div>
  </div>
);
export default Header;
