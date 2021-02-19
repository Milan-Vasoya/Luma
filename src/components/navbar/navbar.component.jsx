import React from "react";
import "./navbar.styles.scss";
import NavbarDropdown from "./navbarDropdown/navbar.dropdown";

const navbarItems = [
  { section: "What's New" },
  {
    section: "Women",
    navItem: [
      {
        mainItem: "Tops",
        subItems: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Bars & Tanks"],
      },
      {
        mainItem: "Bottoms",
        subItems: ["Pants", "Shorts"],
      },
    ],
  },
  {
    section: "Men",
    navItem: [
      {
        mainItem: "Tops",
        subItems: ["Jackets", "Hoodies & Sweatshirts", "Tees", "Tanks"],
      },
      {
        mainItem: "Bottoms",
        subItems: ["Pants", "Shorts"],
      },
    ],
  },
  {
    section: "Gear",
    navItem: [
      {
        mainItem: "Bags",
      },
      { mainItem: "Fitness Equipment" },
      { mainItem: "Sale" },
    ],
  },
  {
    section: "Training",
    navItem: [
      {
        mainItem: "Video Download",
      },
    ],
  },
  { section: "Sale" },
];



const Navbar = () => (
  <div className="navbarContainer">
    <div className="navbar">
      <div className="navbar__TextContainer">
        {navbarItems.map((navItems) => (
          <NavbarDropdown key={navItems.section} navItems={navItems} />
        ))}
      </div>
    </div>
  </div>
);
export default Navbar;
