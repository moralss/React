import * as actions from '../actiontypes';
import axios from 'axios';

export const addToCounter = () => {
  return {
    type: actions.ADD_TO_COUNTER,
  }
}


export const subtractCounter = () => {
  return {
    type: actions.SUBTRACT_TO_COUNTER,
  }
}


export const saveMessage = (payload) => {
  return async dispatch => {

    dispatch({
      type: "moral"
    })
  }
}