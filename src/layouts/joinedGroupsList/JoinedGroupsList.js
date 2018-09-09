/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import blockchainImg from '../../assets/codingMeetup.jpg';
import artImg from '../../assets/artMeetup.jpg';
import runningImg from '../../assets/runningMeetup.jpg';
import sportImg from '../../assets/sportMeetup.jpg';
import drinkingImg from '../../assets/drinkingMeetup.jpg';

const JoinedGroupsList = ({ groups, onSelectGroup }) => {
  var i = 0;
  var backgroundImages = [blockchainImg, artImg, runningImg, sportImg, drinkingImg];

  return (
    <div>
      <Grid>
        {groups.map((group) => {
          i += 1;
          return <Row key={i}>
            <Col xs={12} style={{
              backgroundImage: `url(${backgroundImages[i - 1]})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              borderRadius: 15,
              marginTop: 10,
              marginBottom: 10,
              marginLeft: 10,
              marginRight: 10
            }}>
              <h3 style={styles.groupName} onClick={() => onSelectGroup(group)}>{group}</h3>
            </Col>
          </Row>
        })}
      </Grid>
    </div>
  )
};

JoinedGroupsList.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired
};


const styles = {
  colStyle: {
    backgroundImage: null,
    backgroundSize: 'contain',
    borderRadius: 15,
    marginTop: 2,
    marginBottom: 2,
    marginLeft: 2,
    marginRight: 2
  },
  groupName: {
    color: '#ffffff',
    textAlign: 'left'
  }
};

export default JoinedGroupsList;