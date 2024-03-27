import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UtamningSec from "./utmaningSec";

import Utbildning from "../Startpage/Utbildning"
import Quiz from '../quiz/quiz.jsx'
const GlobalTemperatur = () => {
  return (
    <>
     
      <div
        className="d-flex justify-content-center align-items-center"
        style={{  color: "black", fontSize: 16 }}
      >
        <div className="m-2 p-2 text-left">
          <h1
            className="text-center mb-4"
            style={{ fontWeight: "bold", fontSize: 34, color: "#4CAF83" }}
          >
            Global temperatur
          </h1>

          <Container>
            <Row className="justify-content-center align-items-center">
              <Col >
                <p>
                  Global temperatur är medeltemperaturen över hela vår planet.
                  När den stiger leder det till ökade klimatförändringar. Den
                  stora boven här är koldioxid som släpps ut när vi använder
                  till exempel bensin och diesel. Koldioxid stannar i luften och
                  får den globala temperaturen att öka.
                </p>
                <div style={{ textAlign: "center" }}>
                <img
                  src="/bilder/klimat-22.png"
                  alt="Global temperature"
                  className="img-fluid"
                  style={{ width: "600px" }}
                /></div>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center">
              <Col  className="p-2">
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    Hur påverkar Global temperatur oss?
                  </p>
                  <p>
                    Det påverkar oss på många sätt, både hur vi lever och genom
                    naturliga händelser som vulkanutbrott. För att mäta
                    temperaturen används oftast termometrar.
                  </p>
                  <p>
                    Det finns flera saker att göra för att minska den globala
                    uppvärmningen. Det är saker som att flyga mindre, köra
                    mindre bil, äta mer vegetarisk mat, handla begagnat och
                    sopsortera. Genom att sopsortera kan produkternas material
                    återanvändas vilket kräver mindre energi än att tillverka
                    nytt.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="p-2 m-2"></div>

      <div style={{ backgroundColor: "#F6F6F2" }}>
        <Container className="p-2 mb-4 d-flex justify-content-center align-items-center" >
          <Row className="mt-4 mb-4">
            <Col
              md={6}
              className="p-2 mb-4"
              style={{ position: "relative", zIndex: "1" }}
            >
              <h3
                style={{ fontSize: 30, marginBottom: "20px", color: "#4CAF83" }}
              >
                Snabba fakta om global temperatur
              </h3>
              <ul>
                <li>
                  Den globala temperaturen påverkar alla levande varelser och
                  ekosystem på jorden.
                </li>
                <li>
                  Ekosystemen står inför utmaningar när temperaturen förändras,
                  mer om detta finns i vårt avsnitt om glaciärer.
                </li>
                <li>
                  Klimatförändringar kopplade till den globala temperaturen kan
                  orsaka extrema stormar, särskilt i tropiska områden.
                </li>
                <li>
                  Temperaturförändringar som hetta eller kyla är följder av
                  klimatförändringar.
                </li>
                <li>
                  Höjda havsnivåer är en annan konsekvens av den globala
                  temperaturökningen.
                </li>
              </ul>
            </Col>
            <Col
              md={6}
              className="p-2"
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                src="/bilder/jord.png"
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
              Havsnivån genom historien
            </h2>
            
            <p style={{ textAlign: "left" }}>
              Upptäck temperatur- och klimatförändringar från 1880 till 2016 i
              diagrammet nedanför. GISTEMP står för Global Surface Temperature,
              vilket representerar den globala medeltemperaturen för hela
              jordytan.
            </p>
            <p style={{ textAlign: "left" }}>
              I diagrammet syns en påtaglig acceleration av temperaturökningen
              efter 1960, drivet av mänskliga utsläpp. Det tydliggör vårt bidrag
              till den pågående klimatförändringen.
            </p>
            <div style={{ textAlign: "center" }}>
                <img
                  src="/bilder/globalgraf.png"
                  alt="Global temperature"
                  className="img-fluid"
                  style={{width:'70%'}}
                  
                /></div>
          </Col>
        </Row>
      </Container>
      
      <div className="p-2 m-2"></div>
      < Quiz />
      
      <UtamningSec />
<Utbildning />
    </>
  );
};

export default GlobalTemperatur;
