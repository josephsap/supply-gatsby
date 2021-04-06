import React, { useRef } from 'react';
import { Formik, Form } from 'formik';
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
import { chatBaseStyles } from '../chat/chat.styles';
import styles from './email-form.styles';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address.')
    .required('Email address is required')
    .label('Email'),
  name: Yup.string()
    .min(2)
    .required('Please enter your name')
    .label('Name'),
  resumeLink: Yup.string()
    .min(2)
    .required('Please enter a link to your site or Linkedin profile.'),
});

// get shaz to add localhost:8000 and supply-gatsby.herokuapp.com
// to recaptcha sites http://localhost:8000/

const EmailForm = ({
  setChecked,
  emailFormData,
  skills,
  locations,
  onEmailFormSubmit,
  serverState,
}) => {
  const formRef = useRef(null);
  return (
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
      onSubmit={(values, actions) => {
        fetch('/?no-cache=1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact', ...values }),
        })
          .then((response) => {
            console.log(response, 'ressss');
            alert('Success!');
          })
          .catch((error) => alert(error));
      }}
      // onSubmit={async (values, actions) => {
      //   actions.setSubmitting(true);
      //   await onEmailFormSubmit(values, actions);
      // }}
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
          <form
            ref={formRef}
            className="form-wrapper"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            name="contact"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <div css={chatBaseStyles} className="form-item-left">
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
                {errors.name && touched.name && errors.name && (
                  <Typography
                    variant="caption"
                    color="error"
                    style={{ marginTop: '-2rem' }}
                  >
                    {errors.name && touched.name && errors.name}
                  </Typography>
                )}
                <TextField
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  label="Email address"
                  color="secondary"
                />
                {errors.name && touched.name && errors.name && (
                  <Typography
                    variant="caption"
                    color="error"
                    style={{ marginTop: '-2rem' }}
                  >
                    {errors.email && touched.email && errors.email}
                  </Typography>
                )}

                <TextField
                  type="resumeLink"
                  name="resumeLink"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.resumeLink}
                  label="Link to Resumé/Portfolio"
                />
                {errors.resumeLink && touched.resumeLink && errors.resumeLink && (
                  <Typography
                    variant="caption"
                    color="error"
                    style={{ marginTop: '-2rem' }}
                  >
                    {errors.resumeLink &&
                      touched.resumeLink &&
                      errors.resumeLink}
                  </Typography>
                )}
                <TextareaAutosize
                  type="message"
                  name="message"
                  rowsMin={5}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Message"
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
                  <div>
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
                  </div>
                )}
              </div>
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
                        src={`/images/arrow-left-email-btn.svg`}
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
  );
};

export default EmailForm;
