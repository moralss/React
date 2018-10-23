import React, { Component } from "react";
import EditRecipe from "./EditRecipe";
import "../styles/display-recipes.css";

class DisplayRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRecipe: {},
      indexOfRecipe: 0,
      editOptions: false
    };
  }

  displayElement(element) {
    this.setState({ selectedRecipe: element });
    this.setState({
      indexOfRecipe: this.props.displayRecipes.indexOf(element)
    });
    this.state.selectedRecipe
      ? this.setState({ editOptions: true })
      : this.setState({ editOptions: false });
  }

  render() {
    return (
      <div className="display-recipe-container">
        <h1 id="save-recipes-header"> Saved Recipes</h1>
        {this.props.displayRecipes.map(element => {
          return (
            <div className="recipe-name-box ">
              <div className="recipe-name ">
                <a href="#" onClick={() => this.displayElement(element)}>
                  {element.recipeName}
                </a>
              </div>

              <div className="ingredient-name-container">
               <div>
                {this.state.selectedRecipe === element ? (
                  <p
                    className="display-ingredient"
                  >
                    {element.ingredient}
                  </p>
                ) : (
                  ""
                )}
                </div>
              </div>

              {this.state.selectedRecipe === element ? (
                <EditRecipe
                  selectedRecipe={this.state.selectedRecipe}
                  recipes={this.props.displayRecipes}
                  indexOfRecipe={this.state.indexOfRecipe}
                  updateEdit={this.props.updateEdit}
                  editOptions={this.state.editOptions}
                  selectedRecipe={this.state.selectedRecipe}
                  updateDeleted={this.props.updateDeleted}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayRecipes;
