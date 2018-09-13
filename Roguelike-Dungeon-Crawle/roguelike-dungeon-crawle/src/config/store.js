import {createStore , combineReducers } from 'redux';

import playerReducers from '../reducers/playerReducers';
import mapReducers from '../reducers/mapReducers';


const rootReducer = combineReducers({
    map : mapReducers,
    player : playerReducers
})


const store = createStore(

    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)


export default store;