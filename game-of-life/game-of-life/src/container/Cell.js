import React, { Component } from 'react';
import '../App.css';

const Cell = (props) => {

   
    return (
        <div>
            <button key={props.grid.indexOf(props.gridCell)} id={`${props.gridCell.status}`}
                onClick={() => props.toggleAliveOrDead(props.gridCell)}>
                y{props.gridCell.xAxis}
                x{props.gridCell.yAxis}
            </button>
        </div>
    )
}


export default Cell;