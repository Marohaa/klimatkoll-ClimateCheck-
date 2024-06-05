// App.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; 
import Home from './userinfo/home';
import Login from './userinfo/login';
import Signup from './userinfo/singup';
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
    // Visa inte footer och header i dessa sidor
  const location = useLocation();
  const noNavAndFooterRoutes = ['/login', '/signup', '/login/resetpassword'];

  // Kontrollera den aktuella sökvägen
  console.log('Current pathname:', location.pathname);

  // Använd startsWith för att matcha del av sökvägen
  const showNavAndFooter = !noNavAndFooterRoutes.some(route => location.pathname.startsWith(route));

  return (
    <div className='App'>
      {showNavAndFooter && <NavBar />}
      
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
      </Routes>

      {showNavAndFooter && <Footer />}
    </div>
  );
};

export default App;