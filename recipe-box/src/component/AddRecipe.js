import React, { Component } from "react";
import "../styles/add-recipe.css";

class AddRecipe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      addRecipe: {}
    };
  }

  submitFrom(e) {
    let recipeInput = this.refs.recipe.value;
    let ingredientInput = this.refs.ingredient.value;
    if (recipeInput.length > 1 && ingredientInput.length > 1) {
      e.preventDefault();
      const newRecipe = {
        recipeName: recipeInput,
        ingredient: ingredientInput
      };
      this.props.storeRecipe(newRecipe);
      this.refs.recipe.value = "";
      this.refs.ingredient.value = "";
    } else {
      alert("please fill the blank spaces ");
    }
  }
  render() {
    return (
      <div className="add-recipe-container">
        <form className="add-recipe-form" onSubmit={this.submitFrom.bind(this)}>
          <div className="input-container">
            <label> Recipe </label>
            <input placeholder="enter recipe name" ref="recipe" type="text" />
          </div>
          <div className="textarea-container">
            <label> Ingredients </label>
            <textarea
              placeholder="enter recipe ingredient"
              ref="ingredient"
              type="text"
              label="ingredients"
            />
          </div >
          <button className="btn-submit">save recipe</button>
        </form>
      </div>
    );
  }
}

export default AddRecipe;
