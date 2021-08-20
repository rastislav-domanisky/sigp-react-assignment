import { takeLatest } from 'redux-saga/effects';

import { moviesActions } from 'store/reducers/movies';
import { handleLoadMovies } from './handlers/movies';

export function* watcherSaga() {
  yield takeLatest(moviesActions.loadMovies, handleLoadMovies);
}
