import React from "react";
import { Container, Navbar, Form, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo/ideal.png";

export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex flex-grow-1" style={{ maxWidth: "900px" }}>
            <Form.Control
              type="search"
              placeholder="Search for ice creams 🍨"
              className="me-2"
              style={{ width: "100%" }}
            />
          </Form>
          <Nav className="d-flex flex-wrap">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="text-white">
              Menu
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="text-white">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/location" className="text-white">
              Location
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" className="text-white">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/signin" className="text-white">
              Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

