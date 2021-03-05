import React from "react";
import "./productColor.styles.scss";

const ProductColor = ({
  color,
  variationSetter,
  activeSetter: { active, setActive },
}) => {
 
  return (
    <div
      className={`color-box ${active.color === color ? "select" : null} `}
      onClick={() => {
        variationSetter("color", color);
        setActive({ ...active, "color": color });
      }}
      style={{
        background: `${color}`,
      }}
    ></div>
  );
};

export default ProductColor;
