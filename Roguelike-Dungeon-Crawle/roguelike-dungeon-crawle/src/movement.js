import store from './config/store'

const SPRIT_SIZE = 40;
const MAP_HEIGHT = SPRIT_SIZE * 10
const MAP_WIDTH = SPRIT_SIZE * 20


export default function handleMovement(player) {
    return player;
}


window.addEventListener('keydown', (e) => {
    handleKeyDown(e)
})


function handleKeyDown(e) {
    switch (e.keyCode) {
        case 37:
            return attemptMove('WEST')
        case 38:
            return attemptMove('NORTH')
        case 39:
            return attemptMove('EAST')
        case 40:
            return attemptMove('SOUTH')
    }
}


function attemptMove(direction) {
    const oldPos = store.getState().player.position
    const newPos = getNewPosition(oldPos, direction)
    if (observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos))
        dispatchMove(newPos);
}


function observeBoundaries(oldPos, newPos) {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRIT_SIZE) &&
        (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRIT_SIZE)
}

function getNewPosition(oldPos, direction) {
    switch (direction) {
        case 'WEST':
            return [oldPos[0] - SPRIT_SIZE, oldPos[1]]
        case 'EAST':
            return [oldPos[0] + SPRIT_SIZE, oldPos[1]]
        case 'NORTH':
            return [oldPos[0], oldPos[1] - SPRIT_SIZE]
        case 'SOUTH':
            return [oldPos[0], oldPos[1] + SPRIT_SIZE]
    }
}


function dispatchHealth(newPos) {
    const tiles = store.getState().map.tiles
    console.log("store " , store.getState())
    const copy = [...tiles];

    const currentPos = store.getState().player.position;
    const y = currentPos[1] / SPRIT_SIZE;
    const x = currentPos[0] / SPRIT_SIZE + 1;
    console.log("x", x, "y", y);

    let health = copy.filter(tile => tile === tiles[y])[0];
    // const inDebt = [...health.slice(0, grapHealth), 0, ...health.slice(grapHealth + 1)];

    let grapHealth = health.indexOf(health[x]);
    health[grapHealth] = 0;



    // console.log("copy", copy);
    // console.log("tiles", tiles);
}

function observeImpassable(oldPos, newPos) {
    const tiles = store.getState().map.tiles
    const y = newPos[1] / SPRIT_SIZE;
    const x = newPos[0] / SPRIT_SIZE;
    var nextTile = tiles[y][x];

    if (nextTile === 2) {
        dispatchHealth(tiles)
    }

    return nextTile < 5;
}


function dispatchMove(newPos) {
    store.dispatch({
        type: 'MOVE_PLAYER',
        payload: {
            position: newPos
        }
    })
}



