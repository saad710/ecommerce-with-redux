import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Products from './components/Products/Products';

function App({ current }) {
  return (
    <Router>
    <div className="app">
      <Switch>
          <Route exact path="/" component={Products} />
          </Switch>
    
    </div>
    </Router>
  );
}

export default App;
