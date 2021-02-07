import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { DashboardPage } from './pages/dashboard';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';

function App() {
  return (
    <BrowserRouter>
      <div><Link to={'/'}>Home</Link></div>
      <div><Link to={'/login'}>Login</Link></div>
      <div><Link to={'/register'}>Register</Link></div>
      <div><Link to={'/dashboard'}>Dashboard</Link></div>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/register'} component={RegisterPage} />
        <Route path={'/dashboard'} component={DashboardPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
