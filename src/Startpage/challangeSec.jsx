import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const ChallangeSec = () => {
  return (
    <Container >
      <Row
        className=" align-items-center m-2 mb-4"
        style={{ border: "1px solid #4CAF83" }}
      >
        
        <Col md={6}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              padding: "10px",
              color: "#4CAF83",
            }}
          >
            Testa dig med en quiz!
          </h2>
          <p style={{ fontSize: "16px", padding: "10px" }}>
            Lär dig först om ämnet och testa sedan dina kunskaper.
          </p>
          <Link to="/Quiz">
            <button
              className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2  mb-3"
              style={{
                backgroundColor: "#4CAF83",
                color: "#F6F6F2",
                borderRadius: "20px",
                fontSize: "1rem",
                border: "none",
                margin: "10px",
              }}
            >
              Till quizet
            </button>
          </Link>
        </Col>
        <Col md={6} className="p-0">
          <img src="/bilder/boy.jpg" alt="lyckas" className="img-fluid" />
        </Col>
      </Row>
      <Row
        className="align-items-center m-2 "
        style={{ border: "1px solid #4CAF83" }}
      >
        <Col md={6}  xs={12} className="p-0 order-xs-first">
          <img src="/bilder/challange.jpg" alt="lyckas" className="img-fluid" />
        </Col>
        <Col md={5} xs={12} className="order-xs-last">
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              padding: "10px",
              color: "#4CAF83",
            }}
          >
            Ta utmaning med hållbara val!
          </h2>
          <p style={{ fontSize: "16px", padding: "10px" }}>
            Ta Klimatkoll utmaningen! Utforska hållbara val, skapa små
            förändringar med stor inverkan.
          </p>
          <Link to="/Utmaningar">
            <button
              className="btn btn-secondary btn-lg btn-block fa-lg gradient-custom-2 mb-3 "
              style={{
                backgroundColor: "#4CAF83",
                color: "#F6F6F2",
                borderRadius: "20px",
                fontSize: "1rem",
                border: "none",
                margin: "10px",
              }}
            >
              Utmaningar
            </button>
          </Link>
        </Col>
        
      </Row>

      
    </Container>
  );
};

export default ChallangeSec;
