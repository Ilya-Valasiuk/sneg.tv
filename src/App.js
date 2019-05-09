import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/main';
import ScrollToTop from './components/shared/scroll-to-top/scroll-to-top';

import './app.scss';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        <Route component={Main} />
      </ScrollToTop>
    </Router>
  );
}

export default App;
