import React, { Component } from 'react';
import './App.css';
import Grid from './container/Grid';
import MenuSection from './container/MenuSection';
import GameInfo from './container/GameInfo';
import { getNextGeneration } from './game-generator.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [],
      aliveCells: [],
      generationNumber: 1,
      gameStatus: "Off",
      speed: 2000
    }
  }


  componentDidMount() {
    var currentGameState = getNextGeneration();
    this.setState({
      grid: currentGameState.gridDisplay,
      aliveCells: [],
      generationNumber: 1, gameStatus: "Off"
    })
  }


  gameMode() {
    var generationCount = this.state.generationNumber < 1 && this.state.aliveCells.length > 0 ? 1 : this.state.generationNumber;
    this.setState({ gameStatus: "On" })

    var generationLoop = setInterval(() => {
      var nextGeneration = getNextGeneration(this.state.aliveCells);
      
      this.setState({
        grid: nextGeneration.gridDisplay,
        aliveCells: nextGeneration.aliveCells,
        generationNumber: generationCount
      })

      if (this.state.aliveCells.length === 0) {
        this.setState({ gameStatus: "Over", generationNumber: 0 })
        clearInterval(generationLoop)

      } else if (this.state.gameStatus === "paused") {
        clearInterval(generationLoop)
      }

      generationCount += 1;
    }, this.state.speed);
  }

  pauseGame() {
    this.setState({ gameStatus: "paused" })
  }


  clearGrid() {
    this.state.grid.forEach(element => {
      element.status ? element.status = false :
        this.setState({ grid: this.state.grid, aliveCells: [] })
    })
  }


  toggleAliveOrDead(cell) {
    var cellPosition = this.state.grid.indexOf(cell);
    // console.log("cellPosition" , cellPosition);

    if (cell.status) {
      this.state.grid[cellPosition].status = false;

      let aliveCells = this.state.aliveCells;
      var positionInAlive = aliveCells.indexOf(aliveCells.find(alive => alive.xAxis === alive.xAxis && alive.yAxis === alive.yAxis));
      aliveCells.splice(positionInAlive, positionInAlive + 1)

    } else {
      this.state.grid[cellPosition].status = true;
      this.state.aliveCells.push(this.state.grid[cellPosition]);
    }

    this.setState({ grid: this.state.grid, aliveCells: this.state.aliveCells })
  }

  render() {
    return (
      <div>
        <MenuSection
          gameMode={() => this.gameMode()}
          pauseGame={() => this.pauseGame()}
          clearGrid={() => this.clearGrid()}
        />

        <GameInfo
          generationNumber={this.state.generationNumber}
          aliveCells={this.state.aliveCells.length}
          gameStatus={this.state.gameStatus}
        />

        <Grid
          grid={this.state.grid}
          aliveCells={this.state.aliveCells}
          toggleAliveOrDead={this.toggleAliveOrDead.bind(this)}
        />

      </div>
    );
  }
}

export default App;
