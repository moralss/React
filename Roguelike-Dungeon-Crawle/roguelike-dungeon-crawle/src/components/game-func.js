function createBoss() {
  let boss;
  let randomEnd = 14;
  for (let secondIndex = 13; secondIndex < randomEnd; secondIndex++) {
    for (let index = 13; index < randomEnd; index++) {
      boss = createCellName("boss", randomEnd);
    }
  }
  return boss;
}

export function createGridToDisplay(isBossEnabled) {
  let gameGrid = [];
  let gridEndingValue = 14;
  for (let y = 0; y <= gridEndingValue; y++) {
    for (let x = 0; x <= gridEndingValue; x++) {
      gameGrid.push({ x: x, y: y, tile: null, show: false });
    }
  }

  if (isBossEnabled === true) {
    let boss = createBoss();
    let randomTiles = generateRandomTiles(boss);
    randomTiles.forEach(tile => {
      gameGrid.map(cell => {
        if (tile.x == cell.x && tile.y == cell.y) {
          cell.tile = tile.tile;
        }
      });
    });
  } else {
    let randomTiles = generateRandomTiles({});
    randomTiles.forEach(tile => {
      gameGrid.map(cell => {
        if (tile.x == cell.x && tile.y == cell.y) {
          cell.tile = tile.tile;
        }
      });
    });
  }

  return gameGrid;
}

function createCellName(name, randomEnd) {
  let object = {
    x: Math.floor(Math.random() * randomEnd),
    y: Math.floor(Math.random() * randomEnd),
    tile: `${name}`
  };

  return object;
}

function generateRandomTiles(boss) {
  let randomEnd = 14;
  let tiles = [];

  tiles.push(boss);
  console.log("boss" , boss);

  for (let secondIndex = 12; secondIndex < randomEnd; secondIndex++) {
    for (let index = 12; index < randomEnd; index++) {
      let health = createCellName("health", randomEnd);
      if (tiles.indexOf(health) === -1) {
        tiles.push(health);
      }
    }
  }

  for (let secondIndex = 12; secondIndex < randomEnd; secondIndex++) {
    for (let index = 12; index < randomEnd; index++) {
      let health = createCellName("health", randomEnd);
      if (tiles.indexOf(health) === -1) {
        tiles.push(health);
      }
    }
  }

  for (let secondIndex = 11; secondIndex < randomEnd; secondIndex++) {
    for (let index = 11; index < randomEnd; index++) {
      let weapon = createCellName("weapon1", randomEnd);
      if (tiles.indexOf(weapon) === -1) {
        tiles.push(weapon);
      }
    }
  }

  for (let secondIndex = 8; secondIndex < randomEnd; secondIndex++) {
    for (let index = 8; index < randomEnd; index++) {
      let enemy = createCellName("enemy", randomEnd);
      if (tiles.indexOf(enemy) === -1) {
        tiles.push(enemy);
      }
    }
  }

  for (let secondIndex = 12; secondIndex < randomEnd; secondIndex++) {
    for (let index = 12; index < randomEnd; index++) {
      let weapon2 = createCellName("weapon2", randomEnd);
      if (tiles.indexOf(weapon2) === -1) {
        tiles.push(weapon2);
      }
    }
  }

  for (let secondIndex = 8; secondIndex < randomEnd; secondIndex++) {
    for (let index = 8; index < randomEnd; index++) {
      let wall = createCellName("wall", randomEnd);
      if (tiles.indexOf(wall) === -1) {
        tiles.push(wall);
      }
    }
  }

  return tiles;
}
