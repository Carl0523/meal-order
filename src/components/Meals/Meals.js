import React from 'react';
import MealList from './MealList';
import MealSummary from './MealSummary';

function Meals() {
  return <React.Fragment>
    <MealSummary/>
    <MealList/>
  </React.Fragment>
}

export default Meals;
