import React from 'react';
import Particles from 'react-tsparticles';

const Hero = () => (
  <Particles
    id="tsparticles"
    canvasClassName="vh-100 position-absolute"
    options={{
      background: {
        color: {
          value: `var(--bs-body-bg)`,
        },
      },
      fpsLimit: 60,
      particles: {
        color: {
          value: `#ffffff`,
        },
        links: {
          color: `#ffffff`,
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: `none`,
          enable: true,
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.1,
        },
        shape: {
          type: `circle`,
        },
        size: {
          random: true,
          value: 5,
        },
      },
      detectRetina: true,
    }}
  />
);

export default Hero;
