import React, { Component } from 'react';
import './App.css';
import Cell from './Component/Cell';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gridToDisplay: [],
      aliveCells: [],
      highestAndLowest: [],
      fakeGrid: [],
      allItsNeighbors: [],
      generationCount: 0,
      changeGameMode: 'on',

    }
  }

  getHighestAndLowest() {
    let arrayX = [];
    let arrayY = [];
    this.state.aliveCells.forEach(cell => {
      arrayX.push(cell.xAxis);
      arrayY.push(cell.yAxis);
    })
    let lowestX = arrayX.sort((a, b) => a - b)[0];
    let lowestY = arrayY.sort((a, b) => a - b)[0];
    var HighestX = arrayX.sort((a, b) => b - a)[0];
    let HighestY = arrayY.sort((a, b) => b - a)[0];
    return { lowestX, lowestY, HighestY, HighestX };
  }

  createFake(distance) {
    let fakeGrid = [];
    for (let counterX = distance.lowestX - 2; counterX < distance.HighestX + 2; counterX++) {
      for (let counterY = distance.lowestY - 2; counterY < distance.HighestY + 2; counterY++) {
        fakeGrid.push({ xAxis: counterX, yAxis: counterY, status: false });
      }
    }
    this.setState({ fakeGrid: fakeGrid });
  }

  getAllNeighbors(object) {
    var allItsNeighbors = [
      [object.xAxis - 1, object.yAxis - 1],
      [object.xAxis - 1, object.yAxis + 1],
      [object.xAxis - 1, object.yAxis],
      [object.xAxis + 1, object.yAxis],
      [object.xAxis + 1, object.yAxis - 1],
      [object.xAxis + 1, object.yAxis + 1],
      [object.xAxis, object.yAxis - 1],
      [object.xAxis, object.yAxis + 1]]
    return allItsNeighbors;

  }


  pauseGame() {
    let changeGameMode = 'off';
    this.setState({ changeGameMode });

  }

  clearBoard() {
    this.setState({ changeGameMode: 'clear' });
    this.generateNextGen()

    this.state.fakeGrid.forEach(element => {
      if (element.status === true) {
        element.status = false;
      }
      this.setState({ aliveCells: [] })
    })

    // this.setState({ changeGameMode: 'clear' });

  }


  generateNextGen() {

    // this.setState({changeGameMode : 'on'});

    let gameSimulation = setInterval(() => {

      if (this.state.aliveCells.length === 0 && this.state.changeGameMode === 'clear') {
        this.setState({ generationCount: 0 });
        clearInterval(gameSimulation);
      }

      if (this.state.changeGameMode == 'off') {
        clearInterval(gameSimulation);
      }

      if (this.state.changeGameMode == 'on') {
        this.state.generationCount++;
        gameSimulation;
      }

      // if (this.state.changeGameMode == 'clear') {
      //   clearInterval(gameSimulation);
      //   this.removeAliveCells()
      // }


      let distance = this.getHighestAndLowest();
      this.createFake(distance);
      this.determineNextGen();
      console.log(this.state.generationCount);
    }, 1000);
  }


  playGame() {
    this.setState({ changeGameMode: 'on' });

    this.generateNextGen()


  }

  determineNextGen() {
    this.state.aliveCells.forEach(currentCell => {
      for (let object of this.state.fakeGrid) {
        if (object.xAxis === currentCell.xAxis && object.yAxis === currentCell.yAxis) {
          let foundIndex = this.state.fakeGrid.indexOf(object);
          this.state.fakeGrid[foundIndex].status = true
        }
      }
    });

    var newGeneration = [];
    this.state.fakeGrid.forEach(gridCell => {
      var aliveNeighbors = []
      let allNeighbors = this.getAllNeighbors(gridCell);
      allNeighbors.forEach(singleNeighbor => {
        var neighborMatch = this.state.fakeGrid.find(cell => cell.xAxis === singleNeighbor[0] &&
          cell.yAxis === singleNeighbor[1]);

        if (neighborMatch !== undefined && neighborMatch.status === true) {
          aliveNeighbors.push(neighborMatch);
        }
      });

      if (gridCell.status === false && aliveNeighbors.length === 3) {
        newGeneration.push({ ...gridCell, status: true })
      } else if (gridCell.status === true && (aliveNeighbors.length === 2 || aliveNeighbors.length === 3)) {
        newGeneration.push({ ...gridCell, status: true })
      }

    });

    this.setState({ aliveCells: newGeneration })
    this.createGrid(newGeneration);
  }


  componentWillMount() {
    this.displayGrid()

  }


  displayGrid() {
    let grid = this.createGrid();
    this.setState({ gridToDisplay: grid });
  }


  createGrid(aliveCells) {
    var gridToDisplay = [];
    for (let yAxisCounter = 0; yAxisCounter <= 9; yAxisCounter++) {
      for (let xAxisCounter = 0; xAxisCounter <= 9; xAxisCounter++) {
        gridToDisplay.push({ xAxis: xAxisCounter, yAxis: yAxisCounter, status: false })
      }
    }

    this.setState({ gridToDisplay: gridToDisplay });
    let copy = [...this.state.gridToDisplay];
    if (aliveCells !== undefined) {
      aliveCells.forEach(currentCell => {
        let aliveCellFound = copy.find(cell => cell.xAxis === currentCell.xAxis &&
          cell.yAxis === currentCell.yAxis);
        if (aliveCellFound !== undefined) {
          let aliveCellPosition = copy.indexOf(aliveCellFound);
          copy[aliveCellPosition].status = true;
        }
        this.setState({ gridToDisplay: copy });
      });
      return copy;
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
    this.getAliveCells();

  }

  getAliveCells() {
    let aliveCells = [];
    this.state.gridToDisplay.forEach(cell => {
      if (cell.status) {
        aliveCells.push(cell);
        this.setState({ aliveCells: aliveCells });
      }
    })
  }


  render() {
    return (
      <div className="App" >
        <div className="menu-bar">
          <label> Generation </label> <span> {this.state.generationCount}</span>
          <button onClick={() => this.playGame()}> Play </button>
          <button onClick={() => this.pauseGame()}> Pause </button>
          <button onClick={() => this.clearBoard()}> Clear </button>
          {/* <Cell cell={cell} /> */}
        </div>
        <div className="grid"> {this.state.gridToDisplay.map(cell => {
          return (<button key={this.state.gridToDisplay.indexOf(cell)}
            onClick={() => this.toggleLife(cell)} className={`${cell.status}`}>

          </button>)
        })}</div>
      </div>
    );
  }
}


export default App;
