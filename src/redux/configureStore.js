import { applyMiddleware, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import menuSlice from './toggleMenu/toggle';
// import logger from

const rootReducer = combineReducers({
  toggleMenu: menuSlice,
});
const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));

export default store;
