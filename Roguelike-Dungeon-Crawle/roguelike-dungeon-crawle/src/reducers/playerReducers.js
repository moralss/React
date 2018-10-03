const initialState = {
    position: { x: 0, y: 0 },
    oldPosition: { x: 0, y: 0 }
}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return { ...state, position: action.payload }
        case 'MOVE_TO_OLD_POSITION':
            return { ...state, oldPosition: action.payload }
        default:
            return state;
    }
}

export default playerReducer;