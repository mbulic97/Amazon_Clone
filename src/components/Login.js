import React, { useState } from 'react';
import Logo from "../images/logo.png";
import {Link} from "react-router-dom";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import "./Login.css"
import { useAuth } from '../context/GlobalState';
export const Login = () => {
  const {user} = useAuth();
  const [email,setEmail] = useState("")
  const [password, setPassword] = useState("")
  const register = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password);
  };
  console.log(user);
  return (
    <div className='login'>
      <Link to="/">
        <img className='header-logo' src={Logo} alt="logo-img"/>
      </Link>
      <div className='login-container'>
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input 
          type='email'
          value={email}
          onChange={(e)=> setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password"
          value={password}
           onChange={(e)=> setPassword(e.target.value)}/>
          <button className='login-signInBtn' type="submit">
            Sign in
          </button>
          <p>
          By continuing, you agree to Amazon's Fake Clone Conditions of Use
          and Privacy Notice.
          </p>
          <button className='login-registerBtn' onClick={register}>
            Create your Amazon Account
          </button>
        </form>
      </div>
      
    </div>
  )
}
export default Login;