import React from 'react';
import Container from 'react-bootstrap/Container';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode; title: string }> = ({
  children,
  title,
}) => (
  <Container className="p-0" fluid>
    <Helmet title={title} htmlAttributes={{ lang: `pl` }}>
      <meta
        name="description"
        content="Dominika Jakubczyk - strona konkursowa"
      />
      <meta
        name="keywords"
        content="Dominika Jakubczyk, dziewczynywgrze.pl, 3D graphics"
      />
      <meta name="author" content="Bartosz Gotowski - dobry kolega pipli" />
    </Helmet>
    <Navbar />
    {children}
  </Container>
);

export default Layout;
