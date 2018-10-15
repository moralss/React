
const initialState = {
    gridToDisplay: []
}

const gameToDisplayReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_GRID_TO_DISPLAY':
            return { ...state, tiles: action.payload }
        default:
            return state;
    }
}

export default gameToDisplayReducer;