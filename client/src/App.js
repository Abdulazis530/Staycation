import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/style.css'
import DetailPage from './pages/DetailPage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={LandingPage}></Route>
          <Route path="/properties/:id" component={DetailPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
