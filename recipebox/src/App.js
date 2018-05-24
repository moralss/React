import React, { Component } from 'react';
import ModalPopUp from './ModalPopUp';
import DisplayRecipes from './DisplayRecipes'
import './App.css';
import { reactLocalStorage } from 'reactjs-localstorage';

class App extends Component {
  constructor() {
    super()
    this.state = {
      Recipes: [
        { recipeName: "cake", ingredients: ["milk"] },
        { recipeName: "cheese", ingredients: ["coffee"] }]
    }

    this.addRecipe = this.addRecipe.bind(this);
  }

  addRecipe(recipe, ingredients) {
    console.log(recipe, ingredients);
    var newRecipe = { recipeName: recipe, ingredients: [ingredients] }

    localStorage.setItem('newRecipe', JSON.stringify(newRecipe));
    var retrievedObject = localStorage.getItem('newRecipe');

    var store = JSON.parse(retrievedObject);
    this.state.Recipes.push(store);
    this.setState({ store });

    console.log('retrievedObject: ', store);
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
        <ModalPopUp addRecipe={this.addRecipe} />
      </div>
    );
  }
}

export default App;
