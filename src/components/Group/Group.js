/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon, Button} from 'react-bootstrap';



const Group = ({name, memberCount, country, region, category, isAdmin, isMember}) => {
  return (
    <div>
      <h1>{name}</h1>
      <div>The Logo</div>
      <h3><Glyphicon glyph="user" /> : {memberCount}</h3>
      <h3>{country + ' , ' + region}</h3>
      <h3>{category}</h3>
      {!isAdmin && !isMember ? <Button>Join</Button> : isAdmin ? <Button>Manage</Button> : null}
    </div>
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