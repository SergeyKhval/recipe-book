import { ADD_RECIPE } from './actions';

const defaultRecipes = [
  {
    title: 'fish',
    ingridients: '',
  },
  {
    title: 'meat',
    ingridients: '',
  },
];

function recipesReducer(recipes = defaultRecipes, { type, payload }) {
  switch (type) {
    case ADD_RECIPE:
      return [...recipes, payload];
    default:
      return recipes;
  }
}

export default recipesReducer;

export const getRecipes = ({ recipes }) => recipes;