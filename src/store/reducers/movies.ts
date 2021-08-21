import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  movies: Array<any>;
  isLoading: boolean;
  searchText: string;
  favorites: Array<string>;
  page: number;
};

const initialState: InitialState = {
  movies: [],
  isLoading: false,
  searchText: '',
  favorites: [],
  page: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setPage: (state = initialState, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearMovies: (state = initialState) => {
      state.movies = [];
      state.searchText = '';
      state.page = 1;
    },
    loadMovies: (state = initialState, action: PayloadAction<any>) => {
      state.isLoading = true;
      state.searchText = action.payload.text;
    },
    setMovies: (state = initialState, action: PayloadAction<any>) => {
      state.movies = action.payload.Search;
      state.isLoading = false;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
