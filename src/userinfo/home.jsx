import React from 'react';
import CoverImg from '../Startpage/CoverImg';

import { Outlet, Route, Routes } from 'react-router-dom';

const Home = () => {
  return (
    <>
   
      <Routes>
        <Route
          path="/"
          element={
            <>
              
              <CoverImg />
            </>
          }
        />
      </Routes>
      <Outlet />
      
    </>
  );
};

export default Home;

