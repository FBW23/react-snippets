import React from 'react';
import './App.scss';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import loginSchema from './lib/validation_rules';

/**
 * Formik Validation possibilities:
 * - validation function
 * - validation schema (YUP)
 */

function App() {
  
  let smokingOptions = [
    { label: 'Nonsmoker', value: 'none' },
    { label: 'Shisha', value: 'shisha' },
    { label: 'Cigarette', value: 'ciga' }
  ];

  let initialValues = {
    email: '',
    password: '',
    username: '',
    bio: '',
    drugs: { weed: false, cocaine: true },
    smoking: '',
    therapists: ['']
  };

  const onSubmit = (values, submitProps) => {
    console.log('Successful submit: ', values);

    submitProps.resetForm();

    // DO SOME FETCH / AXIOS TO YOUR BACKEND NOW....
  };

  return (
    <div className="App">
      <main>
        {/* initialValues - object with fields to check - formit will store them in internal state automatically 
            onSubmit - your submit handler to which values are passed once validation passed
            validationSchema - your YUP schema with all the validation rules for your fields
        */}
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={loginSchema}>
          <Form>
            {/* EMAIL INPUT */}
            <div className="form-input">
              <label htmlFor="email">Email: </label>
              <Field id="email" name="email" type="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>
            {/* PASSWORD INPUT */}
            <div className="form-input">
              <label htmlFor="password">Password: </label>
              <Field id="password" name="password" type="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            {/* TEXTAREA INPUT */}
            <div className="form-input">
              <label htmlFor="bio">Bio: </label>
              <Field id="bio" name="bio" as="textarea" />
              <ErrorMessage name="bio" component="div" className="error" />
            </div>
            <div className="form-input">
              <label htmlFor="username">Username: </label>
              <Field id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            {/* CHECKBOX GROUP */}
            <div className="form-input">
              <div className="checkbox-input">
                <label>Weed</label>
                <Field id="weed" name="drugs.weed" type="checkbox" />
              </div>
              <div className="checkbox-input">
                <label>Cocaine</label>
                <Field id="cocaine" name="drugs.cocaine" type="checkbox" />
              </div>
              {/* <ErrorMessage name="bio" component="div" className="error" /> */}
            </div>
            {/* SELECTBOX */}
            <div className="form-input">
              <label>Smoking Status</label>
              <Field as="select" name="smoking">
                {smokingOptions.map((option) => (
                  <option key={option.label} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
            </div>
            {/* ARRAY OF INPUTS */}
            <div className="form-input">
              <label>Therapists</label>
              <FieldArray name="therapists">{
                (arrProps) => {
                  // fetch the list of therapists from the formik values
                  let therapists = arrProps.form.values.therapists
                  let { push, remove } = arrProps
                  // render the list of therapists
                  return therapists.map((therapist, i) => <div key={i}>
                      <Field name={`therapists[${i}]`} />
                      {/* Add / remove buttons */}
                      <button type="button" onClick={() => push('')}>+</button>
                      {/* ONLY allow deletion if we have at least one item */}
                      { therapists.length > 1 && <button type="button" onClick={() => remove(i)}>-</button> }
                    </div>
                  )
                }
              }
              </FieldArray> 
              <ErrorMessage name="therapists" component="div" className="error" />
            </div>

            <button type="submit">Signup</button>
          </Form>
        </Formik>
      </main>
    </div>
  );
}

export default App;
