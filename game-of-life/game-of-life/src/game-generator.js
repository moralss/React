function createGridToDisplay(aliveCells) {
    var gridToDisplay = [];
    for (let xAxisCounter = 0; xAxisCounter <= 9; xAxisCounter++) {
        for (let yAxisCounter = 0; yAxisCounter <= 9; yAxisCounter++) {
            gridToDisplay.push({ xAxis: xAxisCounter, yAxis: yAxisCounter, status: false })
        }
    }

    aliveCells.forEach(currentAlive => {
        var aliveCellFindOnGrid = gridToDisplay.find(existGridcell =>
            existGridcell.xAxis === currentAlive.xAxis &&
            existGridcell.yAxis === currentAlive.yAxis);


        if (aliveCellFindOnGrid) {

            gridToDisplay[gridToDisplay.indexOf(aliveCellFindOnGrid)].status = true;
        }
    });

    return gridToDisplay;
}

function getAllNeighbors(object) {
    var allItsNeighbors = [
        [object.xAxis - 1, object.yAxis - 1],
        [object.xAxis - 1, object.yAxis + 1],
        [object.xAxis - 1, object.yAxis],
        [object.xAxis + 1, object.yAxis],
        [object.xAxis + 1, object.yAxis - 1],
        [object.xAxis + 1, object.yAxis + 1],
        [object.xAxis, object.yAxis - 1],
        [object.xAxis, object.yAxis + 1]];

    return allItsNeighbors;
}


function getLowestAndHighest(allAliveCells) {
    var allXAxis = [];
    var allYAxis = [];
    allAliveCells.forEach(alive => {
        allXAxis.push(alive.xAxis);
        allYAxis.push(alive.yAxis);
        // console.log("all X Axios" , allXAxis , "all Y Axios" ,  allYAxis);

    });

    var lowestX = allXAxis.sort((a, b) => a - b)[0];
    var highestX = allXAxis.sort((a, b) => b - a)[0];
    var lowestY = allYAxis.sort((a, b) => a - b)[0];
    var highestY = allYAxis.sort((a, b) => b - a)[0];

// console.log({ lowestX: lowestX, lowestY: lowestY,  highestX: highestX , highestY: highestY  });

    return { lowestX: lowestX, lowestY: lowestY,  highestX: highestX , highestY: highestY  }

}



function getNextGeneration(currentGeneration) {
    var grid = [];
    var newGeneration = [];
    if (currentGeneration === undefined) {
        currentGeneration = [];
    }

    var lowestAndHighest = getLowestAndHighest(currentGeneration)
    for (let yAxisCounter = lowestAndHighest.lowestY - 2; yAxisCounter <= lowestAndHighest.highestY + 2; yAxisCounter++) {
        for (let xAxisCounter = lowestAndHighest.lowestX - 2; xAxisCounter <= lowestAndHighest.highestX + 2; xAxisCounter++) {
            // console.log("y" , yAxisCounter , 'x', xAxisCounter);
            grid.push({ xAxis: xAxisCounter, yAxis: yAxisCounter, status: false })
   
        }
    }

    currentGeneration.forEach(currentCell => {
        var cellFound = grid.find(cell => cell.xAxis === currentCell.xAxis && cell.yAxis === currentCell.yAxis);
        var position = grid.indexOf(cellFound);
        grid[position].status = true
    });

    grid.forEach(gridCell => {
        // console.log("currentCellNeighbors " , gridCell);

        var aliveNeighbors = [];
        var currentItemsNeighbors = getAllNeighbors(gridCell);
        // console.log("split");

        currentItemsNeighbors.forEach(singleNeighbor => {
            var neighborMatch = grid.find(cell => cell.xAxis === singleNeighbor[0] && cell.yAxis === singleNeighbor[1]);
            // console.log("neighborMatch" , neighborMatch);
            if (neighborMatch !== undefined && neighborMatch.status === true) {
                aliveNeighbors.push(neighborMatch);
                // console.log("aliveNeighbors" , aliveNeighbors);
            }
        });


        if (gridCell.status === false && aliveNeighbors.length === 3) {
            newGeneration.push(gridCell)

        } else if (gridCell.status === true && (aliveNeighbors.length === 2 || aliveNeighbors.length === 3)) {
            newGeneration.push(gridCell)
        }
    });

    newGeneration.forEach(newCell => {
        newCell.status = true;
    });

    var display = createGridToDisplay(newGeneration)
    return { aliveCells: newGeneration, gridDisplay: display };
}


module.exports = { getNextGeneration }