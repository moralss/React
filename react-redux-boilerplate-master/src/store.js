import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from "redux-thunk";
import rootReducer from './reducers';

export const history = createBrowserHistory();

const defaultState = {
  name: 'Stranger'
};

const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, routerMiddleware(history)),
);

export const store = createStore(
  rootReducer(history),
  defaultState,
  enhancer
);