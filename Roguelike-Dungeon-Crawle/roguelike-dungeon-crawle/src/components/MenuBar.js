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
      isShowGrid: false,
      isBossEnabled: false
    };
  }

  updateLevel() {
    let nextLevelGrid = createGridToDisplay();
    this.props.updateGrid(nextLevelGrid);
    this.props.updateLevel();
    this.setState({isBossEnabled : false});

    if (this.props.gameStatus.level === 1 && this.props.gameStatus.enemysKilled === 9) {
      this.props.toggleBossActive(true);
      let isBossEnabled = true;
      let nextLevelGrid = createGridToDisplay(isBossEnabled);
      this.props.updateGrid(nextLevelGrid);
      this.setState({ isBossEnabled: true });
    }
  }

  render() {
    const {
      xp,
      lives,
      weaponPower,
      enemysKilled,
      level,
      isBossActive
    } = this.props.gameStatus;

    return (
      <div className="menu-bar">
        {this.props.gameStatus.enemysKilled === 9 ? this.updateLevel() : null}
        <div>
          <span> {isBossActive ? "Boss active" : "Gain XP to unlock the boss"} </span>
        </div>
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
          <label>XP </label>
          <span> {xp} </span>
        </div>

        <div>
          <button onClick={() => this.props.toggleGamePlay(true)}>
          play game</button>
        </div>

        <div>
          <button onClick={() => this.props.toggleShowGrid(true)}>
            show full grid
          </button>
        </div>

        <div>
          <button onClick={() => this.props.toggleShowGrid(false)}>
            show small grid
          </button>
        </div>

        <div>
          <button onClick={() =>  this.props.toggleGamePlay(false)}>
           quite game </button>
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
    updateLevel: () => dispatch(actions.updateLevel()),
    moveToNewLocation: object => dispatch(actions.movePlayer(object)),
    updateGrid: object => dispatch(actions.changeGrid(object)),
    toggleShowGrid: boolen => dispatch(actions.toggleShowGrid(boolen)),
    resetGame: () => dispatch(actions.resetGame()),
    toggleBossActive : (status) => dispatch(actions.toggleBossActive(status))
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(MenuBar);
