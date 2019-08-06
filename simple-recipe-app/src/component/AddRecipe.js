import React, { Component } from "react";
import PropTypes from "prop-types";

class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: "",
      ingredients: ""
    };
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  addRecipe() {
    const recipe = {
      recipeName: this.state.recipeName,
      ingredients: this.state.ingredients
    };
    this.props.addRecipe(recipe);
  }

  render() {
    return (
      <div>
        <h5> Add New Recipe </h5>
        <label> Recipe Name </label>
        <input
          onChange={event => this.handleChange(event)}
          name="recipeName"
          placeholder="recipe name "
        />

        <label> Ingredient </label>
        <input
          onChange={event => this.handleChange(event)}
          name="ingredients"
          placeholder="ingredient "
        />
        <button onClick={() => this.addRecipe()}> submit </button>
      </div>
    );
  }
}

AddRecipe.propTypes = {};

export default AddRecipe;
