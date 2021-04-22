import React, { useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, TextField, Button } from '@material-ui/core';
import styles from './RoldxForm.styles';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email address is required')
    .label('Email'),
});

const RoldxEmailForm = () => {
  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleEmailFormSubmit = (values, actions) => {
    axios
      .post('https://formspree.io/f/moqyvydj', values, {
        headers: { Accept: 'application/json' },
      })
      .then(function(response) {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Thanks! We will keep you up to date on Roldx product development.'
        );
      })
      .catch(function(error) {
        console.log(error.response.data.error);
        actions.setSubmitting(false);
        handleServerResponse(
          false,
          'There has been an error. Please refresh the page and try again later.'
        );
      });
  };

  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, actions) => {
        actions.setSubmitting(true);
        await handleEmailFormSubmit(values, actions);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <form onSubmit={handleSubmit} css={styles}>
            <input type="text" name="_gotcha" style={{ display: 'none' }} />
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              {serverState ? (
                <Grid item xs={12} className="form-sent-success">
                  <Typography
                    variant="h6"
                    className={!serverState.ok ? 'errorMsg' : ''}
                  >
                    {serverState.msg}
                  </Typography>
                </Grid>
              ) : (
                <>
                  <Grid item xs={12} md={3}>
                    <TextField
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      label="Enter your email"
                      color="secondary"
                      fullWidth
                      className="email-field"
                    />
                  </Grid>
                  <Grid item xs={12} md={2}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      fullWidth
                      className="button-send"
                    >
                      Send
                    </Button>
                  </Grid>
                </>
              )}
            </Grid>
          </form>
          {errors.email && touched.email && errors.email && (
            <Typography
              variant="caption"
              color="error"
              style={{ marginTop: '2rem', display: 'block' }}
            >
              {errors.email && touched.email && errors.email}
            </Typography>
          )}
        </>
      )}
    </Formik>
  );
};

export default RoldxEmailForm;
