/**
 * Created by will on 08/09/18.
 */
import React from 'react';

import Event from './Event';

const EventContainer = () => {
  return (
    <Event name={'All about ETH'} attendees={10} canJoin={false} maxAttendees={50} groupName={'Berlin Blockchain Meetup'}/>
  )
};

export default EventContainer;