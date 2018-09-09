import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import { AccountData } from 'drizzle-react-components'
import { Row, Col } from 'react-bootstrap';
//import EtherumQRCode from 'react-ether-qrcode';

import Header from '../Header.js'
import Subheader from '../Subheader.js'
import Nav from '../Nav.js'
import Address from '../Address.js'

class Profile extends Component {

    render() {
        return (
          <div>
            <main className="container">
                <Row>
                  <Col xs={12}>
                    <Header>Your Profile</Header>
                    <Subheader>Show this to your next event organiser</Subheader>
                    <div className="qr-code-card">
                      <QRCode className="qrcode" value={this.props.accounts[0]} />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <Address>{this.props.accounts[0]}</Address>
                  </Col>
                </Row>

            </main>
            <Nav current={3}/>
          </div>
        )
    }
}


const styles = {
    h1Style: {
        color: '#ffffff',
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: 200,
    },
    h6Style: {
        color: '#d3d3d3',
        textAlign: 'center',
        marginBottom: 70,
        fontWeight: 200,
    }
};


export default Profile
