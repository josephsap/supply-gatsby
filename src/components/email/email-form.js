import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
  TextField,
  Button,
  Box,
  Radio,
  RadioGroup,
  Checkbox,
} from '@material-ui/core';
import { skillsOptions, locationOptions } from './email-form-data';

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
          initialValues={{
            // name: '',
            // email: '',
            // resumeLink: '',
            // location: '',
            want: 'talent',
            skillsChecked: [],
            areasChecked: [],
          }}
          validate={(values) => {
            const errors = {};

            // if (!values.email) {
            //   errors.email = 'Required';
            // } else if (
            //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            // ) {
            //   errors.email = 'Invalid email address';
            // }

            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              console.log(values, 'valsssss');
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
              {/* <TextField
                type="name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
              /> */}
              {/* <TextField
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />

              {errors.email && touched.email && errors.email}

              <TextField
                type="resumeLink"
                name="resumeLink"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.resumeLink}
              />
              <TextField
                type="location"
                name="location"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.location}
              /> */}

              <div>
                <FormControl component="fieldset">
                  <FormLabel component="legend">You want</FormLabel>
                  <RadioGroup
                    aria-label="want"
                    name="want"
                    value={values.skills}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="talent"
                      control={<Radio />}
                      label="Digital Talent"
                    />
                    <FormControlLabel
                      value="job"
                      control={<Radio />}
                      label="A new job"
                    />
                  </RadioGroup>
                </FormControl>
                {/* skills section */}
                <FormControl component="fieldset">
                  <FormLabel component="legend">with skills</FormLabel>
                  <FormGroup>
                    {skillsOptions.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        control={
                          <Checkbox
                            onChange={handleChange}
                            name="skillsChecked"
                            value={option.value}
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                </FormControl>

                {/* location section */}
                <FormControl component="fieldset">
                  <FormLabel component="legend">in this area</FormLabel>
                  <FormGroup>
                    {locationOptions.map((option) => (
                      <FormControlLabel
                        key={option.value}
                        control={
                          <Checkbox
                            onChange={handleChange}
                            name="areasChecked"
                            value={option.value}
                          />
                        }
                        label={option.label}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>

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
