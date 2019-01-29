import constants from '../constants';

export const getMovies = () => ({ type: constants.GET_MOVIES_REQUEST });

export const getMovie = id => ({ type: constants.GET_MOVIE_REQUEST, payload: id });

export const movieSelected = id => ({ type: constants.MOVIE_SELECTED, payload: id });