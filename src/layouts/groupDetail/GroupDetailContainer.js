/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import Group from '../../components/Group/Group';
import EventList from '../../components/EventList';
import Subtitle from '../../components/Subtitle';
import {withApollo, compose, graphql} from 'react-apollo';
import gql from 'graphql-tag';

const GroupDetailContainer = ({ location, onSelectEvent, error, loading, groupByEns }) => {
  return (
    <div>
      <Group address={location.pathname} name="Blockchain Berlin" memberCount="100" country="Germany" region="Berlin" category="Blockchain" isAdmin={false} isMember={true}/>
      <br/>
      <Subtitle style={{ marginLeft: '15%' }}>Events:</Subtitle>
      <EventList events={[{name: 'All about ETH', attendees: 10, maxAttendees: 100}, {name: 'Scaling Solutions', attendees: 20, maxAttendees: 50}]} onSelectEvent={onSelectEvent} />
    </div>
  )
};

const GroupByEnsQuery = gql`
  query groupsByEns($ens: String!)  {
      groups(where: {ens: $ens}) {
          name
          memberCount
          country
          region
          category
          events {
              name
              attendees
              maxAttendees
          }
      }
  }
`;

export default compose(
  withApollo,
  graphql(GroupByEnsQuery, {

  })
)(GroupDetailContainer)
