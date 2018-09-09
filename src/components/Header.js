import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, width } from '../styles.js';

const StyledHeader = styled.h1`
  text-decoration: none;
  color: ${colors.header};
  font-size: ${fontSizes.header};
  margin: 0;
  padding: 0;
  font-weight: 200;
  margin-bottom: 5px;
  text-align: center;

  @media only screen and (max-width: ${width.mobile}) {
    font-size: ${fontSizes.headerMobile};
  }
`;

const Header = ({ children, ...props }) => (
  <StyledHeader {...props}>{children}</StyledHeader>
);

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
