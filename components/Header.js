import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-header" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home">Your Company Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Align the Nav links to the right using ms-auto */}
          <Nav className="ms-auto" style={{ gap: "10px" }}>
            <Nav.Link href="#home">
              <i style={{ marginRight: "5px" }} class="fa-solid fa-globe"></i>
              English
            </Nav.Link>
            <Nav.Link href="#pricing1">Support</Nav.Link>
            <Nav.Link href="#pricing2">Trips</Nav.Link>
            <Nav.Link href="#pricing2">
              <i class="fa-solid fa-message"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
