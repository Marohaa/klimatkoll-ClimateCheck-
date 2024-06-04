import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#4CAF83', color: 'white' }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            {/* Logo */}
            <Link to="/home">
              <img
                src="/bilder/logo-to-klimatkoll.png"
                height="55"
                alt="klimatkoll Logo"
              />
            </Link>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4">
            {/* Första kolumnen */}
            <h5>Våra utbildningar</h5>
            <ul className="list-unstyled">
           <Link to="/globalTemperatur"  style={{ textDecoration: 'none', color:'white' }}>  <li>Global temperatur</li></Link> 
           <Link to="/Havsnivå"  style={{ textDecoration: 'none', color:'white' }}>   <li>Havsnivå</li></Link> 
           <Link to="/Glaciärer"  style={{ textDecoration: 'none',color:'white' }}>  <li>Glaciärer</li></Link> 
             
            </ul>
          </div>
          <div className="col-md-4">
            {/* Andra kolumnen */}
            <h5>Aktiviteter</h5>
            <ul className="list-unstyled">
            <Link to="/utmaningar"   style={{ textDecoration: 'none',color:'white' }}>  <li>Utamningar</li></Link> 
            
            </ul>
          </div>
          <div className="col-md-4">
            {/* Tredje kolumnen */}
            <h5>Om KlimatKoll</h5>
            <ul className="list-unstyled">
            <Link to="/om oss"   style={{ textDecoration: 'none',color:'white' }}>  <li>Om oss</li></Link> 
              <Link to="/kontakt"   style={{ textDecoration: 'none',color:'white' }}>  <li>Kontakt</li></Link> 
              <Link to="/samarbetepage"   style={{ textDecoration: 'none',color:'white' }}>  <li>KlimatKoll partner</li></Link> 
            </ul>
          </div>
        </div>
      </div>
      <div style={{ backgroundColor: '#F6F6F2', color: 'black',fontSize:'13px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px' }}> 
  <p>Copyright © 2023 KlimatKoll. All rights reserved. </p>
</div>

    </footer>
  );
};

export default Footer;
