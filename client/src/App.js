import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './assets/scss/style.css'
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={LandingPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
