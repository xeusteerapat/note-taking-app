import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <LandingPage />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
