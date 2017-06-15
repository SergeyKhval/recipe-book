import { combineReducers, createStore } from 'redux';
import recipes from './reducer';

const rootReducer = combineReducers({ recipes });

const store = createStore(rootReducer);

export default store;