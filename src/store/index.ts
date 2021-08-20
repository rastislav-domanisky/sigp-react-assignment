import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { watcherSaga } from './saga';

// Reducers
import moviesSlice from './reducers/movies';

// Saga
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

// Store
const store = configureStore({
  reducer: {
    movies: moviesSlice,
  },
  middleware: middlewares,
});

sagaMiddleware.run(watcherSaga);

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
