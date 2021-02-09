import React from "react";
import "./header.styles.scss";
import { ReactComponent as LumaLogo } from "../../assests/LumaLogo.svg";
import { ReactComponent as SearchLogo } from "../../assests/searchLogo.svg";
import Navbar from "../navbar/navbar.component";

const Header = () => (
  <div className="header">
    <div className="header__panel"></div>

    <div className="header__wrapper">
      <div className="logoContainer">
        <LumaLogo />
      </div>
      <div className='serchbarContainer'>
   
     <input type='text' placeholder='Search Products' className='serchBar' />
     <button className="btn"><SearchLogo className='seachIcon' /></button>

      </div>
    </div>
 <div className='navbar' >
      <Navbar />
 </div>
  </div>
);
export default Header;
