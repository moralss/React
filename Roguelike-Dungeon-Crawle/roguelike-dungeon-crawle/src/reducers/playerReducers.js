const initialState = {
    position: { x: 0, y: 0 },
}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            return { ...state, position: action.payload }
    }
    return state;
}

export default playerReducer;