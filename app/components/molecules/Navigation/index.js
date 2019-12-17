/**
 *
 * Navigation
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  .navbar {
    &-nav {
      letter-spacing: 0.15em;
      min-width: 75%;
    }
  }
`;

const NavLink = ({ text, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link>{text}</Nav.Link>
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
