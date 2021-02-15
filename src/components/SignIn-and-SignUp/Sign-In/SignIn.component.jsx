import React, { useState } from "react";
import './signIn.styles.scss';
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import CustomButton from "../../Custom-Component/button/custom-button.component";


const SignIn = () => {
  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredential;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(userCredential)
    //  emailSignInStart(email, password);
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChangeHandler={inputChangeHandler}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChangeHandler={inputChangeHandler}
          label="Password"
          required
        />
        <div className="buttons-div">
          <CustomButton  className="custom-button" onClickHandle={()=>alert('signIn clicked')} type="submit"
      
          >
            Sign In
          </CustomButton>
          <CustomButton
            className="google-sign-in custom-button"
            type="button"
            onClick={()=>alert('clicked')}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};



export default SignIn;
