import React from 'react';
import { Formik } from 'formik';
import { TextField } from '@mui/material';
import { loginSchema } from '../../constants/validationSchema';

const FormikForm = () => {
  const initialValues = { email: '', password: '' };
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) errors.password = 'Requiered';
    return errors;
  };

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik
        initialValues={initialValues}
        // validate={validate}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              label='Email'
              name='email'
              margin='normal'
              onChange={handleChange}
              value={values.email}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              label='Password'
              name='password'
              margin='normal'
              onChange={handleChange}
              value={values.password}
              error={errors.password && touched.password}
              helperText={errors.password && touched.password && errors.password}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
