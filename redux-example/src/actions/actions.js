import * as actions from '../actiontypes';
import axios from 'axios';


export const addToCounter = () => {
  return {
    type: actions.ADD_TO_COUNTER,
  }
}


export const getMessage = () => {
  return async dispatch => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API}/person/`)
      console.log(data);
    } catch (e) {
      console.log("error", e);
    }
  }
}

export const saveMessage = (payload) => {
  return async dispatch => {

    dispatch({
      type: "moral"
    })
  }
}