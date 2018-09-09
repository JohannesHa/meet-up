/**
 * Created by will on 08/09/18.
 */
import React from 'react';
import CategoryList from './CategoryList';

const CategoryListContainer = ({onSelectCategory}) => {
  return <CategoryList categories={['Blockchain', 'Art', 'Running', 'Sport', 'Drinking']} onSelectCategory={onSelectCategory}/>
};

export default CategoryListContainer;