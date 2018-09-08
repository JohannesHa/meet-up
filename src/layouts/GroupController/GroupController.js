import React, { Component } from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import weirdPeopleLookingOnAScreenImage from '../../assets/weirdPeopleLookingOnAScreen.jpg';
import codingMeetupImage from '../../assets/codingMeetup.jpg';
import peopleChillingImage from '../../assets/peopleChilling.jpg';

class GroupController extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    joinGroup() {
        console.log("user wants to join group");
    }

    render() {

        const { index, direction } = this.state;

        return (
            <div>
                <Carousel
                    activeIndex={index}
                    direction={direction}
                    onSelect={this.handleSelect}
                    indicators={false}>
                    <Carousel.Item>
                        <img style={styles.groupImageStyle} width={900} height={500} alt="900x500" src={codingMeetupImage} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles.groupImageStyle} width={900} height={500} src={weirdPeopleLookingOnAScreenImage} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles.groupImageStyle} width={900} height={500} alt="900x500" src={peopleChillingImage} />
                    </Carousel.Item>
                </Carousel>
                <Grid style={styles.gridStyle}>
                    <Row style={styles.rowStyle}>
                        <Col xs={9} style={styles.colStyle}>
                            <h2 style={styles.groupNameLabel}>ETH Berlin</h2>
                            <label style={styles.groupLocationLabel}>Berlin, Germany</label>
                        </Col>
                        <Col xs={3} style={styles.colStyle}>
                            <button
                                onClick={this.joinGroup}
                                style={styles.joinButtonStyle}>
                                Join
                        </button>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

const styles = {
    groupNameLabel: {
        color: '#ffffff',
        textAlign: 'left'
    },
    groupLocationLabel: {
        fontSize: 12,
        color: '#d3d3d3'
    },
    groupImageStyle: {
        borderRadius: 10
    },
    joinButtonStyle: {
        marginTop: 30,
        borderRadius: 3,
        borderWidth: 0,
        backgroundColor: '#7B40FF',
        width: 90,
        height: 35,
        color: '#ffffff'
    },
    gridStyle: {
        paddingTop: 0,
        paddingRight: 0,
        paddingLeft: 0
    },
    rowStyle: {
        marginLeft: 0,
        marginRight: 0
    },
    colStyle: {
        paddingLeft: 0,
        paddingRight: 0
    }
};



export default GroupController