import React from "react";
import "./custom-button.styles.scss";

const CustomButton = ({ className ,onClickHandle, children, ...props }) => (
  <button className={`${className}`} onClick={onClickHandle} {...props}>
    {children}
  </button>
);

export default CustomButton;
