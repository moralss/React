import React, { Component } from 'react';
import DisplayRecipes from './DisplayRecipes';
import '../App.css';


class EditRecipe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayOptions: true,
            isEditRecipe: false,
            editRecipeName: this.props.selectedRecipe.recipeName,
            editIngredient: this.props.selectedRecipe.ingredient
        }
    }

    deleteRecipe() {
        var recipeList = this.props.recipes;

        var localStore = JSON.parse(localStorage.getItem('newRecipe'));
        localStore.splice(this.props.indexOfRecipe, 1);
        localStorage.setItem('newRecipe', JSON.stringify(localStore));
        this.props.updateDeleted(localStore);

        this.setState({ displayOptions: false })

    }

    editRecipe() {
        this.setState({ isEditRecipe: true });
    }


    submitForm(e) {
        var recipeList = this.props.recipes;
        e.preventDefault();
        recipeList[this.props.indexOfRecipe].recipeName = this.state.editRecipeName;
        recipeList[this.props.indexOfRecipe].ingredient = this.state.editIngredient;
        this.props.updateEdit(recipeList, this.props.indexOfRecipe);
        this.state.isEditRecipe ? this.setState({ isEditRecipe: false }) : this.setState({ isEditRecipe: true });
    }


    recipeHandleChange(e) {
        this.setState({ editRecipeName: e.target.value });
    }


    ingredientHandleChange(e) {
        this.setState({ editIngredient: e.target.value })
    }



    editForm() {
        return (
            <form onSubmit={this.submitForm.bind(this)}>
                <label style={{ fontSize: "18px", color: "#046A89" }} > Recipe Name </label>
                <input onChange={this.recipeHandleChange.bind(this)} value={this.state.editRecipeName} />
                <label style={{ fontSize: "18px", color: "#046A89" }} >Ingredients </label>
                <textarea style={{ margin: "0", padding: "0" }} onChange={this.ingredientHandleChange.bind(this)} value={this.state.editIngredient} />
                < input style={{ fontSize: "20px", color: "#o46A89" }} type="submit" value="submit" />
            </form>
        )
    }

    render() {

        return (
            <div className="editOptions">
                {this.state.displayOptions === true ? <div>
                    <button className="button" onClick={this.deleteRecipe.bind(this)}> Delete </button>
                    <button className="button" onClick={this.editRecipe.bind(this)}> edit Recipe </button> </div> : null}
                {this.state.isEditRecipe === true ? this.editForm() : null}
            </div >
        )
    }
}

export default EditRecipe
