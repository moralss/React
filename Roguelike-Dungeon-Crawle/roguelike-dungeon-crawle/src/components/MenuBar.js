import React from 'react';
import '../App.css'
import { connect } from 'react-redux';
import * as actions from "../actions";
import { createGridToDisplay } from "./game-func";


class MenuBar extends React.Component {
    constructor() {
        super()
        this.state = {
            level: 0
        };
    }

    componentWillReceiveProps(props) {
        console.log(props.gameState);
        if (this.props.gameState.enemysKilled === 2) {
            this.props.nextLevel();
            this.genearateNewGrid();
            this.setState({ level: 1 })

        } else {
            this.setState({ level: 0 })

        }
    }




    genearateNewGrid() {
        var initialGrid = createGridToDisplay();
        this.props.updateGrid(initialGrid);
    }

    render() {
        return (
            <div className="menu-bar">
                <label> lives </label>
                <span> {this.props.gameState.lives}</span>
                <label> weapon power </label>
                <span> {this.props.gameState.weaponPower}</span>
                <label> enemys killed </label>
                <span> {this.props.gameState.enemysKilled}</span>
                <label>level </label>
                <span> {this.state.level} </span>
                {/* {this.props.gameState.enemysKilled === 1 ? this.determineLevel(1) : this.determineLevel(0)} */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        gameState: state.gameStateReducers,
        tiles: state.map.tiles,
        player: state.player.position
    }
}



function dispatchStateToProps(dispatch) {
    return {
        nextLevel: () => dispatch(actions.nextLevel()),
        moveToNewLocation: (object) => dispatch(actions.movePlayer(object)),
        updateGrid: (object) => dispatch(actions.changeGrid(object)),
        moveToOldPosition : (object) => dispatch(actions.moveToOldPosition(object))
    }
}


export default connect(mapStateToProps, dispatchStateToProps)(MenuBar);



