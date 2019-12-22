/**
 *
 * HomeHero
 *
 * Organism
 */

import Hero from 'molecules/Hero';

import styled from 'styled-components';
import { ImageURL } from 'utils/getStatic';

const HomeHero = styled(Hero)`
  box-shadow: 0px 0px 20px 0px RGBA(39, 40, 43, 0.15);
  min-height: 60vh;
`;

HomeHero.defaultProps = {
  text: 'new arrivals',
  buttonText: 'Shop Now',
  imageSrc: ImageURL('hero'),
};

HomeHero.propTypes = {
  ...Hero.propTypes,
};

export default HomeHero;
