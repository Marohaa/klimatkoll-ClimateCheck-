import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";
import NavbarProfileImage from "./NavbarProfileImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebase/firebase";
import "./navbar.css";

import { FaUserAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BsX } from "react-icons/bs";
import { BsList } from "react-icons/bs";

const NavBar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Manually manage dropdown state
  const [showModal, setShowModal] = useState(false); // State to control modal visibility

  const getCurrentUser = () => {
    const user = auth.currentUser;
    return user ? { uid: user.uid } : null;
  };

  const user = getCurrentUser();

  const handleLogoClick = () => {
    navigate("/home");
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const handleToggleClick = () => {
    setOpen(!isOpen);
    setShowModal(true); // Open modal when navbar toggle is clicked
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          expand="lg"
          style={{ backgroundColor: "#4CAF83", color: "white" }}
        >
          <div className="container-fluid d-flex justify-content-between align-items-center p-3">
            <div>
              <Navbar.Brand
                as={Link}
                to="/home"
                style={{ color: "white" }}
                onClick={handleLogoClick}
              >
                <img
                  src="bilder/logo-to-klimatkoll.png"
                  height="60"
                  alt="klimatkoll Logo"
                  loading="lazy"
                />
              </Navbar.Brand>
            </div>

            <div>
              <Nav className="mx-auto d-none d-lg-flex ">
              <NavDropdown
  title={
    <div className="dropdown-title" style={{ color: "white" }}>
      Utbildning
      <button
        className="btn btn-link" 
        style={{
         
          padding: 0,
          fontSize: "inherit",
          cursor: "pointer",
          color: "white",
          marginLeft: "3px", // Flytta pilen från titeln
        }}
        onClick={() => setDropdownOpen(!isDropdownOpen)}
      >
        <SlArrowDown />
      </button>
    </div>
  }
  id="collasible-nav-dropdown"
  style={{ backgroundColor: "#4CAF83", color: "white", fontWeight: "bold" }}
  show={isDropdownOpen} // Show the dropdown based on manually managed state
  onMouseEnter={handleMouseEnter} // Open dropdown on mouseover
  onMouseLeave={handleMouseLeave} // Close dropdown on mouse leave
>
 

                  <NavDropdown.Item as={Link} to="/globalTemperatur">
                    Global temperatur
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Havsnivå">
                    Havsnivå
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/Glaciärer">
                    Glaciärer
                  </NavDropdown.Item>
                </NavDropdown>

                <ul className="navbar-nav ml-auto" style={{ color: "white",fontWeight:'bold' }}>
                  <li className="nav-item">
                    <Link
                      to="/utmaningar"
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Utmaningar
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto" style={{ color: "white",fontWeight:'bold' }}>
                  <li className="nav-item">
                    <Link
                      to="/om oss"
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Om oss
                    </Link>
                  </li>
                </ul>
                <ul className="navbar-nav ml-auto" style={{ color: "white", fontWeight:'bold' }}>
                  <li className="nav-item">
                    <Link
                      to="/kontakt"
                      className="nav-link"
                      style={{ color: "white" }}
                    >
                      Kontakt
                    </Link>
                  </li>
                </ul>
              </Nav>
            </div>

            <div
              className="d-flex align-items-center"
              style={{ margin: "7px" }}
            >
              {user ? (
                <NavDropdown
                  drop="start"
                  className="no-arrow "
                  title={
                    <NavbarProfileImage
                      userId={user?.uid}
                      className="m-2 p-2"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item as={Link} to="/profil">
                    Min profil
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/login"
                    onClick={() => auth.signOut()}
                  >
                    Logga ut
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  to="/login"
                  style={{ padding:'5px',
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaUserAlt style={{ marginRight: "10px" }} /> Logga in
                </Nav.Link>
              )}

              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  outline: "none",
                  cursor: "pointer",
                }}
                onClick={handleToggleClick} // Handle toggle click to open modal directly
              >
                <BsList size={20} color="white" />
              </Navbar.Toggle>
            </div>
          </div>
        </Navbar>

        {/* Outlet for nested routes */}
        <Outlet />
        {/* Responsive Modal */}
        <Modal show={showModal} fullscreen>
          <Modal.Body
            style={{
              textAlign: "center",
              backgroundColor: "white",
              paddingTop: "10%",
              fontSize: "18px",
            }}
          >
            <div style={{ position: "absolute", top: "20px", right: "5%" }}>
              <Button
                variant="light"
                onClick={handleModalClose}
                style={{ border: "none", background: "none" }} // Lägg till CSS-stilar för att ta bort bakgrundsfärg och border
              >
                <BsX size={30} color="black" />
              </Button>
            </div>

            <div style={{ textAlign: "center" }}>
              <span>Utbildning</span>
              <button
                className="btn btn-link"
                style={{
                  padding: 0,
                  fontSize: "inherit",
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={() => setDropdownOpen(!isDropdownOpen)}
              >
                <SlArrowDown style={{ marginLeft: "10px" }} />
              </button>
            </div>
            {isDropdownOpen && (
              <ul style={{ listStyleType: "none", padding: 0 }}>
                <li>
                  <Link
                    to="/globalTemperatur"
                    className="nav-link p-1"
                    onClick={handleModalClose}
                    style={{
                      display: "block",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Global temperatur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Havsnivå"
                    className="nav-link p-1"
                    onClick={handleModalClose}
                    style={{
                      display: "block",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Havsnivå
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Glaciärer"
                    className="nav-link p-1"
                    onClick={handleModalClose}
                    style={{
                      display: "block",
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                  >
                    Glaciärer
                  </Link>
                </li>
              </ul>
            )}
            <Link
              to="/utmaningar"
              className="nav-link"
              onClick={handleModalClose}
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Utmaningar
            </Link>
            <Link
              to="/om oss"
              className="nav-link"
              onClick={handleModalClose}
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Om oss
            </Link>
            <Link
              to="/kontakt"
              className="nav-link"
              onClick={handleModalClose}
              style={{
                display: "block",
                textAlign: "center",
                textDecoration: "none",
                marginRight: "20px",
              }}
            >
              Kontakt
            </Link>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default NavBar;
