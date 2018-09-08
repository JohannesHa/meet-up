import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fontSizes, width } from '../styles.js'

const StyledAddress = styled.h3`
  text-decoration: none;
  color: ${colors.subtitle};
  font-size: ${fontSizes.subtitle};
  margin: 0;
  margin-top: 30px;
  padding: 0;
  font-weight: 200;
  text-align: center;

  @media only screen and (max-width: ${width.mobile}) {
    font-size: ${fontSizes.subtitleMobile};
  }

`;

const Address = ({ children, ...props }) => (
  <StyledAddress {...props}>{children}</StyledAddress>
);

Address.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Address;
