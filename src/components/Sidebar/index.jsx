import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecipes } from '../../reducer';
import { addRecipe as addRecipeAction } from '../../actions';
import './style.css';

class Sidebar extends Component {
  state = {
    title: '',
    ingridients: '',
  };

  handleAddRecipe(e) {
    e.preventDefault();
    this.props.addRecipe(this.state);
    this.setState({ title: '', ingridients: '' });
  }

  render() {
    const { recipes } = this.props;

    return (
      <div className="sidebar">
        {recipes.map(r => <p>{r.title}</p>)}

        <form onSubmit={::this.handleAddRecipe}>
          <p>
            <input value={this.state.title} onChange={e => this.setState({ title: e.target.value })} type="text" />
          </p>
          <p>
            <input
              value={this.state.ingridients}
              onChange={e => this.setState({ ingridients: e.target.value })}
              type="text"
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);