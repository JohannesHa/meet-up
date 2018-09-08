import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding: 0;
`;

const Title = ({ children, ...props }) => (
  <StyledTitle {...props}>{children}</StyledTitle>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Title;
