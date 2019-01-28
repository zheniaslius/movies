import constants from '../constants';

const initialState = {
    movies: []
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case constants.GET_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.payload
            }
        case constants.GET_MORE_MOVIES:
        return {
            ...state,
            movies: [...state.movies, action.payload]
        }
        default:
            return state;
    }
}

export default moviesReducer;