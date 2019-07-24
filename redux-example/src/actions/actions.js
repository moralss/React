import * as actions from '../actiontypes';

export const addToCounter = () => {
    return {
        type: actions.ADD_TO_COUNTER,
        
    }
}

export const subtractCounter = () => {
    return {
        type : actions.SUBTRACT_TO_COUNTER,
    }
}
   