/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import EventListItem from './EventListItem';

const EventList = ({events}) => {

  function onSelectEvent(address) {
    // TODO nav to event page and pass address
  }
  return (
    <div>
      {events.map((event) => {
        return <EventListItem name={event.name} attendees={event.attendees} maxAttendees={event.maxAttendees} onSelectEvent={() => this.onSelectEvent(event.address)}/>
      })}
    </div>
  )
};

export default EventList;