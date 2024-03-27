import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UtamningSec from "./utmaningSec";

import Utbildning from "../Startpage/Utbildning";
import Quiz from "../quiz/quiz.jsx";
const GlobalTemperatur = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ color: "black", fontSize: 16 }}
      >
        <div className="m-2 p-2 text-left">
          <h1
            className="text-center mb-4"
            style={{ fontWeight: "bold", fontSize: 34, color: "#4CAF83" }}
          >
            Glaciärer
          </h1>

          <Container>
            <Row className="justify-content-center align-items-center">
              <Col>
                <p>
                  <span style={{ color: "#4CAF83" }}>
                    Glaciärbildning och Smältning:
                  </span>{" "}
                  En glaciär bildas när årliga lager av snö ackumuleras och
                  omvandlas över tid till is. Trycket från den ökande mängden is
                  får glaciären att röra sig som en långsam flod, vilket skapar
                  dessa mäktiga isformationer. Tyvärr, med den ökande globala
                  temperaturen, smälter glaciärer i en snabbare takt än de kan
                  återskapas, vilket utgör en oroande faktor för vår planets
                  klimatsystem.
                </p>
                <p>
                  <span style={{ color: "#4CAF83" }}>Havsnivåökning:</span>{" "}
                  Glaciärsmältningen är en betydande bidragande faktor till den
                  globala havsnivåökningen. När isen på glaciärerna smälter,
                  frigörs enorma mängder vatten som i slutändan når haven och
                  höjer deras nivåer. Detta fenomen är en direkt konsekvens av
                  den pågående klimatförändringen.
                </p>
                <h2
                  className=" mb-4"
                  style={{
                    fontSize: 30,
                    marginBottom: "20px",
                    color: "#4CAF83",
                  }}
                >
                  Viktiga Djurarter Beroende av Glaciärer
                </h2>
                <p>
                  Många djurarter, inklusive isbjörnar och flera säldjur, är
                  beroende av glaciärisen för överlevnad. Försvinner glaciärerna
                  blir det en utmaning för dessa djur att hitta mat och skapa
                  boplatser, vilket i sin tur hotar hela ekosystemen i
                  polarområdena.
                </p>
                <div style={{ textAlign: "center" }}>
  <img
    src="/bilder/bears.png"
    alt="Global temperature"
    className="img-fluid"
    style={{ width: "600px", display: "inline-block" }}
  />
</div>

              </Col>
            </Row>
            
          </Container>
        </div>
      </div>

      <div className="p-2 m-2"></div>

      <div style={{ backgroundColor: "#F6F6F2" }}>
        <Container className="p-2 mb-4 d-flex justify-content-center align-items-center">
          <Row className="mt-4 mb-4">
            <Col
              md={6}
              className="p-2 mb-4"
              style={{ position: "relative", zIndex: "1" }}
            >
              <h3
                style={{ fontSize: 30, marginBottom: "20px", color: "#4CAF83" }}
              >
               Snabba fakta om glaciärer
              </h3>
              <ul>
                <li>
                När glaciärer smälter ökar havsnivån och markytan minskar.
                </li>
                <li>
                Människors tillgång till färskvatten försvinner.
                </li>
                <li>
                Djurarter är beroende av glaciärisen.
                </li>
                <li>
                  
Den globala temperaturen påverkar smältningen av glaciärerna.
                </li>
                
              </ul>
            </Col>
            <Col
              md={6}
              className="p-2"
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                src="/bilder/gglacer.png"
                alt="jord med ekosystem"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="p-2 m-2"></div>

      <Container className="text-left">
        <Row className="justify-content-center align-items-center">
          <Col>
            <h2 style={{ fontSize: 24, color: "#4CAF83" }}>
            Glaciärer genom historien
            </h2>
            <p style={{ textAlign: "left" }}>
            I Sverige fanns  250 galciärer på 80-talet, dessa har nu minskat drasiskt och bara en handfull finns kvar idag. I diagrammet här nedanför kan du se hur glaciärerna i världen har påverkats under längre tid, mellan 1945-2014.
            </p>
            <p style={{ textAlign: "left" }}>
            På den vänstra staplen kan du se vattenekvalenten, detta betyder hur mycket vatten det finns i snön och isen i galciärerna vilket också visar hur stora glaciärerna är. Utifrån diagrammet kan du se hur glaciärerna blir mindre och mindre för varje år.
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ textAlign: "center" }}>
                <img
                  src="/bilder/glagraf.png"
                  alt="glaciärergraf"
                  className="img-fluid"
                  style={{width:'70%'}}
                  
                /></div>
      <div className="p-2 m-2"></div>
      <Quiz />

      <UtamningSec />
      <Utbildning />
    </>
  );
};

export default GlobalTemperatur;
