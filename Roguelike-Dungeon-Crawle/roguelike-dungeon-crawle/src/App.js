import React, { Component } from 'react';
import './App.css';
import Map from './components/Map';
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
    this.setState({ gameGrid: initialGrid, playerLoc: this.props.playerCurrentLocation })
    this.props.updateGrid(initialGrid);
  }

  handleKeyDown(event) {
    var playerPosition = this.state.player;
    var oldLocation = this.state.player;

    if (event.key === "ArrowLeft") {
      playerPosition = { x: playerPosition.x - 1, y: playerPosition.y }
    } else if (event.key === "ArrowRight") {
      playerPosition = { x: playerPosition.x + 1, y: playerPosition.y }
    } else if (event.key === "ArrowUp") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y - 1 }
    } else if (event.key === "ArrowDown") {
      playerPosition = { x: playerPosition.x, y: playerPosition.y + 1 }
    }

    let nextLocation = this.state.gameGrid.find(cell => cell.x === playerPosition.x && cell.y === playerPosition.y);

    if (nextLocation.tile === 'enemy') {
      this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
      this.setState({ player: oldLocation });

      console.log("oldLocation", oldLocation, "playerPosition", playerPosition)
    }

    if (nextLocation) {
      if (nextLocation.tile === 'health') {
        this.props.getHealth(nextLocation);
      }

      if (nextLocation.tile === 'weapon1' || nextLocation.tile === 'weapon2') {
        this.props.getWeapon(nextLocation);
      }

      this.props.moveToNewLocation({ x: nextLocation.x, y: nextLocation.y });
      this.setState({ player: playerPosition, oldLocation: oldLocation });
    }


    if (nextLocation === undefined) {
      this.props.moveToNewLocation({ x: oldLocation.x, y: oldLocation.y });
      this.setState({ player: oldLocation });
    }
  }

  render() {
    return (
      <div className="App">
        <Map oldLocation={this.state.oldLocation} />
      </div>
    );
  }
}


function dispatchStateToProps(dispatch) {
  return {
    updateGrid: (newGrid) => dispatch(actions.changeGrid(newGrid)),
    moveToNewLocation: (newLocation) => dispatch(actions.movePlayer(newLocation)),
    getHealth: (object) => dispatch(actions.getHealth(object)),
    getEnemy: (object) => dispatch(actions.getEnemy(object)),
    getWeapon: (object) => dispatch(actions.getWeapon(object))
  }
}

export default connect(null, dispatchStateToProps)(App);;
