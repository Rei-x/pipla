import React from 'react';
import Container from 'react-bootstrap/Container';
import GithubLogo from '@/static/images/github_logo.png';

const Footer = () => (
  <Container className="text-center">
    <p className="text-muted">
      Made by{` `}
      <a
        target="_blank"
        href="https://github.com/Rei-x"
        rel="noreferrer"
        className="text-decoration-none"
      >
        Rei
      </a>
      {` `}
      <a href="https://github.com/Rei-x/pipla" target="_blank" rel="noreferrer">
        <img
          src={GithubLogo}
          alt="Github Logo"
          height="30px"
          className="ms-2"
        />
      </a>
    </p>
  </Container>
);

export default Footer;
