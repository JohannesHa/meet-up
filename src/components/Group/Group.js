/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Group = ({name, memberCount, country, region, category, isAdmin, isMember}) => {
  return (
    <div></div>
  )
};

Group.propTypes = {
  name: PropTypes.string.isRequired,
  memberCount: PropTypes.number.isRequired,
  country: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  isAdmin: PropTypes.string.isRequired,
  isMember: PropTypes.bool.isRequired
};

export default Group;