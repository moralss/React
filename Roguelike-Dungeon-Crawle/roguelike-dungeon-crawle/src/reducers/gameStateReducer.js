const initialState = {
    healths: [],
    weapons: [],
    enemys: [],
    lives: 0,
    weaponPower: 0

}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_HEALTH':
            return { ...state, healths: [...state.healths, action.payload], lives: state.healths.length + 1 }

        case 'UPDATE_WEAPON':
            return action.payload !== 'weapon1' ? {
                ...state, weapons: [...state.weapons, action.payload],
                weaponPower: state.weapons.length + 2
            } :
                {
                    ...state, weapons: [...state.weapons, action.payload],
                    weaponPower: state.weapons.length + 1
                }
        case 'UPDATE_ENEMY':
            return { ...state, enemys: [...state.enemys, action.payload], lives: state.enemys.length - 1 }
    }


    return state;
}


export default playerReducer;