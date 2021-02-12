import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import { LOGIN_SUCCESS } from './constants/redux-types';
import { DashboardPage } from './pages/dashboard';
import { HomePage } from './pages/home';
import { LoginPage } from './pages/login';
import { RegisterPage } from './pages/register';
import * as authService from './services/auth-service';

function App() {
  const dispatch = useDispatch();
  const history = useHistory();
  const loginStatus = useSelector((state: any) => state.auth.status.login);
  useEffect(() => {
    authService.refreshToken().then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          accessToken: res.data.accessToken,
        },
      });
    }).catch((error) => {
      console.error('refresh token failed.');
      console.error(error);
    });
  }, [dispatch]);

  useEffect(() => {
    if (history && loginStatus === 'SUCCESS') {
      console.log('triggered.');
      history.push('/dashboard');
    }
  }, [loginStatus, history])

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
