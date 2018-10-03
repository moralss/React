
const initialState = {
    tiles: []
}

const mapReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_GRID':
            return { ...state, tiles: action.payload }
        default:
            return state;
    }
}

export default mapReducers;