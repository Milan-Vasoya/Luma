import React, { useState } from "react";
import "./signIn.styles.scss";
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import postData from "../../postData/Simple/postdata";
import { useDispatch } from 'react-redux';
import { setCustomerToken } from "../../../redux/customer/customer.action";

const url =
  "https://m241full.digitsoftsol.co/index.php/rest/V1/integration/customer/token";

const SignIn = () => {
  const dispatch = useDispatch();

  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredential;

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userCredential);
    // emailSignInStart(email, password);

    const data = {
      username: email,
      password,
    };
    
    postData(url, data)
      .then((token) => dispatch(setCustomerToken(token)))
      .catch((e) => console.log(e));
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
          <CustomButton className="custom-button" type="submit">
            Sign In
          </CustomButton>
          <CustomButton
            className="google-sign-in custom-button"
            type="button"
            onClick={() => alert("Google sign In")}
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
