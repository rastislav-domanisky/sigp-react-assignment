import { call, put } from 'redux-saga/effects';
import { moviesActions } from 'store/reducers/movies';
import { requestGetMovies } from '../requests/movies';

export function* handleLoadMovies(action: any): any {
  try {
    const response = yield call(requestGetMovies, action.payload);
    yield put(moviesActions.setMovies(response.data.Search));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
}
