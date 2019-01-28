import { createStore, applyMiddleware } from 'redux';
import moviesReducer from '../reducers/movies.reducer';
import createSagaMiddleware from 'redux-saga'
import watchFetchMovies from '../sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    moviesReducer,
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchFetchMovies);

export default store;
