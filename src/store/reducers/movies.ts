import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  movies: Array<any>;
  isLoading: boolean;
  searchText: string;
  favorites: Array<string>;
};

const initialState: InitialState = {
  movies: [],
  isLoading: false,
  searchText: '',
  favorites: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    loadMovies: (state = initialState, action: PayloadAction<string>) => {
      state.isLoading = true;
      state.searchText = action.payload;
    },
    setMovies: (state = initialState, action: PayloadAction<any>) => {
      state.movies = action.payload;
      state.isLoading = false;
    },
  },
});

export const moviesActions = moviesSlice.actions;
export default moviesSlice.reducer;
