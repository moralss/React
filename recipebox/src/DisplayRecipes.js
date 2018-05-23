import React, { Component } from 'react';


class DisplayRecipes extends Component {


    displayInList() {

        return (<li> {this.props.currentRecipes.map(element => { return  element })} </li>)

    }


    render() {

        return (
            <div>
                <h1>display Recipe</h1>
                <ul>
                    {this.displayInList}
                </ul>
            </div>
        );
    }
}


export default DisplayRecipes;
