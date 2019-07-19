import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import owl_icon from '../images/owl_icon.png';
import {primary} from '../styles/styles';
import './Header.css';

const Wrapper = styled.header`
  display: flex;
  border: none;
  color: white;
  justify-content: center;
  height: 65px;
  background: linear-gradient(to right, #4568dc, #b06ab3);
  opacity: 0.85;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 99;
  border-radius: 5px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 960px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
`;

const NavItem = styled.div`
  color: #0000000;
  font-size: 25px;
  padding: 20px;
  display: flex;
  align-items: center;
  font-weight: 400;
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
  color: #000000;
  font-size: 25px;
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
            <NavList>
              <NavItem>
                <img className='owl_icon' src={owl_icon} alt='owl icon' />
              </NavItem>
              <NavItem href='/'>Home</NavItem>
              <NavItem href='/'>Speakers</NavItem>
              <NavItem href='/'>Schedule</NavItem>
              <NavItem href='/'>Map</NavItem>
              <NavItem href='/'>Jobs</NavItem>
            </NavList>
          </HeaderContainer>
        </Wrapper>
      </React.Fragment>
    );
  }
}
