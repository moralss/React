import React, { Component } from 'react';


const Cell = (props) => {


    return (
        <div>
            <button key={props.grid.indexOf(props.gridCell)} id={`${props.gridCell.status}`}
                onClick={() => props.toggleAliveOrDead(props.gridCell)}>
                x{props.gridCell.xAxis}
                y{props.gridCell.yAxis}
            </button>
        </div>
    )
}



export default Cell;




