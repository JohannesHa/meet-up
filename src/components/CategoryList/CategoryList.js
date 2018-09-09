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


const CategoryList = ({ categories, onSelectCategory }) => {
  var i = 0;
  var backgroundImages = [blockchainImg, artImg, runningImg, sportImg, drinkingImg];

  return (
    <div>
      <Grid>
        {categories.map((category) => {
          if ((i % 2) == 0) {
            var secondCol = null
            if (categories[i + 1] != null) {
              secondCol = <Col xs={5} style={{
                backgroundImage: `url(${backgroundImages[i + 1]})`,
                backgroundSize: 'contain',
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10
              }}>
                <h3 style={styles.categoryName} onClick={() => onSelectCategory(categories[i + 1])}>{categories[i + 1]}</h3>
              </Col>
            }
            i += 1;

            return <Row>
              <Col xs={5} style={{
                backgroundImage: `url(${backgroundImages[i - 1]})`,
                backgroundSize: 'contain',
                borderRadius: 15,
                marginTop: 10,
                marginBottom: 10,
                marginLeft: 10,
                marginRight: 10
              }}>
                <h3 style={styles.categoryName} onClick={() => onSelectCategory(category)}>{category}</h3>
              </Col>
              {secondCol}
            </Row>
          }
          i += 1;
          return null;
        })}
      </Grid>
    </div>
  )
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};


const styles = {
  colStyle: {
    backgroundImage: null,
    backgroundSize: 'contain',
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10
  },
  categoryName: {
    color: '#ffffff',
    textAlign: 'left'
  }
};

export default CategoryList;
