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

// export const saveMessage = (payload) => {
//   return {
//     type: actions.SAVE_MESSAGES,
//     payload

//   }
// }


export const saveMessage = (payload) => {
  return async dispatch => {
    try {
      const {
        data
      } = await axios.get(
        "http://ac88a44a6935711e982b602f197ebe6f-1529281652.eu-west-2.elb.amazonaws.com/person/"
      )
      dispatch({
        type: actions.SAVE_MESSAGES,
        payload: data
      })
      console.log("data", data);

    } catch (e) {
      console.log(e);
      dispatch({
        type: actions.Error,
        e
      })
    }
  }
}