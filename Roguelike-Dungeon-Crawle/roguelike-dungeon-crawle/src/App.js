import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
import MenuBar from './components/MenuBar';
import { createGridToDisplay } from "./components/game-func";
import * as actions from "./actions";
import { connect } from 'react-redux';

class App extends Component {

  constructor() {
    super()
    this.state = {
      tiles: [],
      player: { x: 0, y: 0 },
      oldLocation: { x: 0, y: 0 },
    };
  }



  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e)
    })

    var initialGrid = createGridToDisplay();
    this.props.updateGrid(initialGrid);
  }

  handleKeyDown(event) {
    var playerPosition = this.state.player;
    var oldLocation = this.state.player;
    let moveStates = true;

    if (event.key === "ArrowLeft") {
      playerPosition = { x: playerPosition.x - 1, y: playerPosition.y }
    } else if (event.key === "ArrowRight") {
      playerPosition = { x: playerPosition.x + 1, y: playerPosition.y }
    } else if (event.key === "ArrowUp") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 }
    } else if (event.key === "ArrowDown") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 }
    }

    console.log("movement", this.props.playerMovement);

    let nextLocation = this.props.map.tiles.find(cell => cell.x === playerPosition.x && cell.y === playerPosition.y);

    if (nextLocation) {
      if (nextLocation.tile === 'enemy') {
        if (this.props.gameState.weaponPower === 0 && this.props.gameState.lives === 0) {
          console.log("game over");
        }

        if (this.props.gameState.weaponPower > 0) {
          this.props.useWeaponPower(1);
          this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
          this.setState({ player: playerPosition, oldLocation: oldLocation });

        }

        if (this.props.gameState.weaponPower === 0 && this.props.gameState.lives > 0) {
          this.props.subtractLive(1);
          this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
          this.setState({ player: oldLocation });
        }

        moveStates = false;
      }

      if (nextLocation.tile === 'health') {
        moveStates = true;
        this.props.getHealth(nextLocation);
      }

      if (nextLocation.tile === 'weapon1') {
        moveStates = true;
        console.log("colect weapon");
        this.props.getWeapon({ ...nextLocation, weaponPower: 1 });
      }

      if (nextLocation.tile === 'weapon2') {
        moveStates = true;
        console.log("colect weapon");
        this.props.getWeapon({ ...nextLocation, weaponPower: 2 });
      }

      if (moveStates) {
        this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
        this.setState({ player: playerPosition, oldLocation: oldLocation });
      }

    }


    if (nextLocation === undefined) {
      this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
      this.setState({ player: oldLocation });
    }
  }

  render() {
    console.log(this.props.gameState);
    return (
      <div className="App">
        <MenuBar playerPosition={this.state.playerPosition} />

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
  }
}

function dispatchStateToProps(dispatch) {
  return {
    updateGrid: (newGrid) => dispatch(actions.changeGrid(newGrid)),
    moveToNewLocation: (newLocation) => dispatch(actions.movePlayer(newLocation)),
    getHealth: (object) => dispatch(actions.getHealth(object)),
    getEnemy: (object) => dispatch(actions.getEnemy(object)),
    getWeapon: (object) => dispatch(actions.getWeapon(object)),
    useWeaponPower: (amount) => dispatch(actions.useWeaponPower(amount)),
    subtractLive: (amount) => dispatch(actions.subtractLive(amount)),
    moveToOldPosition: (object) => dispatch(actions.moveToOldPosition(object))
  }
}

export default connect(mapStateToProps, dispatchStateToProps)(App);
