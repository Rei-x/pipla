import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'gatsby';
import DWGLogo from '@/static/images/logo_dwg.png';

const CustomNavbar = () => (
  <Navbar
    variant="dark"
    sticky="top"
    bg="body"
    expand="lg"
    className="shadow-lg"
  >
    <Container>
      <Navbar.Brand as={Link} to="/#home">
        Pipla +{` `}
        <img src={DWGLogo} alt="Logo dziewczynywgrze.pl" height="60px" />
        {` `}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/#wideo">
            Wideo
          </Nav.Link>
          <Nav.Link as={Link} to="/#portfolio">
            Portfolio
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default CustomNavbar;
