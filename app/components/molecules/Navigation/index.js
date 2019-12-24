/**
 *
 * Navigation
 *
 * Molecule
 */

import A from 'atoms/A';
import PropTypes from 'prop-types';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import { Color } from '../../../global-styles';

const StyledNavbar = styled(Navbar)`
  .navbar {
    &-nav {
      letter-spacing: 0.15em;
      min-width: 75%;
    }
  }
`;

const StyledLink = styled(A)`
  &.navlink {
    color: var(--dark) !important;
    transition: color 250ms ease-in-out;
    text-transform: uppercase;
    font-weight: 600;
    &:hover {
      color: ${props => props.color.string()} !important;
    }
  }
`;

const NavLink = ({ text, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link
      className="navlink"
      as={StyledLink}
      color={Color('primary').darken(0.15)}
    >
      {text}
    </Nav.Link>
  </LinkContainer>
);

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
};

const Navigation = () => (
  <StyledNavbar collapseOnSelect expand="lg" variant="light">
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="m-auto justify-content-around">
        <NavLink to="new" text="new" />
        <NavLink to="boys" text="boys" />
        <NavLink to="girls" text="girls" />
        <NavLink to="baby" text="baby" />
        <NavLink to="collections" text="collections" />
        <NavLink to="about" text="about" />
      </Nav>
    </Navbar.Collapse>
  </StyledNavbar>
);

Navigation.propTypes = {};

export default Navigation;
