import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, fontSizes, width } from '../styles.js';

const StyledSubheader = styled.h2`
  text-decoration: none;
  color: ${colors.subheader};
  font-size: ${fontSizes.subheader};
  margin: 0;
  padding: 0;
  font-weight: 200;
  text-align: center;
  margin-bottom: 50px;

  @media only screen and (max-width: ${width.mobile}) {
    font-size: ${fontSizes.subheaderMobile};
  }
`;

const Subheader = ({ children, ...props }) => (
  <StyledSubheader {...props}>{children}</StyledSubheader>
);

Subheader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subheader;
