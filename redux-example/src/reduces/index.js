
import {counterReducer} from './counterReducer';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counterReducer: counterReducer
});


export default rootReducer;
