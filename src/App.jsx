import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './Dashboard';
import HARevenueTracker from './HARevenueTracker';

const App = () => {
  return (
    <Router>
      <ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'flex-end', padding: 20 }}>
        <li>
          <Link to={'/'}>Dashboard</Link>
        </li>
        <li style={{ marginLeft: 20 }}>
          <Link to={'/ha-revenue-tracker'}>Revenue Tracker</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path={'/'} component={Dashboard} />
        <Route exact path={'/ha-revenue-tracker'} component={HARevenueTracker} />
      </Switch>
    </Router>
  );
};

export default App;
