/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import Group from '../../components/Group/Group';
import EventList from '../../components/EventList/EventList';

const GroupPageContainer = () => {
  return (
    <div>
      <Group name="Blockchain Berlin" memberCount="100" country="Germany" region="Berlin" category="Blockchain" isAdmin={false} isMember={true}/>
      <br/>
      <EventList events={[{name: 'All about ETH', attendees: 10, maxAttendees: 100}, {name: 'Scaling Solutions', attendees: 20, maxAttendees: 50}]}/>
    </div>
  )
};

export default GroupPageContainer;