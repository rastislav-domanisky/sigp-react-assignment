import { call, put } from 'redux-saga/effects';
import { moviesActions } from 'store/reducers/movies';
import { requestGetMovies } from '../requests/movies';

export function* handleLoadMovies(action: any): any {
  try {
    const response = yield call(
      requestGetMovies,
      action.payload.text,
      action.payload.page,
    );
    if (response.status !== 200 || response.data.Response === 'False') {
      yield put(moviesActions.setMovies([]));
    }
    yield put(moviesActions.setMovies(response.data));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
