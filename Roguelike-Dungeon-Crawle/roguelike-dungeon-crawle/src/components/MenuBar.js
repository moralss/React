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
      isGameMode: false,
      isShowGrid: false
    };
  }

  enableShowFullGrid() {
    this.props.toggleShowGrid(true);
  }

  disableShowFullGrid() {
    this.props.toggleShowGrid(false);
  }

  playGame() {
    this.props.toggleGamePlay(true);
  }

  quiteGame() {
    this.props.toggleGamePlay(false);
  }

  componentWillReceiveProps() {
    const { level, enemysKilled } = this.props.gameStatus;
    if (level === 1 && enemysKilled === 1) {
      let isBossEnabled = true;
      let nextLevelGrid = createGridToDisplay(isBossEnabled);
      this.props.updateGrid(nextLevelGrid);
      this.props.updateLevel(1);
    }
  }

  render() {
    const { lives, weaponPower, enemysKilled, level } = this.props.gameStatus;
    return (
      <div className="menu-bar">
        <div>
          <label> lives </label>
          <span> {lives}</span>
        </div>
        <div>
          <label> weapon power </label>
          <span> {weaponPower}</span>
        </div>
        <div>
          <label> enemys killed </label>
          <span> {enemysKilled}</span>
        </div>
        <div>
          <label>level </label>
          <span> {level} </span>
        </div>

        <div>
          <button onClick={() => this.enableShowFullGrid()}>
            show full grid
          </button>
        </div>

        <div>
          <button onClick={() => this.disableShowFullGrid()}>
            show small grid
          </button>
        </div>

        <div>
          <button onClick={() => this.quiteGame()}> quite game </button>
        </div>

        <div>
          <button onClick={() => this.playGame()}>play game</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    tiles: state.map.tiles,
    player: state.player.position
  };
}

function dispatchStateToProps(dispatch) {
  return {
    updateLevel: value => dispatch(actions.updateLevel(value)),
    moveToNewLocation: object => dispatch(actions.movePlayer(object)),
    updateGrid: object => dispatch(actions.changeGrid(object)),
    toggleShowGrid: boolen => dispatch(actions.toggleShowGrid(boolen))
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(MenuBar);
