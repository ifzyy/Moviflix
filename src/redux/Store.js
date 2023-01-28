import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { moviesReducer } from './movies/fetch'
import { likesReducer } from './movies/fetch';

const rootReducer = combineReducers({
    movies: moviesReducer,
    likes: likesReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [thunk],
});

export default store;