import { useFormik } from 'formik';
import React from 'react';

export const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
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
