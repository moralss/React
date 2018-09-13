const initialState = {
    position: [0, 0],
    spriteLocation: '0px 0px',


}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MOVE_PLAYER':
            console.log("flow through")
            return {
                ...action.payload,
            }
        case 'COLLECT_HEALTH':
            return {
                ...action.payload,
            }


        default:
            return state
    }
}

export default playerReducer;