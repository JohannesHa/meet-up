import React, { Component } from 'react';
var QRCode = require('qrcode.react');
//import EtherumQRCode from 'react-ether-qrcode';

class ProfileContainer extends Component {

    render() {
        return (
            <main className="container">
                <div>
                    <h1 style={styles.h1Style}>Your Profile 🤓</h1>
                    <h6 style={styles.h1Style}>Show this code to the organiser of your next Meetup</h6>
                    <div class="qr-code-card">
                        <div class="center">
                            <QRCode class="qrcode" value="0x0A8dF54352eB4Eb6b18d0057B15009732EfB351c" />
                        </div>
                    </div>
                </div>
            </main>
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
    },
    qrCodeBorder: {
        width: '40%',
        borderWidth: 20,
        borderRadius: 15,
        backgroundColor: '#ffffff'
    }
};


export default ProfileContainer
