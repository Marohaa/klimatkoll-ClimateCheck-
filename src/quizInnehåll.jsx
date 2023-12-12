import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const QuizInnehåll = () => {
  return (
    <> <Container className="mt-4 p-2" style={{ backgroundColor: '#F6F6F2', color: 'black',borderRadius: '10px', fontSize: 18, border: 'none'}}>
    <Row>
      {/* Left part with text */}
      <Col md={12} lg={6} >
        <div className='p-2 m-2'>
          <h1 style={{ fontSize: 34, marginBottom: '20px'}}>Lär dig genom quiz</h1>

          
         <p>Du kan testa dina kunskaper i global temperatur, havsnivåer och
                glaciärer genom vårt quiz! </p>
         <Button
  type="submit"
  className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-2"
  style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '20px', fontSize: 14, border: 'none' }}
>
Testa vårt quiz
</Button>
        </div>
      
      </Col>

      {/* Right part with an image */}
      <Col md={12} lg={6}>
        <img
          src="/bilder/10009641.png" 
          alt="hero"
            style={{width: 400}}
           className="img-fluid m-4"
        />
      </Col>
    </Row>
  </Container>
    
    </>
  );
};

export default QuizInnehåll;

