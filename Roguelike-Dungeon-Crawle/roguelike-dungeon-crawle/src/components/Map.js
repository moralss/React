import React from 'react';
import '../App.css'
import { connect } from 'react-redux';
import PieceOfGrid from './PieceOfGrid';
import * as actions from "../actions";
import SmallGrid from "./SmallGrid";



class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            gridToDisplay: []
        };
    }



    render() {

        return (
            <div className="map">
                {!this.props.showGrid ?
                    this.props.tiles.map(cell => {
                        if (cell.x === this.props.oldLocation.x &&
                            cell.y === this.props.oldLocation.y) {
                            cell.tile = null;
                        }

                        if (cell.x === this.props.player.x && cell.y === this.props.player.y) {
                            cell.tile = "Player";
                        }

                        const isHidden =  cell.tile != "Player" && 
                        !(Math.abs(this.props.player.x - cell.x) <= 1  &&
                         Math.abs(this.props.player.y - cell.y) <= 1) 

                        return <div key={this.props.tiles.indexOf(cell)}
                         id={`${cell.show}`} 
                         className={`tile ${cell.tile} ${isHidden ? 'tile-hidden' : ''}`}
                        >{cell.x} , {cell.y} , {cell.tile} </div>
                    }) : null
                }

{/*                 
                <button onClick={() => this.createGridToDisplay()}>hide grid</button>
                <button onClick={() => this.props.showRestOfGrid()}>show grid</button> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        tiles: state.map.tiles,
        player: state.player.position,
        playerMovement: state.player,
        smallGrid: state.gameStateReducers.smallGrid,
        showGrid: state.gameStateReducers.showSmallGrid,

    }
}


function dispatchStateToProps(dispatch) {
    return {
        updateGridToDisplay: (cells) => dispatch(actions.updateGridToDisplay(cells)),
        showRestOfGrid: () => dispatch(actions.activateShowGrid())
    }
}



export default connect(mapStateToProps, dispatchStateToProps)(Map);



