import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const FETCH_MOVIES = "moviflix/movies/FETCH_MOVIES"

const initialState = {
    movies: []
}

const reducer = (state = initialState, action) => {
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



export const fetchData = createAsyncThunk(FETCH_MOVIES, async () => {
    try {
        const { data } = await axios.get('https://api.tvmaze.com/shows');
        return data
    } catch (error) {
        console.log(error);
    }
});
export default reducer