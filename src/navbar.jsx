import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Modal, Button } from "react-bootstrap";
import { Link, useNavigate, Outlet } from "react-router-dom";
import NavbarProfileImage from "./NavbarProfileImage";
import "bootstrap/dist/css/bootstrap.min.css";
import { auth } from "./firebase/firebase";
import "./navbar.css";
import Hamburger from "hamburger-react";
import { FaUserAlt } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import { BsX } from "react-icons/bs";

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
          <div className="container-fluid">
            <Navbar.Brand
              as={Link}
              to="/home"
              style={{ color: "white" }}
              onClick={handleLogoClick}
            >
              <img
                src="bilder/logo-to-klimatkoll.png"
                height="55"
                alt="klimatkoll Logo"
                loading="lazy"
              />
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              style={{ border: "none" }}
              onClick={handleToggleClick} // Handle toggle click to open modal directly
            >
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={20}
                color="white"
              />
              
            </Navbar.Toggle>

            <Navbar.Collapse
              id="responsive-navbar-nav"
              className={isOpen ? "show" : ""}
            >
              <Nav className="mx-auto d-none d-lg-flex">
                <NavDropdown
                  title={
                    <span className="dropdown-title" style={{ color: "white" }}>
                      Utbildning
                    </span>
                  }
                  id="collasible-nav-dropdown"
                  style={{ backgroundColor: "#4CAF83", color: "white" }}
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

                <ul className="navbar-nav ml-auto" style={{ color: "white" }}>
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
              </Nav>
            </Navbar.Collapse>
            <Nav className="ml-auto">
              {user ? (
                <NavDropdown
                  title={<NavbarProfileImage userId={user?.uid} />}
                  id="navbarDropdownMenuAvatar"
                  className="nav-link"
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
                  style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <FaUserAlt style={{ marginRight: "10px" }} /> Logga in
                </Nav.Link>
              )}
            </Nav>
          </div>
        </Navbar>
        {/* Outlet for nested routes */}
        <Outlet />
        {/* Responsive Modal */}
        <Modal show={showModal} fullscreen>
          <Modal.Body style={{ textAlign: "center", backgroundColor: "white" }}>
            <div style={{ position: "absolute", top: "10px", right: "10px" }}>
              <Button variant="light" onClick={handleModalClose}>
                <BsX size={20} color="black" />
              </Button>
            </div>
            <div style={{ textAlign: "center" }}>
              <span>Utbildning</span>
              <button
                className="btn btn-link"
                style={{ padding: 0, fontSize: "inherit", cursor: "pointer", color: "black" }}
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
                    className="nav-link"
                    onClick={handleModalClose}
                    style={{ display: "block", textAlign: "center", textDecoration: "none" }}
                  >
                    Global temperatur
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Havsnivå"
                    className="nav-link"
                    onClick={handleModalClose}
                    style={{ display: "block", textAlign: "center", textDecoration: "none" }}
                  >
                    Havsnivå
                  </Link>
                </li>
                <li>
                  <Link
                    to="/Glaciärer"
                    className="nav-link"
                    onClick={handleModalClose}
                    style={{ display: "block", textAlign: "center", textDecoration: "none" }}
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
              style={{ display: "block", textAlign: "center", textDecoration: "none", marginRight: "20px" }}
            >
              Utmaningar
            </Link>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default NavBar;



