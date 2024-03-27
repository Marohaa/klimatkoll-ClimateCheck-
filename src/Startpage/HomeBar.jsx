import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

const HomeBar = () => {
  return (
    <>
      <div className="pt-4"></div>
      <Container className="text-center ">
        <Row  className="g-2 justify-content-center align-items-center" style={{ backgroundolor: "#4CAF83" }} >
          <Col className="col-md-10 " >
          <div className="d-flex flex-wrap justify-content-center align-items-center">
            <Card className="p-2"
              style={{
                textAlign: "center",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src="/bilder/book.png"
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                className="p-3"
              />
              <Card.Body>
                <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>Läs</h3>
              </Card.Body>
            </Card>
          
          
            <Card
            className="p-2"
              style={{
                textAlign: "center",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src="/bilder/förstå.png"
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                className="p-3"
              />
              <Card.Body>
                <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>
                  Förstå
                </h3>
              </Card.Body>
            </Card>
          
            <Card
            className="p-2"
              style={{
                textAlign: "center",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src="/bilder/testa.png"
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                className="p-3"
              />
              <Card.Body>
                <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>
                  Testa
                </h3>
              </Card.Body>
            </Card>
         
            <Card
            className="p-2"
              style={{
                textAlign: "center",
                border: "none",
              }}
            >
              <Card.Img
                variant="top"
                src="/bilder/få poeng.png"
                style={{
                  width: "100px",
                  height: "100px",
                  margin: "auto",
                  borderRadius: "50%",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
                className="p-3"
              />
              <Card.Body>
                <h3 style={{ fontSize: "16px", fontWeight: "normal" }}>Dela</h3>
              </Card.Body>
            </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default HomeBar;
