import React from "react";
import { Container, Row, Col} from "react-bootstrap";

const SamarbetePage = () => {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1  className="text-center mb-4"
            style={{ fontWeight: "bold", fontSize: 34, color: "#4CAF83" }}>Välkommen till KlimatKoll och Stockholms kommuns samarbete!</h1>
            <div style={{ textAlign: "center" }}>
  <img
    src="/bilder/hands.jpg"
    alt="Global temperature"
    className="img-fluid"
    style={{ width: "600px", display: "inline-block" }}
  />
</div>
          <p>
            Vi är glada över att presentera vårt nya partnerskap med Stockholms kommun för att främja hållbarhet och klimatmedvetenhet.
          </p>
          <p>
            Tillsammans strävar vi efter att skapa en grönare och mer hållbar framtid för alla invånare i Stockholm.
          </p>
          <p>
            På den här sidan kan du lära dig mer om vårt samarbete, ta del av olika initiativ och evenemang samt få tips och råd om hur du kan bidra till en mer hållbar stad.
          </p>
          <p>
            Vi uppmanar alla invånare i Stockholm att delta i vårt gemensamma arbete för att göra staden renare, grönare och mer klimatvänlig!
          </p>
        
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 style={{
                    fontSize: 30,
                    marginBottom: "20px",
                    color: "#4CAF83",
                  }}>Våra gemensamma mål:</h2>
          <ul>
            <li>Att minska utsläppen av växthusgaser i Stockholm med 50% till år 2030.</li>
            <li>Att öka andelen grönområden och cykelvägar i staden för att främja hållbar mobilitet.</li>
            <li>Att informera och engagera invånarna i Stockholm i frågor som rör klimatet och miljön.</li>
            <li>Att främja hållbara konsumtionsvanor och åtgärder för att minska avfallet.</li>
          </ul>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2 style={{
                    fontSize: 30,
                    marginBottom: "20px",
                    color: "#4CAF83",
                  }}>Hur du kan delta:</h2>
          <p>
            Det finns många sätt att bidra till vårt gemensamma mål för en mer hållbar stad. Här är några exempel på hur du kan engagera dig:
          </p>
          <ul>
            <li>Deltag i lokala klimataktiviteter och evenemang.</li>
            <li>Delta i stadsplanering och ge feedback på hållbarhetsinitiativ.</li>
            <li>Främja kollektivtrafik, cykling och promenader som alternativ till bilresor.</li>
            <li>Genomför små förändringar i din vardag för att minska din klimatpåverkan, som att minska matsvinnet och använda återvinningsbara material.</li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default SamarbetePage;
