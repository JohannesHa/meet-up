/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import Group from '../../components/Group/Group';
import EventList from '../../components/EventList/EventList';
import {withApollo, compose, graphql} from 'react-apollo';
import gql from 'graphql-tag';



const GroupPageContainer = ({error, loading, groupByEns}) => {
  return (
    <div>
      <Group name="Blockchain Berlin" memberCount="100" country="Germany" region="Berlin" category="Blockchain" isAdmin={false} isMember={true}/>
      <br/>
      <EventList events={[{name: 'All about ETH', attendees: 10, maxAttendees: 100}, {name: 'Scaling Solutions', attendees: 20, maxAttendees: 50}]}/>
    </div>
  )
};



export default GroupPageContainer;


// GraphQL query by id (Group address in url)
// const GroupByEnsQuery = gql`
//   query groupByID($id: String!)  {
//       group(id: $id}) {
//           name
//           memberCount
//           country
//           region
//           category
//           events {
//               name
//               attendees
//               maxAttendees
//           }
//       }
//   }
// `;
//
//
//
// export default compose(
//   withApollo,
//   graphql(GroupByEnsQuery, {
//     options: (props) => ({
//       variables: {
//         id: props.location.pathname
//       }
//     }),
//   })
// )(GroupPageContainer)
