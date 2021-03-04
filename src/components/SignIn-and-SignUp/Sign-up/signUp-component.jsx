import React, { useEffect, useState } from "react";
import FormInput from "../../Custom-Component/Form-input/form-input.component";
import "./signUp.styles.scss";
import CustomButtom from "../../Custom-Component/button/custom-button.component";
import postData from "../../postData/Simple/postdata";
import TokenGenrator from "../tokenGenrator/tokenGenrator";
import { useDispatch, useSelector } from "react-redux";
import { signUpstart } from "../../../redux/customer/customer.action";
import { selectCustError } from "../../../redux/customer/customer.selector";

const url = "https://m241full.digitsoftsol.co/index.php/rest/V1/customers";

const SignUp = ({ loading }) => {
  const dispatch = useDispatch();

  const [userCredential, setUserCredential] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  const custError = useSelector(selectCustError);

  useEffect(() => {
    if(custError){
      loading(false);
      setUserCredential({...userCredential,error:custError.split('.')[0]})
    }
   
    
  }, [custError]);

 

  const {
    firstname,
    lastname,
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

    // console.log(userCredential);
    loading(true);

    const data = {
      customer: {
        firstname,
        lastname,
        email,
      },
      password,
    };

    dispatch(signUpstart(data));

    // postData(url, data)
    //   .then((res) =>
    //     TokenGenrator({ username: res.email, password }, dispatch).catch(
    //       (error) => {
    //         loading(false);
    //         setUserCredential({ ...userCredential, error });
    //       }
    //     )
    //   )
    //   .catch((error) => {
    //     loading(false);
    //     setUserCredential({ ...userCredential, error });
    //   });
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
          name="firstname"
          value={firstname}
          onChangeHandler={handleChange}
          label="First Name"
          required
        />

        <FormInput
          type="text"
          name="lastname"
          value={lastname}
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

        <CustomButtom className="custom-button">Sign Up</CustomButtom>
      </form>
    </div>
  );
};

export default SignUp;
