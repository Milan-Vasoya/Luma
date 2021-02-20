import React from "react";
import "./navbar.styles.scss";
import NavbarDropdown from "./navbarDropdown/navbar.dropdown";

const navbarItems = [
  { section: "What's New", sectionLink: "/catPage/WhatsNew" },
  {
    section: "Women",
    sectionLink: "/catPage/Women",
    navItem: [
      {
        mainItem: "Tops",
        mainItemLink: "womenTops",
        subItems: [{name:"Jackets",link:"jacketForWomen"}, {name:"Hoodies & Sweatshirts",link:"HoodiesForWomen"}, {name:"Tees",link:"teesForWomen"}, {name:"Bars & Tanks",link:"tanksForWomen"}],
      },
      {
        mainItem: "Bottoms",
        mainItemLink: "womenBottoms",
        subItems: [{name:"Pants",link:"pentsForWomen"}, {name:"Shorts",link:"shortsForWomen"}],
      },
    ],
  },
  {
    section: "Men",
    sectionLink: "/catPage/Men",

    navItem: [
      {
        mainItem: "Tops",
        mainItemLink: "menTops",
        subItems: [{name:"Jackets",link:"jacketForMen"}, {name:"Hoodies & Sweatshirts",link:"HoodiesForMen"}, {name:"Tees",link:"teesForMen"}, {name:"Tanks",link:"tanksForMen"}],
      },
      {
        mainItem: "Bottoms",
        mainItemLink: "menBottoms",
        subItems: [{name:"Pants",link:"pentsForMen"}, {name:"Shorts",link:"shortsForMen"}],
      },
    ],
  },
  {
    section: "Gear",
    sectionLink: "/catPage/Gear",

    navItem: [
      {
        mainItem: "Bags",
        mainItemLink: "bags",
      },
      { mainItem: "Fitness Equipment", mainItemLink: "Equipment" },
      { mainItem: "Sale", mainItemLink: "saleOnGear" },
    ],
  },
  {
    section: "Training",
    sectionLink: "/Training",

    navItem: [
      {
        mainItem: "Video Download",
        mainItemLink: "downloadVideos",
      },
    ],
  },
  { section: "Sale", sectionLink: "/Sale" },
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
