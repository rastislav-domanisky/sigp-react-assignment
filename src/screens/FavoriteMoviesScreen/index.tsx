import React, { useState, useEffect } from 'react';
import Footer from 'components/Footer';
import Header from 'components/Header';
import MovieCard from 'components/MovieCard';
import { getFavorites } from 'utils/favorites';
import getMovieData, { MovieDataResult } from 'utils/OMDbService/getMovieData';
import './style.scss';
import { CircularProgress } from '@material-ui/core';

type FavMoviesScreenState = {
  movies: Array<MovieDataResult> | null;
  isLoaded: boolean;
};

const FavoriteMoviesScreen = () => {
  const [state, setState] = useState<FavMoviesScreenState>({
    isLoaded: false,
    movies: null,
  });

  useEffect(() => {
    const loadMovies = async () => {
      const favorites = getFavorites();
      const moviesList: Array<MovieDataResult> = [];
      const result = await Promise.all(favorites.map((id) => getMovieData(id)));

      result.forEach((item) => {
        if (item.isOK) {
          moviesList.push(item);
        }
      });

      setState((current) => ({
        ...current,
        isLoaded: true,
        movies: moviesList,
      }));
    };

    loadMovies();
  }, []);

  if (!state.isLoaded) {
    return (
      <div className="home-screen">
        <Header withSearch={false} withBack />
        <main className="main-content-movie centered">
          <CircularProgress />
        </main>
        <Footer />
      </div>
    );
  }

  const renderItems = () => {
    if (state.movies) {
      return state.movies.map((movie) => (
        <MovieCard movieData={movie.data} key={movie.data.imdbID} />
      ));
    }
    return [];
  };

  return (
    <div className="favorite-movies-screen">
      <Header withSearch={false} withBack />
      <main className="main-content-favorite">
        <div className="grid-container">{renderItems()}</div>
      </main>
      <Footer />
    </div>
  );
};

export default FavoriteMoviesScreen;
