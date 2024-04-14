import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import NavbarProfileImage from './NavbarProfileImage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from './firebase/firebase';
import './navbar.css';
import Hamburger from 'hamburger-react';
import { FaUserAlt } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const getCurrentUser = () => {
    const user = auth.currentUser;
    return user ? { uid: user.uid } : null;
  };

  const user = getCurrentUser();

  const handleLogoClick = () => {
    navigate('/home');
  };

  return (
    <>
  <header>
      <Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#4CAF83', color: 'white' }}>
        <div className="container-fluid" style={{ backgroundColor: '#4CAF83', color: 'white', marginRight: "10px" }}>
          <Navbar.Brand as={Link} to="/home" style={{ color: 'white' }} onClick={handleLogoClick}>
            <img
              src="bilder/logo-to-klimatkoll.png"
              height="55"
              alt="klimatkoll Logo"
              loading="lazy"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{ border: 'none' }}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={20} />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className={isOpen ? 'show' : ''}>
            <Nav className="mb-2 mb-lg-0 mx-auto" style={{ color: 'white' }}>
              <Nav.Link as={Link} to="/globalTemperatur" style={{ color: 'white' }}>Global temperatur</Nav.Link>
              <Nav.Link as={Link} to="/Havsnivå" style={{ color: 'white' }}>Havsnivå</Nav.Link>
              <Nav.Link as={Link} to="/Glaciärer" style={{ color: 'white' }}>Glaciärer</Nav.Link>
              <Nav.Link as={Link} to="/utmaningar" style={{ color: 'white' }}>Utmaningar</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Nav className="ml-auto" style={{ color: 'white' }}>
            {user ? (
              <NavDropdown
                title={<NavbarProfileImage userId={user?.uid} />}
                id="navbarDropdownMenuAvatar" className="nav-link"
              >
                <NavDropdown.Item as={Link} to="/profil">Min profil</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login" onClick={() => auth.signOut()}>
                  Logga ut
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link as={Link} to="/login" style={{ color: 'white' }}>
                <FaUserAlt className='ml-1' /> Logga in
              </Nav.Link>
            )}
          </Nav>
        </div>
      </Navbar>
      {/* Outlet for nested routes */}
      <Outlet />
      </header>
    </>
  );
};

export default NavBar;





