import React, { useState } from "react";
import "./signIn.styles.scss";
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import CustomButton from "../../Custom-Component/button/custom-button.component";
import { useDispatch } from "react-redux";
import TokenGenrator from "../tokenGenrator/tokenGenrator";

const SignIn = ({ loading }) => {
  const dispatch = useDispatch();

  const [userCredential, setUserCredential] = useState({
    email: "",
    password: "",
    error: "",
  });

  const { email, password, error } = userCredential;

  const handleSubmit = (e) => {
    e.preventDefault();
    loading(true);

    const data = {
      username: email,
      password,
    };

    TokenGenrator(data, dispatch).catch((error) => {
      loading(false);
      setUserCredential({ ...userCredential, error });
    });
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserCredential({ ...userCredential, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have an account</h2>
      <span className="title">Sign in with your email and password</span>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
           
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
