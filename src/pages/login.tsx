import { useFormik } from 'formik';
import React from 'react';
import * as authService from '../services/auth-service';
import { useDispatch } from 'react-redux';
import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS } from '../constants/redux-types';
import { transformLoginResponse } from '../utils/auth-transformer';
import { useHistory } from 'react-router-dom';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      dispatch({
        type: LOGIN,
      });
      authService.login({
        email: values.email,
        password: values.password,
      }).then((res) => {
        const response = transformLoginResponse(res);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response
        });
        history.push('/dashboard');
      }).catch((error: any) => {
        console.error(error);
        dispatch({
          type: LOGIN_FAIL,
          error: error,
        });
      });
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor={'email'}>email</label>
          <input
            id={'email'}
            name={'email'}
            type={'email'}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor={'password'}>password</label>
          <input
            id={'password'}
            name={'password'}
            type={'password'}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <button type={'submit'}>login</button>
      </form>
    </div>
  );
};
