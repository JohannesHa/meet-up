/**
 * Created by will on 08/09/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AccountData } from 'drizzle-react-components'

import Header from '../Header'
import Subheader from '../Subheader'

class Group extends Component {

  render() {
    let ens = this.props.location.pathname.substring(1);
    return (
      <main className="container">
        <div>
          <Header>{ens}</Header>
          <Subheader>This group doesn't exist</Subheader>
        </div>
      </main>
    )
  }

};

export default Group;
