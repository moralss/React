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


