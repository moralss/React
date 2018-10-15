import React from "react";
import "../App.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import { createGridToDisplay } from "./game-func";

class MenuBar extends React.Component {
  constructor() {
    super();
    this.state = {
      level: 0,
      gameMode: false
    };
  }

  toggleShowGrid = () => {};

  playGame(){

    !this.state.gameMode
      ? this.setState({ gameMode: true })
      : this.setState({ gameMode: false });
    this.props.toggleGamePlay(this.state.gameMode);
  };

  componentWillReceiveProps() {
    if (this.props.gameState.enemysKilled === 1) {
      // console.log("enter");

      let isBossEnabled = true;

      let nextLevelGrid = createGridToDisplay(isBossEnabled);
      this.props.updateGrid(nextLevelGrid);
      this.props.updateLevel(1);
    }
  }

  render() {
    return (
      <div className="menu-bar">
        <div>
          <label> lives </label>
          <span> {this.props.gameState.lives}</span>
        </div>
        <div>
          <label> weapon power </label>
          <span> {this.props.gameState.weaponPower}</span>
        </div>
        <div>
          <label> enemys killed </label>
          <span> {this.props.gameState.enemysKilled}</span>
        </div>
        <div>
          <label>level </label>
          <span> {this.props.gameState.level} </span>
        </div>

        <div>
          <button onClick={this.toggleShowGrid()}> Show Grid </button>
        </div>

        <div>
          <button onClick={this.playGame.bind(this)}> play game </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameStateReducers,
    tiles: state.map.tiles,
    player: state.player.position
  };
}

function dispatchStateToProps(dispatch) {
  return {
    updateLevel: value => dispatch(actions.updateLevel(value)),
    moveToNewLocation: object => dispatch(actions.movePlayer(object)),
    updateGrid: object => dispatch(actions.changeGrid(object))
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(MenuBar);
