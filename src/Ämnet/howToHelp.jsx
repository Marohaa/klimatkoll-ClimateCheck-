import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import {  Link, Outlet } from 'react-router-dom';

const HowToHelp = () => {
   
  return (
    <>
   
    <Container className="mt-4 p-2" style={{ backgroundColor: '#4CAF83', color: 'white',borderRadius: '10px', fontSize: 14, border: 'none'}}>
    <Row>
      {/* Left part with text */}
      <Col md={12} lg={6} >
        <div className='p-2 m-2'>
          <h1 style={{ fontSize: 34, marginBottom: '20px'}}>Hur kan du hjälpa till att påverka?</h1>
<p>
Använd Klimatkoll för att öka din kunskapom klimatförändringarna. Utforska grafen här ovanför, diskutera det med dina klasskamrater och lärare och tänk efter hur du kan bidra till att hjälpa vår planet. En kan inte göra allt men alla kan göra något, till exempel handla på second hand, inte slänga sopor i naturen och att cykla!</p> 
          
         <p>I vårt avsnitt utmaningar kan du se vad du mer kan göra för att hjälpa vårt klimat!</p>
       {/* knapp som gå till utmaningar sidan */}
         <Link to="/utmaningar">
             <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
  style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
Utmaningar
</Button>
</Link>
        </div>
      
      </Col>

      {/* Right part with an image */}
      <Col md={12} lg={6}>
        <img
          src="/bilder/klimat-2.png" 
          alt="global tempurter Bild"
            
           className="img-fluid m-2"
        />
      </Col>
    </Row>
  </Container>
  <Outlet />
 </>
  );
};

export default HowToHelp;
