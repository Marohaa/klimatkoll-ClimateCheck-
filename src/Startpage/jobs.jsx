import React from "react";
import { Link } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";

const Jobs = () => {
  return (
    <>
      <Container className="text-center">
        <Row className="g-2 justify-content-center align-items-center">
          <Col className="col-md-8">
            <h2 style={{ color: "#4CAF83" }}>
              KlimatKoll och Stockholms kommuns samarbete
            </h2>
            <p>
              KlimatKoll och skolor i Stockholms kommun har ingått ett
              spännande partnerskap med ett gemensamt mål att främja hållbarhet
              och öka klimatmedvetenheten bland högstadieskolorna i staden.{" "}
              <Link
                to="/samarbetepage"
                style={{ color: "black", fontWeight: "bold" }}
              >
                Läs mer
              </Link>
            </p>

            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <Card
                className="p-2"
                style={{
                  textAlign: "center",
                  border: "none",
                  maxWidth: "200px",
                  margin: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src="/bilder/logo2.png"
                  style={{
                    width: "100%",
                    margin: "auto",
                  }}
                />
              </Card>

              <Card
                className="p-2"
                style={{
                  textAlign: "center",
                  border: "none",
                  maxWidth: "200px",
                  margin: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src="/bilder/stck.png"
                  style={{
                    width: "100%",
                    margin: "auto",
                  }}
                />
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Jobs;

