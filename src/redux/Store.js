import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './movies.js/fetch';

const rootReducer = combineReducers({
    movies: reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;