import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../navbar';
import HowToHelp from './howToHelp';

const GlobalTemperatur = () => {
  return (
    <>
      <NavBar />
      <Container className="mt-4 p-2" style={{ backgroundColor: '#F6F6F2', color: 'black', borderRadius: '10px', fontSize: 14, border: 'none' }}>
        <Row>
          {/* Left part with text */}
          <Col md={12} lg={6} className="p-2">
            <div className='p-2 m-2'>
              <h1 style={{ fontSize: 34, marginBottom: '20px' }}>Global temperatur</h1>
              <p>
                Global temperatur är den genomsnittliga temperaturen på hela vårt jordklot. När den globala temperaturen
                ökar visas detta genom ökade klimatförändringar. Koldioxid som vi människor släpper ut genom exempelvis
                fossila bärnslen som är den störta boven (bensin, dielsel) finns i luften och gör att den globala
                temperaturen ökar. Den globala temperaturen kan påverkas av många saker, till exempel vi människor genom
                hur vi lever men också genom naturen med tillexempel vulkanutbrott. För att mäta den globala temperaturen
                används vanligtvis en termometer.
              </p>
              <h3 style={{ fontSize: 30, marginBottom: '20px' }}>Varför är global temperatur viktig?</h3>
              <p>
                Den globala temperaturen påverkar alla levande varelser på vår jord, ekosystemen får det svårare att
                överleva när temperauren ändas. Klimatförändringar, som är kopplade till den globala temperaturen, kan
                leda till bland annat extrema stormar speciellt i de tropiska områdena, hetta eller kyla och att vattnet
                i våra hav stiger. Vi har alla ett ansvar att ta hand om vår jord och se till så att naturen mår bra.
                Detta kan vi göra genom att lära oss om vad som händer med vårt klimat och hur detta visar sig i naturen,
                då kan vi arbeta tillsammans för att skapa en hållbar och hälsosam planet.
              </p>
            </div>
          </Col>

          {/* Right part with an image */}
          <Col md={12} lg={6} >
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
            <h2 style={{ fontSize: '30px', marginBottom: '20px', textAlign: 'left' }}>Den globala temperaturen genom historien</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={12} md={8} className="p-2">
            <p style={{ fontSize: '14px', marginBottom: '40px', textAlign: 'left' }}>
              I diagrammet nedan kan du läsa om temperaturförändringarna genom historien (1880-2016).
              Här kan du se hur klimatet har ändrats och vad som händer över tid. Informationen är hämtad från Global
              Climate at a Glance (GCAG) och GISS Surface Temperature Analysis (GISTEMP).
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

export default GlobalTemperatur;
