import React, { Component } from 'react';
import AddRecipe from './component/AddRecipe';
import DisplayRecipes from './component/DisplayRecipes';
import EditRecipe from './component/EditRecipe';


class App extends Component {
  constructor() {
    super();
    this.state = {
      recipes: []
    };
  }



  componentWillMount() {
    var recipesFromStorage = localStorage.getItem('newRecipe');
    if (recipesFromStorage) {
      var retrievedObject = JSON.parse(recipesFromStorage);
      this.setState({ recipes: retrievedObject });
    }
  }

  updateEditRecipe(newState, index) {

    var localStore = JSON.parse(localStorage.getItem('newRecipe'));
    localStore[index] = newState[index];
    localStorage.setItem('newRecipe', JSON.stringify(localStore));
    this.setState({ recipes: localStore })
  }


  storeAddedRecipe(store) {
    const storeAdded = this.state.recipes;
    storeAdded.push(store);
    localStorage.setItem('newRecipe', JSON.stringify(storeAdded));
    this.setState({ recipes: storeAdded });
  }

  updateDeleted(arrayObject) {
    this.setState({ recipes: arrayObject });
  }

  render() {

    return (
      <div >
        <AddRecipe storeRecipe={this.storeAddedRecipe.bind(this)} />
        <DisplayRecipes displayRecipes={this.state.recipes}
          updateEdit={this.updateEditRecipe.bind(this)}
          updateDeleted={this.updateDeleted.bind(this)}
        />

      </div>
    )
  }


}

export default App;
