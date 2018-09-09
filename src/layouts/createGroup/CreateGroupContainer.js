import CreateGroup from './CreateGroup'
import { drizzleConnect } from 'drizzle-react'

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    GroupFactory: state.contracts.GroupFactory,
    // EnsDomain
    drizzleStatus: state.drizzleStatus
  }
}

const CreateGroupContainer = drizzleConnect(CreateGroup, mapStateToProps);

export default CreateGroupContainer
