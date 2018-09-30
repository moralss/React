
export function createGridToDisplay() {
    let gameGrid = [];
    for (let y = 0; y <= 9; y++) {
        for (let x = 0; x <= 9; x++) {
            gameGrid.push({ x: x, y: y, tile: null });
        }

    }

    let randomTiles = generateRandomTiles();
    randomTiles.forEach(tile => {
        gameGrid.map(cell => {
            if (tile.x == cell.x && tile.y == cell.y) {
                cell.tile = tile.tile;
            }
        })
    })

    return gameGrid;
}

function generateRandomTiles() {
    let healths = [];
    for (let secondIndex = 8; secondIndex < 9; secondIndex++) {
        for (let index = 8; index < 9; index++) {
            let health = { x: Math.floor(Math.random() * 9), y: Math.floor(Math.random() * 9), tile: 'health' };
            if (healths.indexOf(health) === -1) {
                healths.push(health);
                console.log(healths.length);
            }
        }
    }




    let weapons1 = [];
    for (let secondIndex = 7; secondIndex < 9; secondIndex++) {
        for (let index = 7; index < 9; index++) {
            let weapon = { x: Math.floor(Math.random() * 9), y: Math.floor(Math.random() * 9), tile: 'weapon1' };
            if (healths.indexOf(weapon) === -1 && weapons1.indexOf(weapon) == -1) {
                weapons1.push(weapon);

            }
        }
    }

    let points = [];
    for (let secondIndex = 7; secondIndex < 9; secondIndex++) {
        for (let index = 7; index < 9; index++) {
            let point = { x: Math.floor(Math.random() * 9), y: Math.floor(Math.random() * 9), tile: 'point' };
            if (points.indexOf(point) === -1 && healths.indexOf(point) === -1 && weapons1.indexOf(point) == -1) {
                points.push(point);
            }
        }
    }

    let enemys = [];
    for (let secondIndex = 5; secondIndex < 9; secondIndex++) {
        for (let index = 5; index < 9; index++) {
            let enemy = { x: Math.ceil(Math.random() * 9), y: Math.ceil(Math.random() * 9), tile: 'enemy' };
            if (enemys.indexOf(enemy) === -1 && points.indexOf(enemy) == -1 &&
                healths.indexOf(enemy) === -1 && weapons1.indexOf(enemy) == -1) {
                enemys.push(enemy);
            }
        }
    }


    let weapons2 = [];
    for (let secondIndex = 7; secondIndex < 9; secondIndex++) {
        for (let index = 7; index < 9; index++) {
            let weapon2 = { x: Math.ceil(Math.random() * 9), y: Math.ceil(Math.random() * 9), tile: 'weapon2' };
            if (weapons2.indexOf(weapon2) === -1 && points.indexOf(weapon2) == -1 &&
                healths.indexOf(weapon2) === -1 && weapons1.indexOf(weapon2) == -1 &&
                enemys.indexOf(weapon2) === -1) {
                weapons2.push(weapon2);
            }
        }
    }


    let tiltes = [...healths, ...weapons1, ...weapons2, ...points, ...enemys];


    return tiltes;



}



