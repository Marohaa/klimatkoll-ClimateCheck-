// App.js
import React from 'react';
import {  Routes, Route, } from 'react-router-dom'; 
import Home from './components/home';
import Login from './components/login';
import Signup from './components/singup'
import './App.css';
import Havsnivå from './Ämnet/Havsnivå';
import GlobalTemperatur from './Ämnet/globalTemperatur';
import Glaciärer from './Ämnet/Glaciärer';
import Utmaningar from './Ämnet/utmaningar';

const App = () => {
  return (
     <div className='app'>
       <Routes>
       
         <Route path="/" element={<Login />} />
         <Route path="/login" element={<Login />} />
         <Route path="/home" element={<Home />} />
         <Route path="/signup" element={<Signup />} />
         <Route path="/Havsnivå" element={<Havsnivå />} />
         <Route path="/globalTemperatur" element={<GlobalTemperatur />} />
         <Route path="/Glaciärer" element={<Glaciärer />} />
         <Route path="/utmaningar" element={<Utmaningar />} />
       </Routes>
       
     </div>
  );
 };
 

 
 export default App;