import React, { Component } from 'react';
import '../App.css';
import '../styles/edit-recipe.css';


class EditForm extends Component {
    constructor(props) {
        super(props);

    }

    componentWillUnmount(){
        // const editRecipe = this.props.selectedRecipe.recipeName;
        // const editIngredient = this.props.selectedRecipe.editIngredient;

    }

  


    render() {
        const {deleteRecipe , editRecipe } =  this

        return (
            <form className="form-edit" onSubmit={this.submitForm.bind(this)}>
                <label className="label"> Recipe Name </label>
                <input placeholder="Enter recipe name"
                 onChange={this.recipeHandleChange.bind(this)}
                 value={this.state.editRecipeName} />
                <label  className="label-ingredient">Ingredients </label>
                
                <textarea placeholder="Enter ingredients" 
                className="textarea-edit" 
                onChange={this.ingredientHandleChange.bind(this)}
                 value={this.state.editIngredient} />
                
                < input  
                 className="btn-edit-submit"
                  type="submit" value="submit" />

            </form>
        )
    }
}

export default EditForm;
