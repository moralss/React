import {
  SAVE_MESSAGES,
  USER_SAID_HI,
  USER_SAID_BYE
} from '../actiontypes';

let initalState = {
  listOfMessages: [],
  checkHi: false,
  checkBye: false,
}


export let messageReducer = (state = initalState, action = 0) => {
  switch (action.type) {
    case SAVE_MESSAGES:
      console.log("action ", action.payload)
      return {
        ...state, listOfMessages: [...action.payload]
      };
    case USER_SAID_HI:
      return {
        ...state,
        checkHi: true
      };
    case USER_SAID_BYE:
      return {
        ...state,
        checkBye: true
      };
    default:
      return state;

  }

}