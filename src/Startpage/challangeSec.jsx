import React from "react";
import {  Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const ChallangeSec = () => {
  return (
    <div className="p-0" style={{ backgroundColor: "#4CAF83" }}  >
    <Container className="p-0"  >
      <div>
        <Row className=" align-items-center pt-4 pb-4">
          <Col md={6}>
            <img
              src="/bilder/boy.jpg"
              alt="lyckas"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2
              className="text-white"
              style={{ fontSize: "30px", fontWeight: "bold", padding:'10px'  }}
            >
              Testa dig med en quiz!
            </h2>
            <p className="text-white" style={{ fontSize: "16px", padding:'10px'  }}>
            Lär dig först om ämnet och testa sedan dina kunskaper.
            </p>
            <Link to="/Quiz">
              <button
                className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                style={{
                  backgroundColor: "#F6F6F2",
                  color: "#4CAF83",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  border: "none", margin:'10px'
                }}
              >
                Till quizet
              </button>
            </Link>
          </Col>
        </Row>
        <Row className=" align-items-center pt-4 pb-4">
          
          <Col md={6}>
            <h2
              className="text-white"
              style={{ fontSize: "30px", fontWeight: "bold", padding:'10px'  }}
            >
              Ta utmaning med hållbara val!
            </h2>
            <p className="text-white" style={{ fontSize: "16px", padding:'10px'  }}>
              Ta Klimatkoll utmaningen! Utforska hållbara val, skapa små
              förändringar med stor inverkan.
            </p>
            <Link to="/Utmaningar">
              <button
                className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-1"
                style={{
                  backgroundColor: "#F6F6F2",
                  color: "#4CAF83",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  border: "none", margin:'10px'
                }}
              >
                Utmaningar
              </button>
            </Link>
          </Col>
          <Col md={6}>
            <img
              src="/bilder/challange.jpg"
              alt="lyckas"
              className="img-fluid"
            />
          </Col>
        </Row>
      
        <Row className="align-items-center pt-4 pb-4">
        <Col md={6}>
            <img
              src="/bilder/suceses.jpg "
              alt="take challange"
              className="img-fluid"
            />
          </Col>
          <Col md={6}>
            <h2
              className="text-white"
              style={{ fontSize: "30px", fontWeight: "bold", padding:'10px'  }}
            >
              Dela reslutat med dina vänner!
            </h2>
            <p className="text-white" style={{ fontSize: "16px", padding:'10px' }}>
              Se dina poäng och dela med dina vänner.
            </p>
            <Link to="/Profil">
              <button
                className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-3"
                style={{
                  backgroundColor: "#F6F6F2",
                  color: "#4CAF83",
                  borderRadius: "20px",
                  fontSize: "1rem",
                  border: "none", margin:'10px'
                }}
              >
                Dina pöeng
              </button>
            </Link>
          </Col>
         
        </Row>
        </div>
    </Container>
    </div>
  );
};

export default ChallangeSec;
