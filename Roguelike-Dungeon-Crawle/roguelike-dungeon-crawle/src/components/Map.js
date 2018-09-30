import React from 'react';
import '../App.css'
import { connect } from 'react-redux';



class Map extends React.Component {
    constructor() {
        super()
        this.state = {
            tiles: [],
            player: { x: 0, y: 0 },
            oldLocation: { x: 0, y: 0 },
        };
    }



    render() {
        return (
            <div className="map">
                {this.props.tiles.map(cell => {
                    if (cell.x === this.props.oldLocation.x && cell.y === this.props.oldLocation.y) {
                        cell.tile = null;
                    }


                    if (cell.x === this.props.player.x && cell.y === this.props.player.y) {
                        cell.tile = "Player";
                    }

                    return <div key={this.props.tiles.indexOf(cell)} className={`tile ${cell.tile}`}
                        id={cell.tile}>{cell.x} , {cell.y} , {cell.tile} </div>
                })
                }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        state: state,
        tiles: state.map.tiles,
        player: state.player.position
    }
}



// function dispatchStateToProps(dispatch) {
//     return {
//         updateGrid: (newGrid) => dispatch(actions.changeGrid(newGrid)),
//         moveToNewLocation: (newLocation) => dispatch(actions.movePlayer(newLocation)),
//         getHealth: (object) => dispatch(actions.getHealth(object)),
//         getEnemy: (object) => dispatch(actions.getEnemy(object)),
//         getWeapon: (object) => dispatch(actions.getWeapon(object))
//     }
// }

export default connect(mapStateToProps, null)(Map);



