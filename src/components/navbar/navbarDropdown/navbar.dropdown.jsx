import React from "react";
import "./navbarDropdown.styles.scss";
import DropDownPanel from "../DropdownPanel/dropdownPanel.component";

const NavbarDropdown = ({ navItems }) => (
  <div className="dropdown">
    <div className="navItem">
      <span>{navItems.section}</span>

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
export default NavbarDropdown;
