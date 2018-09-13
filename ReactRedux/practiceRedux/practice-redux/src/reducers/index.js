import { combineReducers } from 'redux';
import ActiveBook from './reducer_active_book';
import AddBook from './reducer_add_book';


const rootReducer = combineReducers({
  activeBook: ActiveBook,
  addbook : AddBook,
});

export default rootReducer;
