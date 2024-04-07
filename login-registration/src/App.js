import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Table from './components/Table';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} />
        </Route>
        <ProtectedRoute exact path="/table" component={Table} isLoggedIn={isLoggedIn} />
        <Redirect to="/login" />
      </Switch>
    </Router>
  );
}

export default App;
