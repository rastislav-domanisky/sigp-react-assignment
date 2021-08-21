import React, { ReactElement, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, TextField } from '@material-ui/core';
import { Search, PlaylistAddRounded } from '@material-ui/icons';
import { useDispatch, useStore } from 'react-redux';
import { moviesActions } from 'store/reducers/movies';
import './style.scss';

type Props = {
  withSearch: boolean;
};

function Header({ withSearch }: Props): ReactElement {
  const dispatch = useDispatch();

  const store = useStore();
  const history = useHistory();

  const [searchText, setSearchText] = useState(
    store.getState().movies.searchText,
  );

  return (
    <header className="header">
      <Link to="/">
        <h1>MOVIE DB</h1>
      </Link>
      {!withSearch ? null : (
        <div className="search-area">
          <TextField
            className="search-input"
            id="outlined-basic"
            variant="outlined"
            placeholder="Search"
            size="small"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                const { page } = store.getState().movies;
                dispatch(moviesActions.clearMovies());
                dispatch(moviesActions.loadMovies({ text: searchText, page }));
              }
            }}
          />
          <IconButton
            aria-label="Search"
            onClick={() => {
              const { page } = store.getState().movies;
              dispatch(moviesActions.clearMovies());
              dispatch(moviesActions.loadMovies({ text: searchText, page }));
            }}>
            <Search />
          </IconButton>
          <IconButton
            aria-label="My movies"
            onClick={() => {
              history.push('/myMovies');
            }}>
            <PlaylistAddRounded />
          </IconButton>
        </div>
      )}
    </header>
  );
}

export default Header;
