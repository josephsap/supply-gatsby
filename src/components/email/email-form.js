import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  Checkbox,
  TextareaAutosize,
} from '@material-ui/core';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { chatBaseStyles } from '../chat/chat.styles';
import styles, { emailFormStyles } from './email-form.styles';

const reCaptchaKey = process.env.RECAPTCHA_KEY;

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Sorry, that email is invalid. Check the format and try again.')
    .required('Email address is required')
    .label('Email'),
  name: Yup.string().min(2).required('Please enter your name').label('Name'),
  message: Yup.string()
    .min(2)
    .required('Please enter a message')
    .label('Message'),
});

// get shaz to add localhost:8000 and supply-gatsby.herokuapp.com
// to recaptcha sites http://localhost:8000/

const EmailForm = ({
  setChecked,
  emailFormData,
  skills,
  locations,
  onVerifyRecaptcha,
  onEmailFormSubmit,
  serverState,
}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          resumeLink: '',
          message: '',
          want: '',
          skills: [],
          locations: [],
        }}
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
        onSubmit={async (values, actions) => {
          actions.setSubmitting(true);
          await onEmailFormSubmit(values, actions);
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
          <div css={styles}>
            <form onSubmit={handleSubmit} className="form-wrapper">
              <div
                css={[chatBaseStyles, emailFormStyles]}
                className="form-item-left"
              >
                <div>
                  <Typography variant="h5">{emailFormData.title}</Typography>
                  <Typography variant="body1" className="form-copy">
                    {emailFormData.description}
                  </Typography>
                  <Typography variant="h4">The basics</Typography>
                </div>

                <div className="left-form-fields">
                  <TextField
                    type="name"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    label="Your name"
                    color="secondary"
                  />
                  <TextField
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    label="Email address"
                    color="secondary"
                  />

                  {errors.email && touched.email && errors.email}
                  <TextField
                    type="resumeLink"
                    name="resumeLink"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.resumeLink}
                    label="Link to Resumé/Portfolio"
                  />
                  <TextareaAutosize
                    type="message"
                    name="message"
                    rowsMin={5}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Message"
                    multiline
                    label="Message"
                    className="msg-textarea"
                  />
                </div>
              </div>

              <div className="form-item-right">
                <div className="selectors-wrapper">
                  {serverState ? (
                    <div className="form-sent-success">
                      <Typography
                        variant="h6"
                        className={!serverState.ok ? 'errorMsg' : ''}
                      >
                        {serverState.msg}
                      </Typography>
                    </div>
                  ) : (
                    <>
                      <FormControl component="fieldset">
                        <Typography variant="h4" className="select-headline">
                          You want
                        </Typography>
                        <RadioGroup
                          aria-label="want"
                          name="want"
                          value={values.want}
                          onChange={handleChange}
                          className="select-group"
                        >
                          <FormControlLabel
                            value="talent"
                            control={<Radio />}
                            label="Digital Talent"
                            className="select-item"
                          />
                          <FormControlLabel
                            value="job"
                            control={<Radio />}
                            label="A new job"
                            className="select-item"
                          />
                        </RadioGroup>
                      </FormControl>
                      {/* skills section */}
                      <FormControl component="fieldset">
                        <Typography variant="h4" className="select-headline">
                          with skills
                        </Typography>
                        <FormGroup className="select-group">
                          {skills.map((skill) => (
                            <FormControlLabel
                              key={skill.value}
                              className="select-item"
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  name="skills"
                                  value={skill.value}
                                />
                              }
                              label={skill.label}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>

                      {/* location section */}
                      <FormControl component="fieldset">
                        <Typography variant="h4" className="select-headline">
                          in this area
                        </Typography>
                        <FormGroup className="select-group">
                          {locations.map((location) => (
                            <FormControlLabel
                              key={location.value}
                              className="select-item"
                              control={
                                <Checkbox
                                  onChange={handleChange}
                                  name="locations"
                                  value={location.value}
                                />
                              }
                              label={location.label}
                            />
                          ))}
                        </FormGroup>
                      </FormControl>
                    </>
                  )}
                </div>

                {/* <GoogleReCaptcha onVerify={onVerifyRecaptcha} /> */}
                <Grid container>
                  <Grid item xs={12} sm={6} className="btn-container">
                    {!serverState && (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
                        Send
                      </Button>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={6} className="btn-container">
                    <Button
                      variant="contained"
                      color="secondary"
                      className="email-btn"
                      fullWidth
                      onClick={() => setChecked(false)}
                      endIcon={
                        <img
                          src={`images/arrow-left-email-btn.svg`}
                          style={{ transform: 'rotate(180deg)' }}
                        />
                      }
                    >
                      Go Back
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </form>
          </div>
        )}
      </Formik>
    </GoogleReCaptchaProvider>
  );
};

export default EmailForm;
