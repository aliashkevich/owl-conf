import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import {primary} from '../styles/styles';

const Wrapper = styled.header`
  display: flex;
  border: none;
  color: black;
  justify-content: center;
  height: 72px;
  background-color: transparent;

  margin-bottom: 40px;
  padding-bottom: 5px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

const NavItem = styled.div`
  color: #2e2d88;
  font-size: 20px;
  padding: 20px;
  font-weight: 500;
  text-transform: capitalize;
  :hover {
    opacity: 0.5;
  }
`;

const NavList = styled.ul`
  /* Reset list styles */
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
`;

const activeClassName = 'active';
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  text-decoration: none;
  color: #5f6368;
  font-size: 18px;
  font-weight: 500;
  text-transform: capitalize;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: border-bottom 0.2s;
  transition-timing-function: ease;
  :hover {
    opacity: 0.5;
  }
  &.${activeClassName} {
    border-bottom: 5px solid ${primary};
    :hover {
      opacity: 1;
    }
  }
`;

const Header = styled.a`
  text-decoration: none;
  color: #2e2d88;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
  :hover {
    opacity: 0.5;
  }
`;

export default class Nav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <HeaderContainer>
            <Header href='/'>Owl Conference</Header>
            <NavList>
              <NavItem href='/'>About</NavItem>
              <NavItem href='/'>Speakers</NavItem>
              <NavItem href='/'>Schedule</NavItem>
              <NavItem href='/'>Map</NavItem>
            </NavList>
          </HeaderContainer>
        </Wrapper>
      </React.Fragment>
    );
  }
}
