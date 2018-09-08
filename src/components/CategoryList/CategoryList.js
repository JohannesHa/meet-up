/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import PropTypes from 'prop-types';

const CategoryList = (categories) => {
  return (
    <div>
      {categories.forEach((category) => {
        return <div>Category</div>
      })}
    </div>
  )
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default CategoryList;