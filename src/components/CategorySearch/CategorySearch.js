/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import CategoryList from '../CategoryList/CategoryListContainer';
import Header from '../Header.js'

const CategorySearch = ({ onSelectCategory }) => {
  return (
    <div>
      <Header style={{marginTop: 50}}>Pick a category</Header>
      <CategoryList onSelectCategory={onSelectCategory} />
    </div>
  )
};

export default CategorySearch;