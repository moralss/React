import React from 'react';
import '../App.css'
import { showSmallGrid } from './game-func';
import { connect } from 'react-redux';

class SmallGrid extends React.Component {

    render() {
        console.log("this.props.player", this.props.player);

        return (
            <div className="small-grid">
                {this.props.smallGrid.map(cell => {
                    this.props.tiles.forEach(tile => {
                        if (cell.x == tile.x && cell.y == tile.y) {
                            cell = tile                            
                        }
                    })

    
                    if (cell.x === this.props.oldLocation.x &&
                        cell.y === this.props.oldLocation.y) {
                        cell.tile = null;
                    }

                    if (cell.x === this.props.player.x && cell.y === this.props.player.y) {
                        cell.tile = "Player";
                    }


                    return <div key={this.props.smallGrid.indexOf(cell)} id={`${cell.show}`} className={`tile ${cell.tile}`}
                    >{cell.x} , {cell.y} , {cell.tile} </div>
                })}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        smallGrid: state.gameStateReducers.smallGrid,
        player: state.player.position,
        tiles: state.map.tiles
    }
}


export default connect(mapStateToProps, null)(SmallGrid);
