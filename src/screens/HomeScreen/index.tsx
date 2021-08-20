import React, { ReactElement } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MovieCard from 'components/MovieCard';
import './style.scss';

function HomeScreen(props: any): ReactElement {
  const renderItems = () =>
    props.movies.movies.map((movie: any) => (
      <MovieCard movieData={movie} key={movie.imdbID} />
    ));

  return (
    <div className="home-screen">
      <Header withSearch />
      <main className="main-content">
        <div className="grid-container">{renderItems()}</div>
      </main>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  movies: state.movies,
});

export default connect(mapStateToProps)(HomeScreen);
