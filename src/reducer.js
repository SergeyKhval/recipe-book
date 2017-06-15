const defaultRecipes = {
  1: {
    title: 'fish',
    ingridients: '',
  },
  2: {
    title: 'meat',
    ingridients: '',
  },
};

function recipesReducer(recipes = defaultRecipes, action) {
  switch (action.type) {
    default:
      return recipes;
  }
}

export default recipesReducer;