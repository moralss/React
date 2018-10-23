import React, { Component } from 'react';
import '../App.css';
import '../styles/edit-recipe.css';

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

    componentWillUnmount(){
        const editRecipe = this.props.selectedRecipe.recipeName;
        const editIngredient = this.props.selectedRecipe.editIngredient;

        this.setState({editRecipe :editRecipe });
        this.setState({editIngredient : editIngredient});

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
        console.log(this.state.isEditRecipe);
        !this.state.isEditRecipe ? this.setState({isEditRecipe : true}) :
        this.setState({isEditRecipe : false})   
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

    render() {
        const {deleteRecipe , editRecipe } =  this

        return (
            <div className="edit-options">
                {this.state.displayOptions === true ? <div>
                    <button  className="btn-option" onClick={deleteRecipe.bind(this)}> Delete </button>
                    <button className="btn-option" onClick={editRecipe.bind(this)}> 
                    {!this.state.isEditRecipe ? "Edit recipe" : "Channel" }
</button> </div> : null}
                {this.state.isEditRecipe === true ? this.editForm() : null}

            </div >
        )
    }
}

export default EditRecipe
