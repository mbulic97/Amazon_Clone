import {React, useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login"
import { auth } from './firebase';
import { useAuth } from './context/GlobalState';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';

const App = () => {
  const {dispatch} = useAuth();
  const stripePromise =loadStripe(
    "pk_test_51QVKBKKgyXoRPHBY5YY9ifVf5FenU8Yb0ikZIjwAbfV29dTaYU62QZ7UYo78roLrv9lxFUuBgT9wj2Ivz54BJipa00Q9Dnnzxy"
  );
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:"SET_USER",
          user:authUser,
        });
      }
      else{
        dispatch({
          type:"SET_USER",
          user:null,
        });
      }
    })
  },[]);
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Home/>
          </>
        }
        />
        <Route path='checkout'element={
          <>
            <Header/>
            <Checkout/>
          </>
        }
          />
        <Route
         path='/payment'
        element= {
        <>
        <Header/>
        <Elements stripe={stripePromise}>
        <Payment/>
        </Elements>
        </>
        }
        />
        <Route path='/orders' element={
          <>
          <Header/>
          <Orders/>
          </>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App