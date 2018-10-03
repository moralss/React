const initialState = {
    healths: [],
    weapons: [],
    enemys: [],
    lives: 0,
    weaponPower: 0,
    enemysKilled: 0
}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_HEALTH':
            return { ...state, healths: [...state.healths, action.payload], lives: state.lives + 1 }

        case 'UPDATE_WEAPON':
            return {
                ...state, weapons: [...state.weapons, action.payload],
                weaponPower: state.weaponPower + action.payload.weaponPower
            }

        case 'UPDATE_ENEMY':
            return { ...state, enemys: [...state.enemys, action.payload], lives: state.enemys.length - 1 }

        case 'SUBTRACT_WEAPON':
            return {
                ...state,
                weaponPower: state.weaponPower - action.payload, enemysKilled: state.enemysKilled + 1
            }

        case 'SUBTRACT_LIVE':
            return {
                ...state,
                lives: state.lives - action.payload
            }

        case 'NEXT_LEVEL':
            return {
                ...state, enemysKilled: action.payload

            }
        default:
            return state;
    }
}


export default playerReducer;
