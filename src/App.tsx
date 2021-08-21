import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import store from 'store';
import './App.scss';

// Screens
import HomeScreen from 'screens/HomeScreen';
import MovieDetailsScreen from 'screens/MovieDetailsScreen';
import FavoriteMoviesScreen from 'screens/FavoriteMoviesScreen';

function App() {
  if (!localStorage.getItem('favorites')) {
    localStorage.setItem('favorites', JSON.stringify([]));
  }

  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/movie/:id" component={MovieDetailsScreen} exact />
            <Route path="/myMovies" component={FavoriteMoviesScreen} exact />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
