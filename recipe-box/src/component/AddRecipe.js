import React, { Component } from 'react';
import '../App.css';

class AddRecipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addRecipe: {},
        }
    }

    submitFrom(e) {
        let recipeInput = this.refs.recipe.value;
        let ingredientInput = this.refs.ingredient.value;

        console.log(recipeInput);
        console.log(ingredientInput);
        console.log("recipe length", recipeInput.length);
        console.log("ingredient ", ingredientInput.length);

        if (recipeInput.length > 1 && ingredientInput.length > 1) {

            e.preventDefault();
            const newRecipe = { recipeName: recipeInput, ingredient: ingredientInput };
            this.props.storeRecipe(newRecipe);
            this.refs.recipe.value = "";
            this.refs.ingredient.value = "";

        } else {
            alert("please fill the blank spaces ")
        }



    }
    render() {
        return (
            <div style={{ display: "grid", justifyContent: " center" }}>
                <form className="AddInputBox" onSubmit={this.submitFrom.bind(this)}>
                    <div>
                        <label style={{ color: "#046A89", paddingRight: "50px" }}> Recipe </label>
                        <input placeholder="enter recipe name" ref="recipe" type="text" />
                        <label style={{ color: "#046A89", paddingLeft: "20px" }}> ingredients </label>
                        <textarea style={{ paddingTop: "20px", marginTop: "20px" }}
                            placeholder="enter recipe ingredient" ref="ingredient"
                            type="text"> </textarea>

                        <div style={{ paddingLeft: "100px", paddingTop: "20px" }}>
                            <button style={{ fontSize: "20px", color: "#046A89" }}
                            > save recipe </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddRecipe;
