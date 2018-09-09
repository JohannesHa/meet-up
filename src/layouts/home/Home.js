import React, { Component } from 'react'
import GroupSelectContainer from '../../components/GroupSelect/GroupSelectContainer';
import JoinedGroupsListContainer from '../joinedGroupsList/JoinedGroupsListContainer';

import Nav from '../../components/Nav.js'
import Header from '../../components/Header.js'
import Subheader from '../../components/Subheader.js'
import Title from '../../components/Title';

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
            <GroupSelectContainer />
            <div style={styles.clearfix}></div>
            <div style={styles.joinedGroupsWrapper}>
              <Title>Your joined groups</Title>
              <JoinedGroupsListContainer />
            </div>
          </div>
        </main>
        <Nav current={0} />
      </div>
    )
  }
}

const styles = {
  clearfix: {
    height: 60,
  },
  joinedGroupsWrapper: {
  }
}


export default Home
