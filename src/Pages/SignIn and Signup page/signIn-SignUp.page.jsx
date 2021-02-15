import React from "react";
import SignIn from "../../components/SignIn-and-SignUp/Sign-In/SignIn.component";
import SignUp from "../../components/SignIn-and-SignUp/Sign-up/signUp-component";
import './signIn-signup.page.scss';

const SignIn_SignUp_Page = ()=>(
   <div className='SignIn-SignUp-container'>
   <div className='signIn-signUp'>
   
   <SignIn />
    <SignUp/>

   </div>
   
   </div>
);

export default SignIn_SignUp_Page;