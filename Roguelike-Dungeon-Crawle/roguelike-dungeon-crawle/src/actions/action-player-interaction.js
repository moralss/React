export const getHealth = () => {
    return {
        type: 'UPDATE_HEALTH'
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

export const subtractLife = (amount) => {
    return {
        type: 'SUBTRACT_LIFE',
        payload: amount
    }
}


