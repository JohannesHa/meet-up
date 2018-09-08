import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'
import GroupController from '../GroupController/GroupController';

import Nav from '../../components/Nav.js'

class Home extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <div>
            <h1 style={styles.h1Style}>Pick a group!</h1>
            <GroupController />
          </div>
        </main>
        <Nav current={0}/>
      </div>
    )
  }
}


const styles = {
  h1Style: {
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 80,
    fontWeight: 200,
  }
};


export default Home
