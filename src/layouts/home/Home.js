import React, { Component } from 'react'
import logo from '../../logo.png'
import GroupContainer from '../group/GroupContainer';

import Nav from '../../components/Nav.js'
import Header from '../../components/Header.js'
import Subheader from '../../components/Subheader.js'

class Home extends Component {
  
  componentDidMount() {
    const userHasSeenIntro = localStorage.getItem("userHasSeenIntro");
    if (!userHasSeenIntro) {
      this.props.history.push('/intro');
    }
  }

  render() {
    return (
      <div>
        <main className="container">
          <div>
            <Header>Discover</Header>
            <Subheader>Find groups that interest you</Subheader>
            <GroupContainer />
          </div>
        </main>
        <Nav current={0}/>
      </div>
    )
  }
}


export default Home
