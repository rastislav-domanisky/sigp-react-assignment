import React, { ReactElement, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { CircularProgress } from '@material-ui/core';
import { Favorite as FavoriteIcon } from '@material-ui/icons';
import getMovieData, { MovieDataResult } from 'utils/OMDbService/getMovieData';
import './style.scss';

interface ParamTypes {
  id: string;
}

type MovieDetailsScreenState = {
  isLoaded: boolean;
  movieData: MovieDataResult | null;
};

function MovieDetailsScreen(): ReactElement {
  const { id } = useParams<ParamTypes>();

  const [state, setState] = useState<MovieDetailsScreenState>({
    isLoaded: false,
    movieData: null,
  });

  useEffect(() => {
    const getData = async () => {
      const result = await getMovieData(id);
      setState((current) => ({
        ...current,
        isLoaded: true,
        movieData: result,
      }));
    };

    getData();
  }, []);

  if (!state.isLoaded || !state.movieData?.isOK) {
    return (
      <div className="home-screen">
        <Header withSearch={false} />
        <main className="main-content-movie centered">
          {!state.isLoaded ? <CircularProgress /> : <h2>404</h2>}
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="movie-details-screen">
      <Header withSearch={false} />
      <main className="main-content-movie">
        <div className="movie-details-container">
          <div className="title-area">
            <h2 className="movie-details-title">
              {state.movieData.data.Title}
            </h2>
            <FavoriteIcon />
          </div>
          <img
            className="movie-details-poster"
            src={state.movieData.data.Poster}
            alt={state.movieData.data.Title}
          />
          <div className="movie-details-type-row">
            <p>{state.movieData.data.Type}</p>
            <p>{state.movieData.data.Year}</p>
          </div>
          <p>{state.movieData.data.Genre}</p>
          <p>{state.movieData.data.Plot}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default MovieDetailsScreen;
