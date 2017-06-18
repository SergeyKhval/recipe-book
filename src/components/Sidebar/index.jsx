import React, { Component } from 'react';
import uuid from 'uuid/v4';
import { connect } from 'react-redux';
import { getRecipes } from '../../reducer';
import { addRecipe as addRecipeAction, setActiveRecipe as setActiveRecipeAction } from '../../actions';
import './style.css';

class Sidebar extends Component {
  state = {
    id: '',
    title: '',
    ingridients: '',
  };

  handleAddRecipe(e) {
    e.preventDefault();
    this.props.addRecipe({ ...this.state, id: uuid() });
    this.setState({ title: '', ingridients: '', id: '' });
  }

  render() {
    const { recipes, setActive } = this.props;

    return (
      <div className="sidebar">
        {recipes.map(r => <p onClick={() => setActive(r.id)} key={r.id}>{r.title}</p>)}

        <form onSubmit={::this.handleAddRecipe}>
          <p>
            <input
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
              type="text"
              required
            />
          </p>
          <p>
            <input
              value={this.state.ingridients}
              onChange={e => this.setState({ ingridients: e.target.value })}
              type="text"
              required
            />
          </p>
          <button>Add Recipe</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    recipes: getRecipes(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addRecipe: recipe => dispatch(addRecipeAction(recipe)),
    setActive: title => dispatch(setActiveRecipeAction(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);