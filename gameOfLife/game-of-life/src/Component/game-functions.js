export const getAllNeighbors = object => {
  var allItsNeighbors = [
    [object.xAxis - 1, object.yAxis - 1],
    [object.xAxis - 1, object.yAxis + 1],
    [object.xAxis - 1, object.yAxis],
    [object.xAxis + 1, object.yAxis],
    [object.xAxis + 1, object.yAxis - 1],
    [object.xAxis + 1, object.yAxis + 1],
    [object.xAxis, object.yAxis - 1],
    [object.xAxis, object.yAxis + 1]
  ];
  return allItsNeighbors;
};

export const getHighestAndLowest = aliveCells => {
  let arrayX = [];
  let arrayY = [];
  aliveCells.forEach(cell => {
    arrayX.push(cell.xAxis);
    arrayY.push(cell.yAxis);
  });

  let lowestX = arrayX.sort((a, b) => a - b)[0];
  let lowestY = arrayY.sort((a, b) => a - b)[0];
  var HighestX = arrayX.sort((a, b) => b - a)[0];
  let HighestY = arrayY.sort((a, b) => b - a)[0];
  return { lowestX, lowestY, HighestY, HighestX };
};

export const createInfiniteGrid = distance => {
  let infiniteGrid = [];
  for (
    let counterX = distance.lowestX - 2;
    counterX < distance.HighestX + 2;
    counterX++
  ) {
    for (
      let counterY = distance.lowestY - 2;
      counterY < distance.HighestY + 2;
      counterY++
    ) {
      infiniteGrid.push({ xAxis: counterX, yAxis: counterY, status: false });
    }
  }

  return infiniteGrid;
};

export const generateRandomGen = () => {
  let currentGeneration = [];
  for (let secondIndex = 2; secondIndex < 9; secondIndex++) {
    for (let index = 2; index < 9; index++) {
      let newItem = {
        xAxis: Math.floor(Math.random() * 9),
        yAxis: Math.floor(Math.random() * 9),
        status: true
      };
      if (currentGeneration.indexOf(newItem) === -1) {
        currentGeneration.push(newItem);
      }
    }
  }
  return currentGeneration;
};

export const createEmptyDisplayGrid = () => {
  let grid = [];

  for (let yAxisCounter = 0; yAxisCounter <= 9; yAxisCounter++) {
    for (let xAxisCounter = 0; xAxisCounter <= 9; xAxisCounter++) {
      grid.push({
        xAxis: xAxisCounter,
        yAxis: yAxisCounter,
        status: false
      });
    }
  }

  return grid;
};




export const getAliveCells = (gridToDisplay) =>  {
    let aliveCells = [];
    gridToDisplay.forEach(cell => {
      if (cell.status) {
        aliveCells.push(cell);
      }
    });

    return aliveCells;
  }