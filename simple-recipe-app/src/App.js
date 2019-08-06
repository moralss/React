import React, { Component } from "react";
import PropTypes from "prop-types";
import DisplayRecipes from './component/DisplayRecipes';
import AddRecipe from "./component/AddRecipe";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [{ recipeName: "pap", ingredients: "water"} ]
    };
  }

  addRecipe = (recipe) =>{
    this.setState({recipes : [...this.state.recipes , recipe]})
  }
  
  render() {
    return (
      <div>
        <h1> simple recipe app</h1>
        <AddRecipe addRecipe={this.addRecipe.bind(this)}/>
        <DisplayRecipes recipes={this.state.recipes}/>
      </div>
    );
  }
}

App.propTypes = {};

export default App;
