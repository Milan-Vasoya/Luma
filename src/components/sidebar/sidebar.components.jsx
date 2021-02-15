import React, { useState } from "react";
import "./sidebar.component.scss";
import Collepse from "./sidebar-component/sidebar.component";

const Array = [1, 2, 3, 4, 5];
const Sidebar = () => {
  const [count, setCount] = useState(-1);

  

 
  return (
    <div className="sidebar">
      <div className="sidebar-shopping-options">
        <strong>Shopping Options</strong>
      </div>

      {Array.map((item, index) => (
        <Collepse key={item} abc={{ index, count, setCount }} />
      ))}
    </div>
  );
};

export default Sidebar;
