import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'
import GroupController from '../GroupController/GroupController';

class Home extends Component {
  render() {
    return (
      <main className="container">
        <div>
          <h1 style={styles.h1Style}>Pick a group!</h1>
          <GroupController />
        </div>
      </main>
    )
  }
}


const styles = {
  h1Style: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 80
  }
};


export default Home
