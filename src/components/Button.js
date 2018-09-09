import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, width } from '../styles.js'

const StyledButton = styled.button`
  text-decoration: none;
  color: ${colors.white};
  background-color: ${({ disabled }) => disabled ? colors.light : colors.purple }
  border: none;
  border-radius: 3px;
  margin: 0;
  padding: 0;
  margin-top: 30px;
  font-weight: 300;
  outline: none !important;
  transition: all 0.1s ease;
  -webkit-transition: all 0.1s ease;
  -moz-transition: all 0.1s ease;
  -o-transition: all 0.1s ease;
  width: 90px;
  height: 55px;

  &:hover {
    background-color: ${({ disabled }) => disabled ? colors.light : colors.purpler }
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
