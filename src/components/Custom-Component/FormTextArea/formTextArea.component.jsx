import React from "react";
import "./formTextare.component.scss";

const FormArea = ({ label, onChangeHandler, ...props }) => (
  <div className="group">
    <textarea className='form-area' onChange={onChangeHandler}  {...props} />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-area-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormArea;