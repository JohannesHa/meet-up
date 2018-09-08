import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '../styles.js'
import { Row, Col, ButtonGroup, Button, Glyphicon } from 'react-bootstrap'

const StyledNav = styled(Row)`
  text-decoration: none;
  background-color: ${colors.darker};
  margin: 0;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  padding: 20px;
`;

const StyledCol = styled(Col)`
  text-align: center;
`

const StyledButton = styled(Button)`
  width: 100%;
  background: transparent;
  color: ${colors.white}
  text-shadow: none;
  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  border: none;
  box-shadow: none;
  outline: none !important;

  &:hover {
    background-color: transparent;
    color: ${colors.white}
  }

  &:active {
    background-color: transparent !important;
    color: ${colors.status} !important;
  }

  &:focus {
    background: transparent;
    color: ${colors.white};
  }
`

const StyledPlusButton = styled(StyledButton)`
  background-color: ${colors.dark} !important;
  font-size: auto;

  &:active {
    background-color: ${colors.dark} !important;
  }
`

const Nav = ({ current, ...props }) => (
  <StyledNav {...props}>
    <StyledCol xs={2}>
      <StyledButton>
        <Glyphicon glyph="home" />
      </StyledButton>
    </StyledCol>
    <StyledCol xs={2}>
      <StyledButton>
        <Glyphicon glyph="globe" />
      </StyledButton>
    </StyledCol>
    <StyledCol xs={4}>
      <StyledPlusButton>
        <Glyphicon glyph="plus" />
      </StyledPlusButton>
    </StyledCol>
    <StyledCol xs={2}>
      <StyledButton>
        <Glyphicon glyph="search" />
      </StyledButton>
    </StyledCol>
    <StyledCol xs={2}>
      <StyledButton>
        <Glyphicon glyph="user" />
      </StyledButton>
    </StyledCol>
  </StyledNav>
);

Nav.propTypes = {
  current: PropTypes.number,
};

export default Nav;
