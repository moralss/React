import React, { Component } from "react";
import "./App.css";
import Map from "./components/Map";
import MenuBar from "./components/MenuBar";
import { createGridToDisplay} from "./components/game-func";
import * as actions from "./actions";
import * as interactions from "./actions/action-player-interaction.js";
import { connect } from "react-redux";

class App extends Component {
  constructor() {
    super();
    this.state = {
      playerLocation: { x: 7, y: 7 },
      oldLocation: { x: 7, y: 7 }
    };
  }


  
  determineMovement(playerPosition) {
    var oldLocation = this.state.playerLocation;

    let nextLocation = this.props.map.tiles.find(
      cell => cell.x === playerPosition.x && cell.y === playerPosition.y
    );

    let isMove = true;
    if (nextLocation) {
      if (nextLocation.tile === "enemy") {
        if (
          this.props.gameStatus.weaponPower === 0 &&
          this.props.gameStatus.lives === 0
        ) {
          this.setGameOver("over");
          var initialGrid = createGridToDisplay();
          this.props.updateGrid(initialGrid);
        }

        if (this.props.gameStatus.weaponPower > 0) {
          this.props.useWeaponPower(1);
          this.props.moveToNewLocation({
            x: nextLocation.x,
            y: nextLocation.y
          });
          this.setState({ playerLocation: playerPosition, oldLocation: oldLocation });
        }

        if (
          this.props.gameStatus.weaponPower === 0 &&
          this.props.gameStatus.lives > 0
        ) {
          this.props.subtractLive(1);
          this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
          this.setState({ playerLocation: oldLocation });
        }

        isMove = false;
      }

      if (nextLocation.tile === "boss") {
        if (
          this.props.gameStatus.weaponPower <= 3 &&
          this.props.gameStatus.lives === 0
        ) {
          this.setGameOver("over");
          var initialGrid = createGridToDisplay();
          this.props.updateGrid(initialGrid);
        }

        if (
          this.props.gameStatus.weaponPower >= 3 
        ) {
          this.props.useWeaponPower(1);
          this.props.moveToNewLocation({
            x: nextLocation.x,
            y: nextLocation.y
          });

          this.setState({ playerLocation: playerPosition, oldLocation: oldLocation });
          this.setGameOver("win");
          var initialGrid = createGridToDisplay();
          this.props.updateGrid(initialGrid);
        }

        if (
          this.props.gameStatus.weaponPower === 0 &&
          this.props.gameStatus.lives > 0
        ) {
          this.props.subtractLive(1);
          this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
          this.setState({ playerLocation: oldLocation });
        }

        isMove = false;
      }

      if (nextLocation.tile === "wall") {
        isMove = false;
        this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
        this.setState({ playerLocation: oldLocation });
      }

      if (nextLocation.tile === "health") {
        isMove = true;
        this.props.getHealth(nextLocation);
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
        this.setState({ playerLocation: playerPosition, oldLocation: oldLocation });
      }
    }

    if (nextLocation === undefined) {
      this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
      this.setState({ playerLocation: oldLocation });
    }
  }

  setGameOver(status) {
    alert(`game ${status}!`);
    this.setState({ playerLocation: { x: 7, y: 7 } });
    this.setState({ oldLocation: { x: 7, y: 7 } });
    this.props.resetGame();
  }

  toggleGamePlay = status => {
    if (status === true) {
      var initialGrid = createGridToDisplay();
      this.props.updateGrid(initialGrid);
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
    var playerPosition = this.state.playerLocation;
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

    console.log("new po" , this.state.playerLocation , "old " , this.state.oldLocation)
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
    gameStatus: state.gameStatus,
    playerMovement: state.playerLocation,
    map: state.map
  };
}

function dispatchStateToProps(dispatch) {
  return {
    resetGame: status => dispatch(actions.resetGame(status)),
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
