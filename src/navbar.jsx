import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, Outlet } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    // Använd useNavigate för att navigera till startsidan när logon klickas
    navigate('/components/home');
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#4CAF83', color: 'white' }}>
        <div className="container-fluid">
          <Navbar.Brand as={Link} to="/Home" style={{ color: 'white' }} onClick={handleLogoClick}>
            <img
              src="bilder/logo-to-klimatkoll.png"
              height="60"
              alt="klimatkoll Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mb-2 mb-lg-0" style={{ textAlign: 'center', color: 'white' }}>
              <Nav.Link as={Link} to="/globalTemperatur" style={{ color: 'white' }}>Global temperatur</Nav.Link>
              <Nav.Link as={Link} to="/Havsnivå" style={{ color: 'white' }}>Havsnivå</Nav.Link>
              <Nav.Link as={Link} to="/Glaciärer" style={{ color: 'white' }}>Glaciärer</Nav.Link>
              <Nav.Link href="#" style={{ color: 'white' }}>Quiz</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center text-reset hidden-arrow">
              <NavDropdown
                className="d-flex align-items-center m-2"
                title={
                  <img
                    src="bilder/persona.icon.png"
                    className="rounded-circle"
                    height="30"
                    alt="Black and White Portrait of a Man"
                    loading="lazy"
                  />
                }
                id="navbarDropdownMenuAvatar"
            
              >
                <NavDropdown.Item href="#" style={{ color: 'white', backgroundColor: '#4CAF83' }}>Min profil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login" style={{ color: 'white', backgroundColor: '#4CAF83' }}>
                  Logga ut
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <Outlet />
    </>
  );
};

export default NavBar;


