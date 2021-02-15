import React from "react";
import './sidebarComponent.style.scss';
const Collepse = ({ abc: { index, count, setCount } }) => {
  const toggleClass = count === index ? "abc" :  "";


  //console.log(toggleClass, "toggleClass on index", index, "lenth", toggleClasss.length);
  return (
    <div className="sidebar-collepse">
      <div className="sidebar-collepse-header" onClick={()=>(toggleClass)?setCount(-1): setCount(index)}>
        <span>STYLE</span>

        {toggleClass ? (
          <span className="sidebar-collepse-icon-down">
            <i className="fa fa-angle-up"></i>
          </span>
        ) : (
          <span className="sidebar-collepse-icon-down">
            <i className="fa fa-angle-down"></i>
          </span>
        )}
      </div>

      <ul className={`slider-collepse-dropdown ${toggleClass}`}>
        <li className="slider-collepse-dropdown-list">Base Layer 4 item</li>
        <li className="slider-collepse-dropdown-list">Basic 10 item</li>
        <li className="slider-collepse-dropdown-list">Compression 2 item</li>
        <li className="slider-collepse-dropdown-list">Snug 5</li>
      </ul>
    </div>
  );
};

export default Collepse;
