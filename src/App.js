// App.js
import React from 'react';
import {  Routes, Route, } from 'react-router-dom'; 
import Home from './userinfo/home';
import Login from './userinfo/login';
import Signup from './userinfo/singup'
import './App.css';
import Havsnivå from './Ämnet/Havsnivå';
import GlobalTemperatur from './Ämnet/globalTemperatur';
import Glaciärer from './Ämnet/Glaciärer';
import Utmaningar from './Ämnet/utmaningar';
import Profil from './userinfo/profil';
import ResetPassword from './userinfo/resetPassword';
const App = () => {
  return (
    <div className='app'>
     

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="login/resetpassword" element={<ResetPassword />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/globalTemperatur" element={<GlobalTemperatur />} />
        <Route path="/Havsnivå" element={<Havsnivå />} />
        <Route path="/Glaciärer" element={<Glaciärer />} />
        <Route path="/utmaningar" element={<Utmaningar />} />

        {/* Additional Nested Routes */}
        <Route path="/utmaningar/globalTemperatur" element={<GlobalTemperatur />} />
        <Route path="/utmaningar/havsnivå" element={<Havsnivå />} />
        <Route path="/utmaningar/glaciärer" element={<Glaciärer />} />
      </Routes>
    </div>
  );
};

 
 export default App;