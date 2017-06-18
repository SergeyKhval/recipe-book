import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getActiveRecipe } from '../../reducer';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import { updateRecipeProp as updateRecipPropAction } from '../../actions';
import './style.css';

class Recipe extends Component {
  state = {
    isEditModalOpen: false,
  };

  handleCloseEditModal() {
    this.setState({ isEditModalOpen: false });
  }

  render() {
    const { recipe, updateRecipeProp } = this.props;

    const actions = [
      <FlatButton
        label="Ok"
        primary
        onTouchTap={::this.handleCloseEditModal}
      />,
    ];

    const template = (
      <div className="recipe">
        <h1 >{recipe.title}</h1>
        <div>
          <h2>Ingridients:</h2>
          <p>{recipe.ingridients}</p>
        </div>
        <p>
          <FlatButton label="Edit" primary onClick={() => {
            this.setState({ isEditModalOpen: true });
          }} />
        </p>

        <Dialog open={this.state.isEditModalOpen} actions={actions} title="Edit your recipe">
          <div>
            <TextField
              value={recipe.title}
              name="recipe-title"
              floatingLabelText="Title"
              onChange={e => updateRecipeProp(recipe.id, 'title', e.target.value)}
            />
          </div>
          <div>
            <TextField
              value={recipe.ingridients}
              name="recipe-ingridients"
              floatingLabelText="Ingridients"
              onChange={e => updateRecipeProp(recipe.id, 'ingridients', e.target.value)}
            />
          </div>
        </Dialog>
      </div>
    );

    return recipe.title ? template : null;
  }

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

function mapDispatchToProps(dispatch) {
  return {
    updateRecipeProp: (id, prop, title) => dispatch(updateRecipPropAction(id, prop, title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Recipe);