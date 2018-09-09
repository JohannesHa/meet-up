import React, { Component } from 'react';

import Button from '../../components/Button.js';
import Title from '../../components/Title.js';

import introLock from '../../assets/intro-lock.png';

class Intro extends Component {
    constructor(props, context) {
        super(props, context);
        this.presentHomeSite = this.presentHomeSite.bind(this)
        this.state = {
            index: 0,
            direction: null
        };
    }

    presentHomeSite() {
        localStorage.setItem('userHasSeenIntro', JSON.stringify(true));
        this.props.history.push('/')
    }

    render() {

        return (
            <div style={styles.introWrapper}>
                <img src={introLock} style={styles.introImage} alt="Lock" />
                <div style={styles.textWrapper}>
                    <Title>Be rewarded for your appeareance</Title>
                    <p style={styles.descLabel}>We know it’s difficult to forecast the exact number of participants. 
                    That’s why you will be rewarded if you appear at the venue.
                    </p>
                </div>
                <Button onClick={this.presentHomeSite}>Ok, got it</Button>
            </div>

        )
    }
}

const styles = {
    introWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        padding: 40
    },
    introImage: {
        width: 200,
        height: 200
    },
    textWrapper: {
        textAlign: 'center',
        padding: 40
    },
    descLabel: {
        color: '#A1A4D3',
        fontSize: '1.3rem',
        paddingTop: 30
    }
};



export default Intro
