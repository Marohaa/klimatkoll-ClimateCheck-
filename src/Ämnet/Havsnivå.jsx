import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar';
import HowToHelp from './howToHelp';

const Havsnivå = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-4 p-2" style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Row>
          {/* Left part with text */}
          <Col md={12} lg={6} className="p-2">
            <div className='p-2 m-2'>
              <h1 style={{ fontSize: 34, marginBottom: '20px' }}>Havsnivå</h1>
              <p>
              Havsnivån visar hur stora och höga alla våra hav och oceaner som finns på jorden är. Havsnivån har börjat stiga vilket i sin tur leder till att landytan (marken) blir mindre, detta är en effekt av klimatförändringarna. Havnsnivån stiger eftersom vattnets värms upp och varmt vatten har en större volym än kallt vatten. Vattennivån påverkas även av den globala uppvärmningen som leder till att glaciärer och landisar smälter. Vill du läsa mer om temperaturen i luften kan du göra det i vårt avsnitt om global temperatur.
              </p>
              <h3 style={{ fontSize: 30, marginBottom: '20px' }}>Varför är Havsnivån viktig?</h3>
              <p>
              Havsnivån påverkar alla människor på vår planet. Om havsnivån stiger kommer en del av marken vi lever på hamna under vattnet. Samhällena som bor närmast kusterna kommer tvingas flytta inåt landet eftersom havet stiger och markytan försvinner. Öarna Maldiverna är särskillt utsatta eftersom deras marknivå ligger jäms med dagens havsnivå. Genom att undersöka vad som påverkar havsnivån och hur vi kan hjälpa till att stabilisera den kan vi alla bidra till att skapa ett tryggt och säkert klimat för alla levande varelser på vår planet och skapa en välmående jord!
              </p>
            </div>
          </Col>

          {/* Right part with an image */}
          <Col md={12} lg={6} className="p-2">
            <img
              src="/bilder/klmat-change-bil-d-1.png"
              alt="global tempurter Bild"
              className="img-fluid m-4"
            />
          </Col>
        </Row>
      </Container>

      <Container className="m-2 p-2" style={{ color: '#000' }}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h2 style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'left' }}>Havsnivån genom historien</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="p-2">
            <p style={{ fontSize: '14px', marginBottom: '40px', textAlign: 'left' }}>
            I diagrammet här nedanför kan du se hur havsnivån har förändrats genom tiden (1880-2013). Genom att vi lär oss mer om hur vårt klimat och våra hav påverkas av vilka val vi gör i vardagen kan vi alla hjälpa till att förbättra detta!  Infomrationen är hämtad från Global Climate at a Glance (GCAG) och GISS Surface Temperature Analysis (GISTEMP). 
            </p>
          </Col>
        </Row>
      </Container>

      {/* för att visa filmen från youtube */}
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="p-2">
          <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
            <iframe
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              src="https://www.youtube.com/embed/H71LG6xgZII"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
      </Row>
      <HowToHelp />
    </>
  );
};

export default Havsnivå;
