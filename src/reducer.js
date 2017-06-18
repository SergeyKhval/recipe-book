import head from 'lodash/head';
import { ADD_RECIPE, SET_ACTIVE_RECIPE } from './actions';

const defaultRecipes = [
  {
    title: 'fish',
    ingridients: '',
    active: false,
  },
  {
    title: 'meat',
    ingridients: '',
    active: false,
  },
];

function recipesReducer(recipes = defaultRecipes, { type, payload }) {
  switch (type) {
    case ADD_RECIPE:
      return [...recipes, payload];
    case SET_ACTIVE_RECIPE:
      return recipes.map(r => {
        if (r.title === payload) {
          return { ...r, active: true };
        }

        return { ...r, active: false };
      });

    default:
      return recipes;
  }
}

export default recipesReducer;

export const getRecipes = ({ recipes }) => recipes;
export const getActiveRecipe = ({ recipes }) => head(recipes.filter(r => r.active));