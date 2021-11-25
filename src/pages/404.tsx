import React from 'react';
import Container from 'react-bootstrap/Container';
import Layout from '@/components/Layout';

const NotFound = () => (
  <Layout title="Nie znaleziono strony">
    <Container className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center">Sorki, ale ta strona nie istnieje 😥</div>
    </Container>
  </Layout>
);

export default NotFound;
