import constants from '../constants';
import { combineReducers } from 'redux';

const initialState = {
    movies: [],
    page: 1
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_MOVIES_SUCCESS:
            return { ...state, movies: [...state.movies, ...action.payload] }
        case constants.GET_MORE_MOVIES:
            return { ...state, page: state.page + 1 }
        case constants.GET_MORE_MOVIES_SUCCESS:
            return { page: state.page, movies: [...state.movies, ...action.payload] }
        default:
            return state;
    }
}

const movieInitialState = {
    id: null,
    details: {}
}

const movieReducer = (state = movieInitialState, action) => {
    switch (action.type) {
        case constants.MOVIE_SELECTED:
            return { ...state, id: action.payload }
        case constants.GET_MOVIE_SUCCESS:
            return { ...state, details: action.payload }
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    movies: moviesReducer,
    movie: movieReducer
})

export default rootReducer;