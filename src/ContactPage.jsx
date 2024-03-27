import React from "react";

import { Container, Row, Col } from "react-bootstrap";
const ContactPage = () => {
  return (
    <Container className="m-2 p-2 text-left">
      <Row>
        <Col>
          <h1
            className="text-center mb-4"
            style={{ fontWeight: "bold", fontSize: 34, color: "#4CAF83" }}
          >
            Kontaktuppgifter
          </h1>
          <p>
            <strong style={{ color: "#4CAF83" }}>E-post:</strong>{" "}
            info@KlimatKoll.se
          </p>
          <p>
            <strong style={{ color: "#4CAF83" }}>Telefonnummer:</strong> +46 787
            318 15
          </p>
          <p>
            <strong style={{ color: "#4CAF83" }}> Besöksadress:</strong>
            <br />
            Rökerigatan 12
            <br />
            2 trappor
            <br />
            187 17 JOHANNESGÅRDE
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
