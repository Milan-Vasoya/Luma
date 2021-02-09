
import React from "react";

const DropDownPanel= ({item})=>(
    <li className="dropDownItems">
    <div className='subItemsContainer'>
    <span>{item.mainItem}</span>

    <ul className="dropDown__subItems">
      
     {
         item.subItems?(item.subItems.map((subitem,index)=><li className="dropDown__subItemsList" key={index}>{subitem}</li>)):null

     }
    </ul>
    </div>
   </li>
);

export default DropDownPanel;                 