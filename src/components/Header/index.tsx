import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header(): ReactElement {
  return (
    <header className="header">
      <Link to="/">
        <h1>MOVIE DB</h1>
      </Link>
      <input />
    </header>
  );
}

export default Header;
