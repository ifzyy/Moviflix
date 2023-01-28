import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_MOVIES = "moviflix/movies/FETCH_MOVIES"
const FETCH_LIKES = "moviflix/movies/FETCH_LIKES"
const initialState = {
    movies: [],

}
const initialStateOne = {
    likes: []
}

export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case `${FETCH_MOVIES}/fulfilled`:
            return {
                ...state, movies: action.payload
            }
        case `${FETCH_MOVIES}/rejected`:
            return action.payload;
        default:
            return state
    }
}

export const likesReducer = (state = initialStateOne, action) => {
    switch (action.type) {
        case `${FETCH_LIKES}/fulfilled`:
            return {
                ...state, likes: action.payload
            }
        case `${FETCH_LIKES}/rejected`:
            return action.payload;
        default:
            return state
    }
}
export const fetchLikes = createAsyncThunk(FETCH_LIKES, async () => {
    try {
        const { data } = await axios.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/xLiN0HftfnOpCg20r7dS/likes');
       return data
    } catch (error) {
        console.log(error);
    }
});


export const fetchData = createAsyncThunk(FETCH_MOVIES, async () => {
    try {
        const { data } = await axios.get('https://api.tvmaze.com/shows');
        return data
    } catch (error) {
        console.log(error);
    }
});
