import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Container, Image } from 'react-bootstrap';
import UseAnimations from 'react-useanimations';
import arrowDown from 'react-useanimations/lib/arrowDown';
import Video from '@/components/Video';
import Particles from '@/components/Particles';
import Navbar from '@/components/Navbar';

const Home = () => (
  <Container className="text-center p-0" fluid>
    <Navbar />
    <Container
      fluid
      id="home"
      className="hero d-flex flex-column justify-content-center align-items-center position-relative p-0 pb-5"
    >
      <Particles />
      <Fade>
        <p className="text-primary m-0">Nazywam się</p>
        <h1 className="big-heading">Dominika Jakubczyk</h1>
        <p>Zajmuje się grafiką 3D, freelancingiem i głaskaniem piesków 🐶</p>
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
      <Container id="wideo" className="wideo-container py-5">
        <h1>Wideo</h1>
        <Video
          className="mt-4 rounded"
          url="https://www.youtube.com/embed/bpOSxM0rNPM"
        />
      </Container>
    </Fade>
    <Fade cascade>
      <Container id="portfolio" className="py-5">
        <h1>Portfolio</h1>
        <Container className="mt-3">
          {Array.from(Array(10).keys()).map((key) => (
            <Image
              className="m-1 rounded"
              key={key}
              src={`https://picsum.photos/400?random=${key}`}
            />
          ))}
        </Container>
      </Container>
    </Fade>
  </Container>
);

export default Home;
