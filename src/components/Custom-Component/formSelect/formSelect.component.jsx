import React from "react";
import "./formSelect.styles.scss";

const FormSelect = ({ label, onChangeHandler,children, ...props }) => (
  <div className="group">
    <select className='form-select' onChange={onChangeHandler}  {...props} >   <option>{label}</option> {children}</select>
    
  </div>
);

export default FormSelect;