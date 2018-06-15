import React, { Component } from 'react';
import EditRecipe from './EditRecipe';
import AddRecipe from './AddRecipe';

class DisplayRecipes extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedRecipe: {},
            indexOfRecipe: 0,
            editOptions: false
        }
    }

    displayElement(element) {
        this.setState({ selectedRecipe: element });
        this.setState({ indexOfRecipe: this.props.displayRecipes.indexOf(element) });
        this.state.selectedRecipe ? this.setState({ editOptions: true }) : this.setState({ editOptions: false });
    }



    render() {

        return (

            <div style={{ display: "grid", justifyContent: "center" }}>
                <h1 style={{textAlign:"center" , color:"#046A89"}}> Saved Recipes</h1>
                {
                    this.props.displayRecipes.map(element => {
                        return <div>
                            <div
                                style={{ width: "100%" ,  backgroundColor: "#05B7EC",
                                 textAlign: "center", margin: "4px", padding: "4px" }}>
                                <a href="#" style={{color:"#046A89"}} onClick={() => this.displayElement(element)}>
                                    {element.recipeName} </a> </div>
                            <h1 style={{textAlign:"center" , color:"#1553E2"}}>{this.state.selectedRecipe === element ?
                                 element.ingredient : null}</h1>

                            {this.state.selectedRecipe === element ?
                                <EditRecipe recipes={this.props.displayRecipes}
                                    indexOfRecipe={this.state.indexOfRecipe}
                                    updateEdit={this.props.updateEdit}
                                    editOptions={this.state.editOptions}
                                    selectedRecipe={this.state.selectedRecipe}
                                    updateDeleted={this.props.updateDeleted}
                                /> : null}
                        </div>
                    })
                }




            </div>
        )
    }
}

export default DisplayRecipes;
