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
  padding-top: 0;
  padding-bottom: 0;
  .navbar {
    padding-top: 0;
    &-nav {
      .nav-link {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: 0.875rem;
      }
      letter-spacing: 0.15em;
    }
  }
`;

const StyledLink = styled(A)`
  &.navlink {
    color: var(--dark) !important;
    transition: color 250ms ease-in-out;
    text-transform: capitalize;
    font-weight: 100;
    &:hover {
      color: ${props => props.color.string()} !important;
    }
  }
`;

export const StyledUnderlineLink = styled(A)`
  &.navlink {
    color: var(--dark) !important;
    font-weight: 400;
    padding: 0;
    text-transform: uppercase;
    transition: color 250ms ease-in-out;
    font-size: 0.75rem;
  }

  &:after {
    content: '';
    width: 100%;
    height: 7px;
    background-color: var(--dark);
    display: block;
    position: relative;
    transition: background-color 250ms ease-in-out;
  }

  &:hover {
    &:after {
      background-color: ${Color('nude').toString()};
    }
  }
`;

export const NavLink = ({ text, type, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link
      className="navlink p my-0"
      as={type === 'normal' ? StyledLink : StyledUnderlineLink}
      color={Color('primary').darken(0.15)}
    >
      {text}
    </Nav.Link>
  </LinkContainer>
);

NavLink.defaultProps = {
  type: 'normal',
};

NavLink.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['normal', 'alt']),
};

const Navigation = () => (
  <StyledNavbar
    collapseOnSelect
    expand="lg"
    variant="light"
    className="justify-content-center"
  >
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse
      id="responsive-navbar-nav"
      className="navbar-btn-container justify-content-center"
    >
      <Nav className="justify-content-center">
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
