import React, { useState } from "react";
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import "./signUp.styles.scss";
import CustomButtom from "../../Custom-Component/button/custom-button.component";

const SignUp = ({ signUpStart }) => {
  const [userCredential, setUserCredential] = useState({
    fname: "",
    lname:"",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const {
    fname,
    lname,
    email,
    password,
    confirmPassword,
    error,
  } = userCredential;

  const formSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      const error = "Password and Confirm-password Doesn't Match";
      setUserCredential({ ...userCredential, error: error });
      return;
    }
    
   alert('clicked')
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredential(() => ({ ...userCredential, [name]: value }));

  

  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={formSubmit}>
        <FormInput
          type="text"
          name="fname"
          value={fname}
          onChangeHandler={handleChange}
          label="First Name"
          required
        />
        
        <FormInput
        type="text"
        name="lname"
        value={lname}
        onChangeHandler={handleChange}
        label="Last Name"
        required
      />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChangeHandler={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChangeHandler={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChangeHandler={handleChange}
          label="Confirm Password"
          required
        />

        <CustomButtom className="custom-button" onClickHandle={()=>console.log(userCredential)} >Sign Up</CustomButtom>
      </form>
    </div>
  );
};

export default SignUp;
