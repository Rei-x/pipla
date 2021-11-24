import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
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
      <Navbar.Brand href="#home">
        Pipla +{' '}
        <img src={DWGLogo} alt="Logo dziewczynywgrze.pl" height="60px" />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#wideo">Wideo</Nav.Link>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default CustomNavbar;
