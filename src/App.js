import React from 'react';
import Home from './pages/home.js'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Route path="/" component={Home}></Route>
    </Router>
  );
}

export default App;
