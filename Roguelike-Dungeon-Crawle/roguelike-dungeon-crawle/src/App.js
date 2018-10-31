import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import MenuBar from "./components/MenuBar";
import { createGridToDisplay } from "./components/game-func";
import * as actions from "./actions";
import * as interactions from "./actions/action-player-interaction.js";
import { connect } from "react-redux";
import {getProps} from "./components/gameLogic";
//1. Move the player location to the store

class App extends Component {
  constructor() {
    super();
  }

  generateNewGrid() {
    var initialGrid = createGridToDisplay();
    this.props.updateGrid(initialGrid);
  }

  handleBoss() {
    if (
      this.props.gameStatus.weaponPower <= 2 &&
      this.props.gameStatus.lives === 0
    ) {
      this.setGameOver(
        "over , you need at least a weapon power above 2 to kill the boss"
      );
      this.generateNewGrid();
    }

    if (this.props.gameStatus.weaponPower >= 2) {
      this.setGameOver("won");
      this.generateNewGrid();
      return;
    }

    if (
      this.props.gameStatus.weaponPower <= 2 &&
      this.props.gameStatus.lives > 0
    ) {
      this.props.subtractLive(1);
    }
  }

  handleEnemy(nextLocation, oldLocation ) {
    const { weaponPower, lives } = this.props.gameStatus;
    if (weaponPower <= 0 && lives === 0) {
      this.setGameOver("over ");
      this.generateNewGrid();
      return;
    }

    if (weaponPower > 0) {
      this.props.useWeaponPower(1);
      this.props.moveToNewLocation({
        x: nextLocation.x,
        y: nextLocation.y
      });
      this.props.setPlayerOldLocation(oldLocation);
      return
    }

    if (weaponPower === 0 && lives > 0) {
      this.props.subtractLive(1);
    }
    return
  }

  determineMovement(playerPosition) {
    var oldLocation = this.props.playerMovement;
    let nextLocation = this.props.map.tiles.find(
      cell => cell.x === playerPosition.x && cell.y === playerPosition.y
    );

    let isMove = true;
    if (nextLocation) {
      switch (nextLocation.tile) {
        case "enemy": {
          this.handleEnemy(nextLocation, oldLocation );
          isMove = false;
          break;
        }
        case "boss": {
          this.handleBoss(nextLocation);
          isMove = false;
          break;
        }
        case "wall": {
          isMove = false;
          break;
        }
        case "health": {
          this.props.getHealth(nextLocation);
          break;
        }
        case "weapon1": {
          this.getWeapon(1);
          break;
        }
        case "weapon2": {
          this.getWeapon(2);
          break;
        }
      }

      if (isMove) {
        this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
        this.props.setPlayerOldLocation(oldLocation);
      }
    }
  }

  setGameOver(status) {
    alert(`game ${status}!`);
    this.props.resetGame();
  }


  getWeapon(power) {
    let isMove = true;
    this.props.getWeapon({ weaponPower: power });
    return isMove;
  }

  toggleGamePlay = status => {
    if (status === true) {
      this.generateNewGrid();
    } else if (status === false) {
      this.setGameOver("reset");
    }
  };

  componentDidMount() {
    window.addEventListener("keydown", e => {
      this.handleKeyDown(e);
    });
  }

  handleKeyDown(event) {
    var playerPosition = this.props.playerMovement;
    if (event.key === "ArrowLeft") {
      playerPosition = { x: playerPosition.x - 1, y: playerPosition.y };
    } else if (event.key === "ArrowRight") {
      playerPosition = { x: playerPosition.x + 1, y: playerPosition.y };
    } else if (event.key === "ArrowUp") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 };
    } else if (event.key === "ArrowDown") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 };
    }

    this.determineMovement(playerPosition);

  }

  render() {
    return (
      <div className="App">
        <MenuBar
          playerPosition={this.props.playerMovement}
          toggleGamePlay={this.toggleGamePlay.bind(this)}
        />
        <div>
          <Map oldLocation={this.props.playerOldLocation} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameStatus: state.gameStatus,
    playerMovement: state.player.position,
    playerOldLocation: state.player.OldPosition,
    map: state.map
  };
}

function dispatchStateToProps(dispatch) {
  return {
    setPlayerOldLocation: location =>
      dispatch(actions.setPlayerOldLocation(location)),
    resetGame: () => dispatch(actions.resetGame()),
    updateGrid: newGrid => dispatch(actions.changeGrid(newGrid)),
    moveToNewLocation: newLocation => dispatch(actions.movePlayer(newLocation)),
    getHealth: object => dispatch(interactions.getHealth(object)),
    getEnemy: object => dispatch(interactions.getEnemy(object)),
    getWeapon: object => dispatch(interactions.getWeapon(object)),
    useWeaponPower: amount => dispatch(interactions.useWeaponPower(amount)),
    subtractLive: amount => dispatch(interactions.subtractLive(amount))
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(App);
