import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, width } from '../styles.js'

const StyledButton = styled.button`
  text-decoration: none;
  color: ${colors.subtitle};
  background-color: ${colors.purple} !important;
  margin: 0;
  padding: 0;
  font-weight: 300;
  outline: none !important;
  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  height: 55px;

  &:hover {
    background-color: ${colors.purpler} !important;
  }

  &:active {
    margin-top: 32px !important;
    background-color: ${colors.purplest} !important;
  }

  @media only screen and (max-width: ${width.mobile}) {
    height: 35px;
  }
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
