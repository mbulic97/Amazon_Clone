import React from 'react';
import Logo from "../images/logo.png";
import {Link} from "react-router-dom";
import "./Login.css"
export const Login = () => {
  return (
    <div className='login'>
      <Link to="/">
        <img className='header-logo' src={Logo} alt="logo-img"/>
      </Link>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input type="password" value=""/>
          <button className='login-signInBtn' type="submit">
            Sign in
          </button>
          <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use
          and Privacy Notice.
          </p>
          <button className='login-registerBtn'>
            Create your Amazon Account
          </button>
        </form>
      </div>
      
    </div>
  )
}
export default Login;