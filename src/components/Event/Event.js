/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const Event = ({name, groupName, canAttend, attendees, maxAttendees, isAdmin, isAttending}) => {
  return (
    <div>

    </div>
  )
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  groupName: PropTypes.string.isRequired,
  canJoin: PropTypes.bool.isRequired,
  attendees: PropTypes.number.isRequired,
  maxAttendees: PropTypes.number.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  isAttending: PropTypes.bool.isRequired
};

export default Event;