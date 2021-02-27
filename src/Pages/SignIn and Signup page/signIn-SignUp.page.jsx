import React, { useState } from "react";
import SignIn from "../../components/SignIn-and-SignUp/Sign-In/SignIn.component";
import SignUp from "../../components/SignIn-and-SignUp/Sign-up/signUp-component";
import "./signIn-signup.page.scss";
import Loader from "../../components/Loader/loader.component";

const SignIn_SignUp_Page = () => {
  const [loader, setLoader] = useState(false);
  const loading =(value)=>setLoader(value);
  return (
    <div className="SignIn-SignUp-container">
    {loader ? <Loader /> : null}
      <div className="signIn-signUp">
        <SignIn loading={loading} />
        <SignUp loading={loading} />
      </div>
    </div>
  );
};

export default SignIn_SignUp_Page;
