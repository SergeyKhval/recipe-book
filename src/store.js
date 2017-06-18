import throttle from 'lodash/throttle';
import { combineReducers, createStore } from 'redux';
import recipes from './reducer';
import { loadState, saveState } from './localStorage';

const rootReducer = combineReducers({ recipes });
const persistedState = loadState();

const store = createStore(rootReducer, persistedState);

store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;