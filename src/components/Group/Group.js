/**
 * Created by will on 08/09/18.
 */
import React, { Component } from 'react';

import Header from '../Header'
import Subheader from '../Subheader'

class Group extends Component {

  render() {
    let address = this.props.address;
    if(this.props.name) {
      const { name, memberCount, category, country, region } = this.props;
      return (
        <main className="container">
          <div>
            <Header>{address}</Header>
            <Subheader>{name}</Subheader>
            <p style={styles.textLabel}>Members: {memberCount}</p>
            <p style={styles.textLabel}>Category: {category}</p>
            <p style={styles.textLabel}>Country: {country}</p>
            <p style={styles.textLabel}>Region: {region}</p>
          </div>
        </main>
      )
    }
    return (
      <main className="container">
        <div>
          <Header>{address}</Header>
          <Subheader>This group doesn't exist</Subheader>
        </div>
      </main>
    )
    
  }

};

const styles = {
  textLabel: {
    color: '#fff',
    fontSize: '1.2em'
  }
}

export default Group;
