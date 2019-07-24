import {ADD_TO_COUNTER , SUBTRACT_TO_COUNTER} from '../actiontypes';

let initalState = {
    counter : 0,
    highscore : 0
}
  
  
  export let counterReducer = (state = initalState , action = 0) =>{
      switch(action.type){
          case ADD_TO_COUNTER: 
          return { ...state , counter : state.counter + 1};
          case SUBTRACT_TO_COUNTER:
          return {...state , counter : state.counter -1 }
        default:
          return state;
    
      }
  
  }