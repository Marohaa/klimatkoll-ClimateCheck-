import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../navbar';
const  Utmaningar = () => {
  return ( <> 
  <NavBar />
    <Container >
      <Row>
        <Col>
          <h1 style={{ fontSize: 34, padding: 20 }}>Utmaningar</h1>
        </Col>
      </Row>

      <Row>
        <Col>
          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Gör en lista på hur din skola kan bli mer klimatsmart</strong><br />
            Skriv ner minst 15 saker som din skola kan göra för att minska sin klimatpåverkan.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Anordna en temadag om klimatet</strong><br />
            Välj ett ämne som handlar om klimatet och jobba med det en hel dag.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Gör en tipspromenad om klimatet</strong><br />
            Skriv ner minst 15 frågor som handlar om klimatet och låt dina klasskamrater besvara frågorna.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Ha en klädbytardag</strong><br />
            Samla in begagnade kläder som inte längre används och som någon annan kan ha nytta av.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Odla blommor och grönsaker på skolgården</strong><br />
            Odla minst en kvadratmeter stor yta. Välj gärna blommor som gynnar pollinerande insekter eller grönsaker som ni skördar.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Inför vegetarisk mat i skolan</strong><br />
            Försök att påverka så att ni får mer vegetarisk mat i skolan.
          </p>

          <p style={{ backgroundColor: '#4CAF83', color: 'white', borderRadius: '10px', fontSize: 16, border: 'none', padding: '10px' }}>
            <strong>Gör en lista på saker som är bra för miljön</strong><br />
            Skriv ner minst 20 saker som är bra för miljön. Fundera över vilka du själv kan använda dig av.
          </p>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Utmaningar;


