import React from "react";
import './productColor.styles.scss';
const ProductColor = ({color})=>(
    <div
    className="color-box"
    style={{
      background: `${color}`,
    }}
  ></div>
);

export default ProductColor;