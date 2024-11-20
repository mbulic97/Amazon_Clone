import React from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login"
const App = () => {
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