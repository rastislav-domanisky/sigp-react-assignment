import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

// Screens
import HomeScreen from 'screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomeScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
