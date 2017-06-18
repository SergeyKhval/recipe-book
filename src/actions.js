export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_RECIPE = 'REMOVE_RECIPE';
export const SET_ACTIVE_RECIPE = 'SET_ACTIVE_RECIPE';
export const UPDATE_RECIPE_PROP = 'UPDATE_RECIPE_PROP';

export function addRecipe(recipe) {
  return {
    type: ADD_RECIPE,
    payload: recipe,
  };
}

export function removeRecipe(id) {
  return {
    type: REMOVE_RECIPE,
    payload: id,
  };
}

export function setActiveRecipe(id) {
  return {
    type: SET_ACTIVE_RECIPE,
    payload: id,
  };
}

export function updateRecipeProp(id, prop, value) {
  return {
    type: UPDATE_RECIPE_PROP,
    payload: {
      id,
      prop,
      value,
    },
  };
}