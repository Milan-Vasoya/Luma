import React from "react";
import { NavLink } from "react-router-dom";
import "./dropdownPanel.component.scss";



const DropDownPanel = ({ item }) => {
  
  return (
    <li className="dropDownItems">
      <div className="subItemsContainer">
        <NavLink
          activeClassName="drop-down-navlink"
          className='nav-extend'
          to={`/catPage/${item.mainItemLink}`}
        
        >
          <span className="nav-extend">{item.mainItem}</span>
        </NavLink>

        <ul className="dropDown__subItems">
          {item.subItems
            ? item.subItems.map((subitem, index) => (
                <NavLink
                  to={`/catPage/${subitem.link}`}
                  activeClassName="drop-down-navlink"
                  className="sublist-items-navlinks"
                  key={index}
                >
                  <li className="dropDown__subItemsList">{subitem.name}</li>
                </NavLink>
              ))
            : null}
        </ul>
      </div>
    </li>
  );
};
export default DropDownPanel;
