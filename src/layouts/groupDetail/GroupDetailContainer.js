/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import Group from '../../components/Group/Group';
import EventList from '../../components/EventList';
import Subtitle from '../../components/Subtitle';

const GroupDetailContainer = ({ location, onSelectEvent }) => {
  return (
    <div>
      <Group address={location.pathname} name="Blockchain Berlin" memberCount="100" country="Germany" region="Berlin" category="Blockchain" isAdmin={false} isMember={true}/>
      <br/>
      <Subtitle style={{ marginLeft: '15%' }}>Events:</Subtitle>
      <EventList events={[{name: 'All about ETH', attendees: 10, maxAttendees: 100}, {name: 'Scaling Solutions', attendees: 20, maxAttendees: 50}]} onSelectEvent={onSelectEvent} />
    </div>
  )
};

export default GroupDetailContainer;