import React, { Component } from 'react';


class DisplayRecipes extends Component {


    displayInList() {
        var number = 10;
        return this.props.currentRecipes.map((element) => {
            return  <li style={{fontSize:20}}> <a href="#" >{element.recipeName} </a> </li>}) 
    
    }


    render() {

        return (
            <div>
                <h1>display Recipe</h1>
                <ul>
                  {this.displayInList()}
                </ul>
            </div>
        );
    }
}


export default DisplayRecipes;
