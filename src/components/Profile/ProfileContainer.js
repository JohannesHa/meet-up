/**
 * Created by will on 08/09/18.
 */
import Profile from './Profile';
import { drizzleConnect } from 'drizzle-react'

const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    MeetupGroupFactory: state.contracts.MeetupGroupFactory,
    drizzleStatus: state.drizzleStatus,
  }
}

const ProfileContainer = drizzleConnect(Profile, mapStateToProps);

export default ProfileContainer;
