import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Dashboard from './dashboard';
import AuthRoute from './AuthRoute';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <AuthRoute path="/dashboard" component={Dashboard} />
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
