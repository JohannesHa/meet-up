/**
 * Created by will on 08/09/18.
 */
import Group from './Group';
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    MeetupGroupFactory: state.contracts.MeetupGroupFactory,
    drizzleStatus: state.drizzleStatus,
    name: state.name,
    memberCount: state.memberCount,
    country: state.country,
    region: state.region,
    category: state.category,
    isAdmin: state.isAdmin,
    isMember: state.isMember,
  }
}

const GroupContainer = drizzleConnect(Group, mapStateToProps);

export default GroupContainer;
