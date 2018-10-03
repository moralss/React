export const movePlayer = (coordinates) => {
    return {
        type: 'MOVE_PLAYER',
        payload: coordinates
    }
}

export const moveToOldPosition = (coordinates) => {
    return {
        type: 'MOVE_TO_OLD_POSITION',
        payload: coordinates
    }

}

export const changeGrid = (newGrid) => {
    return {
        type: 'UPDATE_GRID',
        payload: newGrid
    }
}

export const getHealth = (object) => {
    return {
        type: 'UPDATE_HEALTH',
        payload: object
    }
}


export const getWeapon = (object) => {
    return {
        type: 'UPDATE_WEAPON',
        payload: object
    }
}

export const getEnemy = (object) => {
    return {
        type: 'UPDATE_ENEMY',
        payload: object
    }
}

export const useWeaponPower = (object) => {
    return {
        type: 'SUBTRACT_WEAPON',
        payload: object
    }
}

export const subtractLive = (amount) => {
    return {
        type: 'SUBTRACT_LIVE',
        payload: amount
    }
}



export const nextLevel = () => {
    return {
        type: 'NEXT_LEVEL',
        payload: 0
    }
}