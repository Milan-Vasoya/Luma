import React from "react";
import './master.styles.scss';
const MasterContainer = ({children}) => {
  return (
    <div className="master-Container">
      
      <div className='sub-Container'>
      <div className="sideContainer"></div>
      <div className="mainContainer">{children}</div>
      </div>
    </div>
  );
};

export default MasterContainer;