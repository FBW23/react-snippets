import React from 'react';
import './App.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import loginSchema from './lib/validation_rules';

/**
 * Formik Validation possibilities:
 * - validation function
 * - validation schema (YUP)
 */


function App() {

  let initialValues = { email: '', password: '' }

  const onSubmit = (values) => {
    console.log("Successful submit: ", values)

    // DO SOME FETCH / AXIOS TO YOUR BACKEND NOW....
  }

  return (
    <div className="App">
      <main>
        {/* initialValues - object with fields to check - formit will store them in internal state automatically 
            onSubmit - your submit handler to which values are passed once validation passed
            validationSchema - your YUP schema with all the validation rules for your fields
        */}
        <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit}
          validationSchema={loginSchema}
          >
          <Form>
            <div className="form-input">
              <label htmlFor="email">Email: </label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            <div className="form-input">
              <label htmlFor="password">Password: </label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div className="form-input">
              <label htmlFor="bio">Bio: </label>
              <Field name="bio" as="textarea" />
              <ErrorMessage name="bio" component="div" className="error" />
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
}

export default App;
