import { createStore, combineReducers, applyMiddleware } from 'redux';
import playerReducers from '../reducers/playerReducers';
import mapReducers from '../reducers/mapReducers';
import { logger } from '../middileware';
import gameStateReducers from '../reducers/gameStateReducer';

const rootReducer = combineReducers({
    map: mapReducers,
    player: playerReducers,
    gameStatus : gameStateReducers
})


const store = createStore(

    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


export default store;