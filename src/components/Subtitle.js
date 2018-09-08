import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes, width } from '../styles.js'

const StyledSubtitle = styled.h2`
  text-decoration: none;
  color: ${colors.subtitle};
  font-size: ${fontSizes.subtitle};
  margin: 0;
  padding: 0;
  font-weight: 200;

  @media only screen and (max-width: ${width.mobile}) {
    font-size: ${fontSizes.subtitleMobile};
  }

`;

const Subtitle = ({ children, ...props }) => (
  <StyledSubtitle {...props}>{children}</StyledSubtitle>
);

Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Subtitle;
