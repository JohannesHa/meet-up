/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = ({categories, onSelectCategory}) => {
  return (
    <div>
      {categories.map((category) => {
        console.log(category)
        return <h3 onClick={() => onSelectCategory(category)}>{category}</h3>
      })}
    </div>
  )
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoryList;