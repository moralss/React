import React, { Component } from "react";
import "./App.css";
import Map from "./container/Map";
import MenuBar from "./container/menuBar";
import { createGridToDisplay } from "./container/game-func";
import * as actions from "./actions";
import * as interactions from "./actions/action-player-interaction.js";
import { connect } from "react-redux";
import * as logic from "./container/gameLogic";

//1. Move the player location to the store

class App extends Component {
  constructor() {
    super();
  }

  determineMovement(playerPosition) {
    let isMove = true;
    let props = this.props;
    let {
      setPlayerOldLocation,
      getHealth,
      getWeapon,
      moveToNewLocation
    } = this.props;

    var oldLocation = this.props.playerMovement;
    let nextLocation = logic.findPlayerLocation(playerPosition, props);

    if (nextLocation) {
      switch (nextLocation.tile) {
        case "enemy": {
          logic.handleEnemy(nextLocation, oldLocation, props);
          isMove = false;
          break;
        }
        case "boss": {
          logic.handleBoss(props);
          isMove = false;
          break;
        }
        case "wall": {
          isMove = false;
          break;
        }
        case "health": {
          getHealth(nextLocation);
          break;
        }
        case "weapon1": {
          getWeapon({ weaponPower: 1 });
          break;
        }
        case "weapon2": {
          getWeapon({ weaponPower: 2 });
          break;
        }
      }

      if (isMove) {
        moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
        setPlayerOldLocation(oldLocation);
      }
    }
  }

  toggleGamePlay = status => {
    const { updateGrid, resetGame } = this.props;
    if (status === true) {
      let initialGrid = createGridToDisplay();
      updateGrid(initialGrid);
    } else if (status === false) {
      resetGame();
      alert("game reset");
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
    getHealth: () => dispatch(interactions.getHealth()),
    getEnemy: object => dispatch(interactions.getEnemy(object)),
    getWeapon: object => dispatch(interactions.getWeapon(object)),
    useWeaponPower: amount => dispatch(interactions.useWeaponPower(amount)),
    subtractLife: amount => dispatch(interactions.subtractLife(amount))
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(App);
