import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, width } from '../styles.js';

const StyledTitle = styled.h1`
  text-decoration: none;
  color: ${colors.title};
  font-size: ${fontSizes.title};
  margin: 0;
  padding: 0;

  @media only screen and (max-width: ${width.mobile}) {
    font-size: ${fontSizes.titleMobile};
  }
`;

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
