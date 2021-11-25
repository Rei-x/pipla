import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import Gallery from '@/components/Gallery';
import Particles from '@/components/Particles';
import Video from '@/components/Video';
import Layout from '@/components/Layout';

const Home = () => (
  <Layout title="Pipla 🤪">
    <Container
      fluid
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center position-relative p-0 pb-5"
    >
      <Particles />
      <Fade>
        <p className="text-primary m-0">Nazywam się</p>
        <h1 className="big-heading">Dominika Jakubczyk</h1>
        <p>Zajmuje się grafiką 3D i freelancingiem</p>
        <UseAnimations
          className="mx-auto"
          animation={arrowDown}
          size={56}
          strokeColor="var(--bs-body-color)"
          loop
          autoplay
        />
      </Fade>
      <div className="clip-path-container">
        <div className="clip-path" />
      </div>
    </Container>
    <Fade>
      <Container id="wideo" className="wideo-container text-center py-5">
        <h1>Wideo</h1>
        <Video
          className="mt-4 rounded"
          url="https://www.youtube.com/embed/ETolPEfJUWg"
        />
      </Container>
    </Fade>
    <Fade cascade>
      <Container id="portfolio" className="text-center py-5">
        <h1>Portfolio</h1>
        <Container className="mt-3">
          <Gallery />
        </Container>
      </Container>
    </Fade>
  </Layout>
);

export default Home;
