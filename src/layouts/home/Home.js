import React, { Component } from 'react'
import { AccountData, ContractData, ContractForm } from 'drizzle-react-components'
import logo from '../../logo.png'
import GroupController from '../GroupController/GroupController';

import Nav from '../../components/Nav.js'
import Header from '../../components/Header.js'
import Subheader from '../../components/Subheader.js'

class Home extends Component {
  render() {
    return (
      <div>
        <main className="container">
          <div>
            <Header>Discover</Header>
            <Subheader>Find groups that interest you</Subheader>
            <GroupController />
          </div>
        </main>
        <Nav current={0}/>
      </div>
    )
  }
}


export default Home
