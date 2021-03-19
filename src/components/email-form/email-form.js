import { Formik } from 'formik';
import * as Yup from 'yup';
import { Grid, Typography, TextField, Button, Box } from '@material-ui/core';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .protected()
    .when('step', {
      is: (stepCount) => stepCount === 'email' || stepCount === 'user_info',
      then: Yup.string()
        .email('Please enter a valid email address.')
        .required('Email address is required')
        .label('Email'),
    }),
  firstName: Yup.string()
    .protected()
    .when('step', {
      is: (stepCount) => stepCount === 'user_info',
      then: Yup.string()
        .trim()
        .min(1, 'Please enter a valid first name.')
        .required('First name is required.')
        .label('First Name'),
    }),
  lastName: Yup.string()
    .protected()
    .when('step', {
      is: (stepCount) => stepCount === 'user_info',
      then: Yup.string()
        .trim()
        .min(1, 'Please enter a valid last name.')
        .required('Last name is required.')
        .label('Last Name'),
    }),
  password: Yup.string()
    .protected()
    .when('step', {
      is: (stepCount) => stepCount === 'user_info',
      then: Yup.string().required('Password is required.').label('Password'),
    }),
  // stores and verifies the password validation response
  passwordValidation: Yup.number()
    .nullable()
    .when('step', {
      is: (stepCount) => stepCount === 'user_info',
      then: Yup.number()
        .nullable()
        .test(
          'is-verified',
          'Your password must be of adequate strength or greater.',
          (value) => verifyPasswordValidation(value)
        )
        .label('Password'),
    }),
  consentAgreed: Yup.boolean().when('step', {
    is: (stepCount) => stepCount === 'user_info',
    then: Yup.boolean().oneOf(
      [true],
      "You need to agree to Gloo's Terms of Service & Privacy Policy to continue."
    ),
  }),
});

const EmailForm = ({ setChecked }) => {
  return (
    <Box className="email-side-interior">
      <Typography variant="h5">Send an email.</Typography>
      <Typography variant="body1">
        We still do email — in fact we check it a million times a day. Please
        fill out all of the following and we’ll get in touch shortly.
      </Typography>
      <div>
        <Typography variant="h4">The basics</Typography>

        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={validationSchema}
          validate={(values) => {
            const errors = {};

            if (!values.email) {
              errors.email = 'Required';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));

              setSubmitting(false);
            }, 400);
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
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && errors.email}

              <TextField
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />

              {errors.password && touched.password && errors.password}

              <Button type="submit" disabled={isSubmitting}>
                Send
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className="email-btn"
                fullWidth
                onClick={() => setChecked(false)}
                startIcon={
                  <img
                    src={`images/arrow-left-email-btn.svg`}
                    style={{ marginRight: 'auto' }}
                  />
                }
              >
                Email us
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </Box>
  );
};

export default EmailForm;
