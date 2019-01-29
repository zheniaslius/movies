import constants from '../constants';
import { combineReducers } from 'redux';

const initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_MOVIES_SUCCESS:
            return { movies: action.payload }
        case constants.GET_MORE_MOVIES:
            return { ...state, movies: [...state.movies, action.payload] }
        default:
            return state;
    }
}

const movieInitialState = {
    selectedMovieId: null,
    movieDetails: {}
}

const movieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case constants.MOVIE_SELECTED:
            return { ...state, selectedMovieId: action.payload }
        case constants.GET_MOVIE_SUCCESS:
            return { ...state, movieDetails: action.payload }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer
})

export default rootReducer;