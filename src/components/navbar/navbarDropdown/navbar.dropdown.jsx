import React from "react";
import "./navbarDropdown.styles.scss";
import DropDownPanel from "../DropdownPanel/dropdownPanel.component";
import { NavLink } from 'react-router-dom';




const NavbarDropdown = ({ navItems }) =>
{

  return (
  <div className="dropdown">
    <div className="navItem">
      <NavLink activeClassName='drop-down-navlink' to={`${navItems.sectionLink}`} >{navItems.section}</NavLink>

      <ul className="dropdownPanel">
        {navItems.navItem
          ? navItems.navItem.map((item,index) => (
              <DropDownPanel key={index} item={item} />
            ))
          : null}
      </ul>
    </div>
  </div>
);
}
export default NavbarDropdown;
