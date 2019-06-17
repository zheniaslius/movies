import constants from '../constants';

export const getMovies = () => ({ type: constants.GET_MOVIES_REQUEST });

export const loadMoreMovies = () => ({ type: constants.GET_MORE_MOVIES });

export const movieSelected = id => ({ type: constants.MOVIE_SELECTED, payload: id });

export const getMovie = id => ({ type: constants.GET_MOVIE_REQUEST, payload: id });

export const bookMovie = id => ({ type: constants.BOOK_MOVIE, payload: id });
