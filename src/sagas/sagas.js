import constants from '../constants';
import { select, takeEvery, call, put } from "redux-saga/effects";
import axios from "axios";

const API_KEY = 'da9d1724bddad79397131d5a8b35b7e2';
const API_BASE = 'https://api.themoviedb.org/3';

export default function* rootSaga() {
    yield takeEvery(constants.GET_MOVIES_REQUEST, moviesWorker);
    yield takeEvery(constants.GET_MOVIE_REQUEST, displayMovieWorker);
}

// Selectors
const getMoviesPage = state => state.movies.page;
const getSelectedMovie = state => state.movie.id;

async function fetchMovies(page = 1) {
    const response = await axios({
        method: "get",
        url: `${API_BASE}/movie/popular?api_key=${API_KEY}&page=${page}`
    });
    return response.data.results;
}

async function fetchGenres() {
    const response = await axios({
        method: "get",
        url: `${API_BASE}/genre/movie/list?api_key=${API_KEY}`
    });
    return response.data.genres;
}

function getGenreNames(movies, genres) {
    return movies.map(movie => ({
        ...movie,
        genres: genres.filter(genre => movie.genre_ids.includes(genre.id))
    }))
}

function* moviesWorker() {
    try {
        const page = yield select(getMoviesPage);
        const movies = yield call(fetchMovies, page);
        const genres = yield call(fetchGenres);

        const moviesWithGenres = yield call(getGenreNames, movies, genres);

        yield put({ type: constants.GET_MOVIES_SUCCESS, payload: moviesWithGenres });
    }
    catch (error) {
        yield put({ type: constants.GET_MOVIES_FAILURE, error });
    }
}

async function fetchMovie(id) {
    const response = await axios({
        method: "get",
        url: `${API_BASE}/movie/${id}?api_key=${API_KEY}`
    });
    return response.data;
}

async function fetchMovieCredits(id) {
    const response = await axios({
        method: "get",
        url: `${API_BASE}/movie/${id}/credits?api_key=${API_KEY}`
    });
    return response.data;
}

function* displayMovieWorker() {
    const movieId = yield select(getSelectedMovie);

    const movieDetails = yield call(fetchMovie, movieId);
    const credits = yield call(fetchMovieCredits, movieId);

    const creditsSliced = {
        cast: credits.cast.slice(0, 5),
        crew: credits.crew.filter(person => person.department === 'Directing'),
    }
    yield put({ type: constants.GET_MOVIE_SUCCESS, payload: {...movieDetails, ...creditsSliced} });
}

