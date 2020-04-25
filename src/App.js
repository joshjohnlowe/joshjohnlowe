import React from 'react';
import Home from './pages/home.js'
import About from './pages/about.js'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
    </Router>
  );
}

export default App;
