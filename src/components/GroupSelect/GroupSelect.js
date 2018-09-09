import React, { Component } from 'react';
import { Carousel, Grid, Row, Col } from 'react-bootstrap';
import weirdPeopleLookingOnAScreenImage from '../../assets/weirdPeopleLookingOnAScreen.jpg';
import codingMeetupImage from '../../assets/codingMeetup.jpg';
import peopleChillingImage from '../../assets/peopleChilling.jpg';

import Button from '../../components/Button';
import Title from '../../components/Title';
import Subtitle from '../../components/Subtitle';

class GroupSelect extends Component {
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

    groupGrid(groupName, groupLocation) {
        return (<Grid style={styles.gridStyle}>
            <Row style={styles.rowStyle}>
                <Col xs={9} style={styles.colStyle}>
                    <Title style={styles.groupNameLabel}>{groupName}</Title>
                    <Subtitle style={styles.groupLocationLabel}>{groupLocation}</Subtitle>
                </Col>
                <Col xs={3} style={styles.colStyle}>
                    <Button
                        onClick={this.joinGroup}
                        style={styles.joinButtonStyle}>
                        Join
                            </Button>
                </Col>
            </Row>
        </Grid>);
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
                        {this.groupGrid("ETHBerlin", "Berlin, Germany")}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles.groupImageStyle} width={900} height={500} src={weirdPeopleLookingOnAScreenImage} />
                        {this.groupGrid("LedgerZ", "Berlin, Germany")}
                    </Carousel.Item>
                    <Carousel.Item>
                        <img style={styles.groupImageStyle} width={900} height={500} alt="900x500" src={peopleChillingImage} />
                        {this.groupGrid("Base58", "Berlin, Germany")}
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

const styles = {
    groupNameLabel: {
        textAlign: 'left',
        marginTop: 30,
        color: '#ffffff'
    },
    groupImageStyle: {
        borderRadius: 10
    },
    joinButtonStyle: {
        float: 'right'
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



export default GroupSelect
