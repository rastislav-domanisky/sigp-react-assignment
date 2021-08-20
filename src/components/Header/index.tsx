import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { moviesActions } from 'store/reducers/movies';
import './style.scss';

type Props = {
  withSearch: boolean;
};

function Header({ withSearch }: Props): ReactElement {
  const dispatch = useDispatch();

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
          />
          <IconButton
            aria-label="delete"
            onClick={() => {
              dispatch(moviesActions.loadMovies('Arrow'));
            }}>
            <Search />
          </IconButton>
        </div>
      )}
    </header>
  );
}

export default Header;
