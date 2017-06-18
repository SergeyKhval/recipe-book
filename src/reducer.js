import head from 'lodash/head';
import { ADD_RECIPE, SET_ACTIVE_RECIPE, UPDATE_RECIPE_PROP } from './actions';

const defaultRecipes = [
  {
    id: 1,
    title: 'fish',
    ingridients: '',
    active: false,
  },
  {
    id: 2,
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
        if (r.id === payload) {
          return { ...r, active: true };
        }

        return { ...r, active: false };
      });
    case UPDATE_RECIPE_PROP:
      return recipes.map(r => {
        if (r.id === payload.id) {
          return { ...r, [payload.prop]: payload.value };
        }

        return r;
      });
    default:
      return recipes;
  }
}

export default recipesReducer;

export const getRecipes = ({ recipes }) => recipes;
export const getActiveRecipe = ({ recipes }) => head(recipes.filter(r => r.active));