import React from "react";
import {  Card, Row, Col } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';

const Utbildning = () => {
  const cardData = [
    {
      id: 1,
      backgroundImage: "/bilder/temp.png",
      title: "Global temperatur",
      text: "Orsaker och effekter av klimatförändringar",
      link: "/GlobalTemperatur",
    },
    {
      id: 2,
      backgroundImage: "/bilder/sealevel.png",
      title: "Havsnivå",
      text: "Påverkan av jordens havsnivå till följd av klimatet",
      link: "/Havsnivå",
    },
    {
      id: 3,
      backgroundImage: "/bilder/glac.png",
      title: "Glaciärer",
      text: "Effekten av klimatförändringar på glaciärerna",
      link: "/Glaciärer",
    },
   
  ];

  return (
    <div className="p-2 m-2 Utbildning">
      <Row>
        {cardData.map((card) => (
          <Col key={card.id} md={6} className="mb-4">
            <a href={card.link} className="text-white text-decoration-none">
              <Card
                className="h-100"
                style={{
                  backgroundImage: `url(${card.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  border: 'none',
                  minHeight: '400px', // Set a minimum height
                  objectFit: 'cover',
                  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                }}
              >
                <Card.Body className="text-white d-flex flex-column justify-content-end">
                  <h2 className="mb-2" style={{ fontSize: '30px', fontWeight: 'bold' }}>{card.title}</h2>
                  <p className="mb-3" style={{ fontSize: '20px' }}>{card.text} <FaArrowRight /></p>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </div>
    
  );
};

export default Utbildning;
