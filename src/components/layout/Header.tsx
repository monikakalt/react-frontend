import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../../utils/styled'
import Container from './Container'

interface HeaderProps {
  title: string
}

const Wrapper = styled('header')`
  color: black;
  height: 70px;
  background: rgb(255, 255, 255, 0.2);
  backdrop-filter: blur(3.20553px);
  z-index: 1;
  font-family: ${props => props.theme.fonts.headings};
`

const HeaderInner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-width: 100%;
  @media (min-width: ${props => props.theme.breakpoints.lg}) {
    flex-direction: row;
  }
`

const HeaderLeft = styled('div')`
  width: 256px;
  margin-left: 11.42%;
`

const HeaderNav = styled('nav')`
  float: left;
  margin-right: 9%;
`

const HeaderNavLink = styled(NavLink)`
  margin: 0 1rem;

  &.is-active {
    text-decoration: underline;
  }

  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    margin-left: 10px;
  }
`

const Title = styled('h2')`
  font-family: Avenir;
  position: relative;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 41px;
  margin-top: 16px;
`

const Header: React.SFC<HeaderProps> = ({ title }) => (
  <Wrapper>
    <HeaderInner>
      <HeaderLeft>
        <Title>
          Y<u>our</u> Purpose.
        </Title>
      </HeaderLeft>
      <HeaderNav>
        <HeaderNavLink exact to="/" activeClassName="is-active">
          About Us
        </HeaderNavLink>
        <HeaderNavLink to="/heroes" activeClassName="is-active">
          Our Service Shop
        </HeaderNavLink>
        <HeaderNavLink to="/teams" activeClassName="is-active">
          Resources
        </HeaderNavLink>
        <HeaderNavLink to="/services" activeClassName="is-active">
          Join Us As A Partner
        </HeaderNavLink>
        <HeaderNavLink to="/myAccount" activeClassName="is-active">
          My Account
          <img src="../joinus.jpg" alt="" />
        </HeaderNavLink>
      </HeaderNav>
    </HeaderInner>
  </Wrapper>
)

export default Header
