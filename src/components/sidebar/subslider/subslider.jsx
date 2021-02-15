import React from "react";

const Collepse = ({ abc: { index, count, setCount } }) => {
  const array = count === index ? "abc" :  "";

  const ToggleClass = () => {
    if (array) {
      setCount(-1);
    } else {
      setCount(index);
    }
  };

  console.log(array, "array on index", index, "lenth", array.length);
  return (
    <div className="sidebar-collepse">
      <div className="sidebar-collepse-header" onClick={ToggleClass}>
        <span>STYLE</span>

        {array ? (
          <span className="sidebar-collepse-icon-down">
            <i className="fa fa-angle-up"></i>
          </span>
        ) : (
          <span className="sidebar-collepse-icon-down">
            <i className="fa fa-angle-down"></i>
          </span>
        )}
      </div>

      <ul className={`slider-collepse-dropdown ${array}`}>
        <li className="slider-collepse-dropdown-list">Base Layer 4 item</li>
        <li className="slider-collepse-dropdown-list">Basic 10 item</li>
        <li className="slider-collepse-dropdown-list">Compression 2 item</li>
        <li className="slider-collepse-dropdown-list">Snug 5</li>
      </ul>
    </div>
  );
};

export default Collepse;
