import {React, useEffect} from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login"
import { auth } from './firebase';
import { useAuth } from './context/GlobalState';
const App = () => {
  const {dispatch} = useAuth();
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
        <Route path='/' element={<Header/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<h1>Page Not Found</h1>}></Route>
      </Routes>
    </div>
  )
}

export default App