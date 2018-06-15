import React, { Component } from 'react';


class GridLayout extends Component {

    componentWillMount() {
        console.log("display :", this.displayGrid());

    }

    displayGrid() {
        
        for (let i = 0; i < 10; i++) {
           return ( <button> {i} </button> );
        }


    }

    render() {


        return (

            <div style={{
                display: "grid", justifyContent: "center",
                gridTemplateColumns: "repeat(5 , 50px)", gridRow: "repeat(4 , 1fr)", paddingTop: "40px"
            }}>

                {this.displayGrid.bind(this)}
            </div>
        )
    }


}

export default GridLayout;