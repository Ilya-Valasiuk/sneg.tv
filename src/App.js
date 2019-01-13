import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Main from './pages/main';

import './app.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Route component={Main} />
    </Router>
  );
}

export default App;
