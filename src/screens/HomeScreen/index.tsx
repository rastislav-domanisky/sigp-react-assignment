import React, { ReactElement, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { moviesActions } from 'store/reducers/movies';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MovieCard from 'components/MovieCard';
import { CircularProgress, IconButton } from '@material-ui/core';
import { NavigateBefore, NavigateNext } from '@material-ui/icons';
import './style.scss';

function HomeScreen(props: any): ReactElement {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(moviesActions.clearMovies());
  }, []);

  const renderItems = () => {
    if (props.movies.movies) {
      return props.movies.movies.map((movie: any) => (
        <MovieCard movieData={movie} key={movie.imdbID} />
      ));
    }

    return [];
  };

  if (props.movies.isLoading) {
    return (
      <div className="home-screen">
        <Header withSearch withBack={false} />
        <main className="main-content centered">
          <CircularProgress />
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="home-screen">
      <Header withSearch withBack={false} />
      <main className="main-content">
        <div className="grid-container">{renderItems()}</div>
        <div className="pagination">
          <IconButton
            aria-label="BACK"
            disabled={props.movies.page === 1}
            onClick={() => {
              if (props.movies.page > 1) {
                dispatch(moviesActions.setPage(props.movies.page - 1));
                dispatch(
                  moviesActions.loadMovies({
                    text: props.movies.searchText,
                    page: props.movies.page - 1,
                  }),
                );
              }
            }}>
            <NavigateBefore
              style={props.movies.page === 1 ? { fill: 'gray' } : {}}
            />
          </IconButton>
          <p>{props.movies.page}</p>
          <IconButton
            aria-label="NEXT"
            onClick={() => {
              dispatch(moviesActions.setPage(props.movies.page + 1));
              dispatch(
                moviesActions.loadMovies({
                  text: props.movies.searchText,
                  page: props.movies.page + 1,
                }),
              );
            }}>
            <NavigateNext />
          </IconButton>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(HomeScreen);
