import {
  messageReducer
}
from './saveMessageReducer';

import {
  counterReducer
} from './counterReducer';
import {
  combineReducers
} from "redux";

const rootReducer = combineReducers({
  counterReducer: counterReducer,
  messageReducer
});



export default rootReducer;