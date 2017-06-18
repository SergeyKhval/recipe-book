import React from 'react';
import { connect } from 'react-redux';
import { getActiveRecipe } from '../../reducer';
import './style.css';

function Recipe({ recipe }) {
  return (
    <div className="recipe">
      <h1 >{recipe.title}</h1>
      <p >{recipe.ingridients}</p>
    </div>
  );
}

Recipe.defaultProps = {
  recipe: {
    title: '',
    ingridients: '',
  },
};

function mapStateToProps(state) {
  return {
    recipe: getActiveRecipe(state),
  };
}

export default connect(mapStateToProps)(Recipe);