/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import CategoryList from '../CategoryList/CategoryListContainer';

const CategorySearch = ({onSelectCategory}) => {
  return (
    <div>
      <h2>Pick a category</h2>
      <CategoryList onSelectCategory={onSelectCategory}/>
    </div>
  )
};

export default CategorySearch;