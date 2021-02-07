import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <div><Link to={'/'}>Home</Link></div>
      <div><Link to={'/login'}>Login</Link></div>
      <div><Link to={'/register'}>Register</Link></div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/register'} component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
