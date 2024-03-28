import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UtamningSec from "./utmaningSec";

import Utbildning from "../Startpage/Utbildning";
import Quiz from "../quiz/quiz.jsx";
import { FaArrowRight } from "react-icons/fa";
const Havsnivå = () => {
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
            Havsnivå
          </h1>

          <Container>
            <Row className="justify-content-center align-items-center">
              <Col>
                <p>
                  Havsnivån är en kritisk indikator på planetens hälsa och
                  påverkas av en rad olika faktorer. Ökningar av den globala
                  temperaturen utgör en av de huvudsakliga drivkrafterna bakom
                  stigande havsnivåer. Här är några steg som leder till denna
                  höjning:
                </p>

                <div className="container m-2">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-10">
                      <div className="d-flex flex-wrap justify-content-center align-items-center ">
                        <span
                          className="text-gray p-2  "
                          style={{
                            borderRadius: "20px",
                            border: "1px solid #4CAF83",
                          }}
                        >
                          Termisk expansion
                        </span>

                        <FaArrowRight
                          className="m-3"
                          style={{ color: "#4CAF83" }}
                        />
                        <span
                          className="text-gray p-2  mb-2"
                          style={{
                            borderRadius: "20px",
                            border: "1px solid #4CAF83",
                          }}
                        >
                          Glaciärsmältning
                        </span>
                        <FaArrowRight
                          className="m-3"
                          style={{ color: "#4CAF83" }}
                        />
                        <span
                          className="text-gray p-2  mb-2"
                          style={{
                            borderRadius: "20px",
                            border: "1px solid #4CAF83",
                          }}
                        >
                          Landisar och istäcken
                        </span>
                        <FaArrowRight
                          className="m-3 "
                          style={{ color: "#4CAF83" }}
                        />
                        <span
                          className="text-gray p-2  mb-2"
                          style={{
                            borderRadius: "20px",
                            border: "1px solid #4CAF83",
                          }}
                        >
                          Havsströmmar och vindar
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center align-items-center mt-4">
              <Col md={8}>
                <img
                  src="/bilder/glacer.jpg"
                  alt="hansnivå"
                  className="img-fluid mb-4"
                  style={{ Width: "450px" }}
                />
                <p>
                  {" "}
                  <span style={{ color: "#4CAF83" }}>
                    Termisk expansion:
                  </span>{" "}
                  när haven absorberar värme från atmosfären expanderar vattnet.
                  Denna termiska expansion är en bidragande faktor till ökningen
                  av havsnivån.
                </p>
                <p>
                  {" "}
                  <span style={{ color: "#4CAF83" }}>
                    Glaciärsmältning:
                  </span>{" "}
                  stigande temperaturer får glaciärer och ismassor att smälta.
                  Detta tillför ytterligare vatten till haven och ökar deras
                  volym.
                </p>
                <p>
                  {" "}
                  <span style={{ color: "#4CAF83" }}>
                    Landisar och istäcken:
                  </span>{" "}
                  minskningen av landisar och istäcken, särskilt i
                  polarområdena, bidrar också till ökande havsnivåer när det
                  frigjorda vattnet når haven.
                </p>
                <p>
                  {" "}
                  <span style={{ color: "#4CAF83" }}>
                    Havsströmmar och vindar:
                  </span>{" "}
                  förändringar i havsströmmar och vindmönster påverkar också
                  havsnivån lokalt, vilket kan leda till avvikande nivåer i
                  olika regioner.
                </p>
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
                Snabba fakta om havsnivå
              </h3>
              <ul>
                <li>
                  Stiger havsnivån kommer en del av marken vi lever på hamna
                  under vattenytan.
                </li>
                <li>
                  Samhällena närmast vattnet kommer tvingas flytta inåt landet.
                </li>
                <li>Öarna Maldiverna är säksillt utsatta.</li>
                <li>Att havsnivån stiger leder till att glaciärer smälter.</li>
              </ul>
            </Col>
            <Col
              md={6}
              className="p-2"
              style={{ position: "relative", zIndex: "1" }}
            >
              <img
                src="/bilder/baby.png"
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
              I detta diagram utforskar vi havsnivåförändringar från 1880 till
              2013. GMSL, som står för den globala medelhavsnivån, är en
              nyckelindikator för att mäta detta över tid. Vid 1880 var
              havsnivån relativt låg.
            </p>
            <p style={{ textAlign: "left" }}>
              Diagrammet ger insikt i den gradvisa ökningen, mätt i millimeter
              per år, och belyser de accelererande förändringarna över åren.
              Förståelsen av GMSL är kritisk för att bedöma påverkan av
              klimatförändringar på våra hav och dess långsiktiga konsekvenser
              för våra ekosystem och kuster.
            </p>
          </Col>
        </Row>
      </Container>
     
      <div style={{ textAlign: "center" }}>
                <img
                  src="/bilder/havgraf.png"
                  alt="Global temperature"
                  className="img-fluid"
                  style={{width:'70%'}}
                  
                /></div>
      <div className="p-2"></div>
      <Quiz />

      <UtamningSec />
      <Utbildning />
    </>
  );
};

export default Havsnivå;
