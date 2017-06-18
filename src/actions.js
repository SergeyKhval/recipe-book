export const ADD_RECIPE = 'ADD_RECIPE';
export const SET_ACTIVE_RECIPE = 'SET_ACTIVE_RECIPE';

export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe,
  };
}

export function setActiveRecipe(title) {
  return {
    type: SET_ACTIVE_RECIPE,
    payload: title,
  };
}