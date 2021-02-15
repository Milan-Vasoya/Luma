import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, onChangeHandler, ...props }) => (
  <div className="group">
    <input className='form-input' onChange={onChangeHandler} {...props} />
    {label ? (
      <label
        className={`${props.value.length ? "shrink" : ""} form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;