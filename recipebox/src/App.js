import React, { Component } from 'react';
import ModalPopUp from './ModalPopUp';
import DisplayRecipes from './DisplayRecipes'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Recipes: [{ "cake": "milk " },
      { "cheese": "coffee" }]
    }

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe, ingredients) {
    console.log(recipe, ingredients);
  }


  showForm() {
    return (
      <div>

      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <br />
        <DisplayRecipes currentRecipes={this.state.Recipes} />
        <button onClick={this.addRecipe}>Add</button>
        <ModalPopUp addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App;
