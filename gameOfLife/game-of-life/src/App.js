import React, { Component } from "react";
import "./App.css";
import * as func from './Component/game-functions';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridToDisplay: [],
      aliveCells: [],
      highestAndLowest: [],
      infiniteGrid: [],
      allItsNeighbors: [],
      generationCount: 0,
      changeGameMode: "on"
    };
  }

  pauseGame() {
    let changeGameMode = "off";
    this.setState({ changeGameMode });
  }

  clearBoard() {
    this.setState({ changeGameMode: "clear" });
    this.generateNextGen();
    this.state.infiniteGrid.forEach(element => {
      if (element.status === true) {
        element.status = false;
      }
      this.setState({ aliveCells: [] });
    });
  }

  generateNextGen() {
    let gameSimulation = setInterval(() => {
      if (
        this.state.aliveCells.length === 0 &&
        this.state.changeGameMode === "clear"
      ) {
        this.setState({ generationCount: 0 });
        clearInterval(gameSimulation);
      }

      if (this.state.aliveCells.length === 0) {
        clearInterval(gameSimulation);
        this.setState({ generationCount: 0 });
      }

      if (this.state.changeGameMode == "off") {
        clearInterval(gameSimulation);
      }

      if (this.state.changeGameMode == "on") {
        this.state.generationCount++;
        gameSimulation;
      }

      let distance = func.getHighestAndLowest(this.state.aliveCells);
      const infiniteGrid = func.createInfiniteGrid(distance);
      this.setState({ infiniteGrid: infiniteGrid });

      this.determineNextGen();
    }, 1000);
  }

  playGame() {
    this.setState({ changeGameMode: "on" });
    this.generateNextGen();
  }

  determineNextGen() {
    this.state.aliveCells.forEach(currentCell => {
      for (let object of this.state.infiniteGrid) {
        if (
          object.xAxis === currentCell.xAxis &&
          object.yAxis === currentCell.yAxis
        ) {
          let foundIndex = this.state.infiniteGrid.indexOf(object);
          this.state.infiniteGrid[foundIndex].status = true;
        }
      }
    });

    var newGeneration = [];
    this.state.infiniteGrid.forEach(gridCell => {
      var aliveNeighbors = [];
      let allNeighbors = func.getAllNeighbors(gridCell);
      allNeighbors.forEach(singleNeighbor => {
        var neighborMatch = this.state.infiniteGrid.find(
          cell =>
            cell.xAxis === singleNeighbor[0] && cell.yAxis === singleNeighbor[1]
        );
        if (neighborMatch !== undefined && neighborMatch.status === true) {
          aliveNeighbors.push(neighborMatch);
        }
      });

      if (gridCell.status === false && aliveNeighbors.length === 3) {
        newGeneration.push({ ...gridCell, status: true });
      } else if (
        gridCell.status === true &&
        (aliveNeighbors.length === 2 || aliveNeighbors.length === 3)
      ) {
        newGeneration.push({ ...gridCell, status: true });
      }
    });

    this.setState({ aliveCells: newGeneration });
    this.createGrid(newGeneration);
  }

  componentDidMount() {
    let currentGeneration = func.generateRandomGen();    
    this.generateNextGen();
    this.setState({ aliveCells: currentGeneration });
    this.createGrid(currentGeneration);
  }


  createGrid(aliveCells) {
    let gridToDisplay = func.createEmptyDisplayGrid();
    this.setState({ gridToDisplay: gridToDisplay });    
    if (aliveCells !== undefined) {
      aliveCells.forEach(currentCell => {
        let aliveCellFound = gridToDisplay.find(
          cell =>
            cell.xAxis === currentCell.xAxis && cell.yAxis === currentCell.yAxis
        );
        if (aliveCellFound !== undefined) {
          let aliveCellPosition = gridToDisplay.indexOf(aliveCellFound);
          gridToDisplay[aliveCellPosition].status = true;
        }
        this.setState({ gridToDisplay: gridToDisplay });
      });
      return gridToDisplay;
    }
    return gridToDisplay;
  }

  toggleLife(cell) {
    let currentGrid = [];
    currentGrid = this.state.gridToDisplay;
    let foundItem = currentGrid.find(element => element === cell);
    let foundIndex = currentGrid.indexOf(foundItem);
    if (!cell.status) {
      currentGrid[foundIndex].status = true;
      this.setState({ gridToDisplay: currentGrid });
      this.setState({ aliveCells: cell });
    } else {
      currentGrid[foundIndex].status = false;
      this.setState({ gridToDisplay: currentGrid });
    }
    let userInputAlive = func.getAliveCells(this.state.gridToDisplay);
    this.setState({ aliveCells:userInputAlive });

  }


  render() {
    return (
      <div className="App">
        <div className="menu-bar">
          <label> Generation </label> <span> {this.state.generationCount}</span>
          <button onClick={() => this.playGame()}> Play </button>
          <button onClick={() => this.pauseGame()}> Pause </button>
          <button onClick={() => this.clearBoard()}> Clear </button>
        </div>
        <div className="grid">
          {" "}
          {this.state.gridToDisplay.map(cell => {
            return (
              <button
                key={this.state.gridToDisplay.indexOf(cell)}
                onClick={() => this.toggleLife(cell)}
                className={`${cell.status}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
