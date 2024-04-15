import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavbarProfileImage from "./NavbarProfileImage";

import { auth } from "./firebase/firebase";

import { FaUserAlt } from "react-icons/fa";
const NavLinks = () => {
    return (
      <Nav className="mx-auto">
        <Link to="/utmaningar" className="nav-link">
          Utmaningar
        </Link>
        <Link to="/utbildning" className="nav-link">
          Utbildning
        </Link>
        {auth.currentUser ? (
          <NavbarProfileImage userId={auth.currentUser.uid} />
        ) : (
          <Link to="/login" className="nav-link">
            <FaUserAlt style={{ marginRight: "10px" }} /> Logga in
          </Link>
        )}
      </Nav>
    );
  };
  
  export default NavLinks;