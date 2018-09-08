/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import {Glyphicon} from 'react-bootstrap';

const EventListItem = ({name, attendees, maxAttendees, onSelectEvent}) => {
  return (<div onClick={onSelectEvent}>
    <h2>{name}</h2>
    <span><Glyphicon glyph="user" />{attendees + '/' + maxAttendees}</span>
  </div>)
};

export default EventListItem;