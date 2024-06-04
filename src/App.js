// App.js
import React from 'react';
import {  Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './userinfo/home';
import Login from './userinfo/login';
import Signup from './userinfo/singup'
import './App.css';
import Havsnivå from './Educational/Havsnivå';
import GlobalTemperatur from './Educational/globalTemperatur';
import Glaciärer from './Educational/Glaciärer';
import Utmaningar from './Educational/utmaningar';
import Profil from './userinfo/profil';
import ResetPassword from './userinfo/resetPassword';
import Footer from './Footer';
import NavBar from './navbar';
import ContactPage from './ContactPage.jsx';
import AboutPage from './AboutPage.jsx';
import Quiz from './quiz/quiz.jsx';
import SamarbetePage from './samarbetePage.jsx';
const App = () => {
  const location = useLocation();
  const normalizedPathname = location.pathname.toLowerCase();
  const routesWithoutNavbarAndFooter = ['/login/resetpassword', '/login', '/signup'];
  const showNavBarAndFooter = !routesWithoutNavbarAndFooter.includes(location.pathname);
  console.log("Current Path:", normalizedPathname);
  return (
    <div className='App'>
      {showNavBarAndFooter && <NavBar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/resetpassword" element={<ResetPassword />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/globalTemperatur" element={<GlobalTemperatur />} />
        <Route path="/Havsnivå" element={<Havsnivå />} />
        <Route path="/Glaciärer" element={<Glaciärer />} />
        <Route path="/utmaningar" element={<Utmaningar />} />
        <Route path="/Quiz" element={<Quiz />} />
        <Route path="/samarbetepage" element={<SamarbetePage />} />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/om oss" element={<AboutPage />} />
        {/* Additional Nested Routes */}
        <Route path="/utmaningar/globalTemperatur" element={<GlobalTemperatur />} />
        <Route path="/utmaningar/havsnivå" element={<Havsnivå />} />
        <Route path="/utmaningar/glaciärer" element={<Glaciärer />} />
      </Routes>

      {showNavBarAndFooter && <Footer />}
    </div>
  );
};

export default App;