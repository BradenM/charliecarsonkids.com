/**
 *
 * Authenticator Styled Components
 *
 * Organism
 */

import Text from 'atoms/Text';
import bsNav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import styled from 'styled-components';
import Color from 'utils/color';

export const TabContainer = styled(Tab.Container)``;

export const TabContent = styled(Tab.Content)``;

export const TabPane = styled(Tab.Pane)``;

export const Nav = styled(bsNav)`
  justify-content: space-around;
`;

export const NavItem = styled(bsNav.Item)`
  padding: 0.5rem 1rem;
`;

export const NavLink = styled(bsNav.Link)`
  position: relative;
  padding: 0;
  &[aria-selected='true'] {
    .tab-text {
      &:after {
        content: '';
        display: block;
        background-color: ${Color.pink.fade(0.1).string()};
        height: 6px;
        width: 100%;
        position: absolute;
      }
    }
  }
`;

export const NavText = styled(Text).attrs(() => ({
  font: 'GT Walsheim Regular',
  variant: 'h2',
  className: 'tab-text',
}))``;

export const Seperator = styled.div`
  width: 1px;
  height: 36px;
  background-color: ${Color.light.darken(0.3).string()};
`;
