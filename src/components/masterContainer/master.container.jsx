import React from "react";
import './master.styles.scss';
import Slider from "../sidebar/sidebar.components";
const MasterContainer = ({children}) => {
  return (
    <div className="master-Container">
      
      <div className='sub-Container'>
      <div className="sideContainer"><Slider /> </div>
      <div className="mainContainer">{children}</div>
      </div>
    </div>
  );
};

export default MasterContainer;