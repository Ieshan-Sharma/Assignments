import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';
import { Home } from './components/Home'

export const App = () => {
 const data = {
   email:localStorage.getItem("email"),
   password:localStorage.getItem("password")
 }


  return (
    <div className='AppStyle'>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
        {(data.email) ?
          <Route path='/home' element={<Home />} />
          : ""}
      </Routes>

    </div>
  );
}

