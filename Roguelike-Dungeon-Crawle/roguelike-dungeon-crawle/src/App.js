import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import MenuBar from "./components/MenuBar";
import { createGridToDisplay, showSmallGrid } from "./components/game-func";
import * as actions from "./actions";
import * as interactions from "./actions/action-player-interaction.js";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      tiles: [],
      player: { x: 0, y: 0 },
      oldLocation: { x: 0, y: 0 }
    };
  }

  determineMovement(playerPosition) {
    var oldLocation = this.state.player;

    let nextLocation = this.props.map.tiles.find(
      cell => cell.x === playerPosition.x && cell.y === playerPosition.y
    );

    let isMove = true;
    if (nextLocation) {
      if (nextLocation.tile === "enemy") {
        if (
          this.props.gameState.weaponPower === 0 &&
          this.props.gameState.lives === 0
        ) {
          alert("game over you lost");
          // this.props.gameOver("lost");
        }

        if (this.props.gameState.weaponPower > 0) {
          this.props.useWeaponPower(1);
          this.props.moveToNewLocation({
            x: nextLocation.x,
            y: nextLocation.y
          });
          this.setState({ player: playerPosition, oldLocation: oldLocation });
        }

        if (
          this.props.gameState.weaponPower === 0 &&
          this.props.gameState.lives > 0
        ) {
          this.props.subtractLive(1);
          this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
          this.setState({ player: oldLocation });
        }

        isMove = false;
      }

      if (nextLocation.tile === "health") {
        isMove = true;
        this.props.getHealth(nextLocation);
      }

      if (nextLocation.tile === "wall") {
        isMove = false;
        this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
        this.setState({ player: oldLocation });
      }

      if (nextLocation.tile === "weapon1") {
        isMove = true;
        this.props.getWeapon({ ...nextLocation, weaponPower: 1 });
      }

      if (nextLocation.tile === "weapon2") {
        isMove = true;
        this.props.getWeapon({ ...nextLocation, weaponPower: 2 });
      }

      if (isMove) {
        this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
        this.setState({ player: playerPosition, oldLocation: oldLocation });
      }
    }

    if (nextLocation === undefined) {
      this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
      this.setState({ player: oldLocation });
    }
  }

  toggleGamePlay = status => {
    if (status === true) {
      var initialGrid = createGridToDisplay();
      this.props.updateGrid(initialGrid);

      window.addEventListener("keydown", e => {
        this.handleKeyDown(e);
      });
    } else if (status === false) {
      this.setState({ player: { x: 0, y: 0 } });
      this.setState({ oldLocation: { x: 0, y: 0 } });
      this.props.toggleGameMode(true);
      // this.props.updateGrid([]);
    }
  };

  componentDidMount() {
    // var initialGrid = createGridToDisplay();
    // this.props.updateGrid(initialGrid);
    // window.addEventListener("keydown", e => {
    //   this.handleKeyDown(e);
    // });
  }

  handleKeyDown(event) {
    var playerPosition = this.state.player;
    if (event.key === "ArrowLeft") {
      playerPosition = { x: playerPosition.x - 1, y: playerPosition.y };
    } else if (event.key === "ArrowRight") {
      playerPosition = { x: playerPosition.x + 1, y: playerPosition.y };
    } else if (event.key === "ArrowUp") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 };
    } else if (event.key === "ArrowDown") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 };
    }

    // this.props.showRestOfGrid();
    // showSmallGrid(playerPosition);
    this.determineMovement(playerPosition);
  }

  render() {
    return (
      <div className="App">
        <MenuBar
          playerPosition={this.state.playerPosition}
          toggleGamePlay={this.toggleGamePlay.bind(this)}
        />
        <div>
          <Map oldLocation={this.state.oldLocation} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gameState: state.gameStateReducers,
    playerMovement: state.player,
    map: state.map
  };
}

function dispatchStateToProps(dispatch) {
  return {
    toggleGameMode: status => dispatch(actions.toggleGameMode(status)),
    updateGrid: newGrid => dispatch(actions.changeGrid(newGrid)),
    moveToNewLocation: newLocation => dispatch(actions.movePlayer(newLocation)),
    getHealth: object => dispatch(interactions.getHealth(object)),
    getEnemy: object => dispatch(interactions.getEnemy(object)),
    getWeapon: object => dispatch(interactions.getWeapon(object)),
    useWeaponPower: amount => dispatch(interactions.useWeaponPower(amount)),
    subtractLive: amount => dispatch(interactions.subtractLive(amount)),
    moveToOldPosition: object => dispatch(actions.moveToOldPosition(object)),
    // gameOver: object => dispatch(actions.gameOver(object)),
    showRestOfGrid: () => dispatch(actions.activateShowGrid())
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(App);
