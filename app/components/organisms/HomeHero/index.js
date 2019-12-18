/**
 *
 * HomeHero
 *
 * Organism
 */

import Hero from 'molecules/Hero';
import React from 'react';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import { ImageURL } from 'utils/getStatic';

const HeroContainer = styled(Container)`
  width: 100%;
  .hero {
    box-shadow: 0px 0px 20px 0px RGBA(39, 40, 43, 0.15);
    min-height: 60vh;
  }
`;

const HeroProps = {
  text: 'new arrivals',
  buttonText: 'Shop Now',
  imageSrc: ImageURL('hero'),
  onButtonClick: () => {},
};

const HomeHero = () => (
  <HeroContainer>
    <Hero {...HeroProps} />
  </HeroContainer>
);

export default HomeHero;
