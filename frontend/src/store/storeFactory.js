import { createStore, applyMiddleware } from 'redux';
import { appReducer } from 'store/appReducer';
import thunk from 'redux-thunk';
import { initialState } from 'store/initialState';
import { createLogger } from 'redux-logger';

const logger = createLogger();
export const store = createStore(appReducer, initialState, applyMiddleware(thunk, logger));