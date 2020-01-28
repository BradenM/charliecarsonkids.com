/**
 *
 * Navigation
 *
 * Molecule
 */

import { useQuery } from '@apollo/react-hooks';
import { GetNavigationMenus } from 'api/queries/menus.graphql';
import A from 'atoms/A';
import PropTypes from 'prop-types';
import React from 'react';
import { fadeIn } from 'react-animations';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import styled, { keyframes } from 'styled-components';
import Color from 'utils/color';

const fadeInK = keyframes`${fadeIn}`;

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
        position: relative;
        &:after {
          content: '';
          position: absolute;
          display: block;
          height: 3px;
          left: 13%;
          background-color: var(--dark);
          bottom: -0.67rem;
        }
        &:hover {
          &:after {
            width: 75%;
            animation: 1s ${fadeInK};
          }
        }
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
      background-color: ${Color.nude.string()};
    }
  }
`;

export const NavLink = ({ text, type, ...props }) => (
  <LinkContainer {...props}>
    <Nav.Link
      className="navlink py-0 my-0"
      as={type === 'normal' ? StyledLink : StyledUnderlineLink}
      color={Color.primary.darken(0.15)}
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

const Navigation = () => {
  const { data } = useQuery(GetNavigationMenus);
  return (
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
        <Nav className="justify-content-center py-2">
          {data?.shop.navigation.main.items.map(({ id, name, category }) => (
            <NavLink
              to={{
                pathname: `/category/${category?.slug}`,
                state: {
                  categoryId: category?.id,
                },
              }}
              text={name}
              key={id}
            />
          ))}
        </Nav>
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

Navigation.propTypes = {};

export default Navigation;
