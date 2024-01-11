import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";

/*This component shows detail of quizstart page.*/
const Quizstart = () => {
  return (
    <div> 

    {/*here we use background image in an div.*/} 
    <div className="d-flex justify-content-center align-items-center" style={{
      backgroundImage:
        'url("https://img.freepik.com/free-vector/superhero-kid-concept-illustration_114360-22771.jpg?size=626&ext=jpg&uid=R91676460&ga=GA1.1.1096230481.1700224464&semt=ais")',
        backgroundPosition: 'center', // centerd the image
        minHeight: '100vh', // set the height
      backgroundRepeat: "no-repeat" 
    }}>

      <Container>
      <Row className="text-center justify-content-center align-items-center">
        <Col>
          <div className="bg-light opacity-75 border rounded py-5 mx-5">
            {/*here is the centerd and designed heading*/} 
          <h1 className="pb-3">Quiz</h1> 
              <h3>
              Svara på en quiz med 10 frågor baserade på glaciärer, havsnivå och global temperatur.
              </h3>
               {/* link used to route to quiz page with a button*/} 
               <Link as={Link} to="/quiz">
              <a className="btn rounded-pill text-white" style={{ 
                backgroundColor: "#4CAF83",
                minWidth: '150px',
                fontSize: 'bold',
                 }}>
                Starta Quiz
              </a>
              </Link>
          </div>
          
        </Col>
      </Row>
    </Container>
    </div>
    </div>
   );
  }
  
  export default Quizstart;