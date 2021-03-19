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
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';

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
}) => {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={reCaptchaKey}>
      <Box className="email-side-interior">
        <Typography variant="h5">{emailFormData.title}</Typography>
        <Typography variant="body1">{emailFormData.description}</Typography>
        <div>
          <Typography variant="h4">The basics</Typography>

          <Formik
            initialValues={{
              name: '',
              email: '',
              resumeLink: '',
              message: '',
              want: 'talent',
              skillsChecked: [],
              areasChecked: [],
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
            }) => (
              <form onSubmit={handleSubmit}>
                <TextField
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <TextField
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
                  type="message"
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  placeholder="Message"
                  multiline
                />

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
                      {skills.map((skill) => (
                        <FormControlLabel
                          key={skill.value}
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name="skillsChecked"
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
                    <FormLabel component="legend">in this area</FormLabel>
                    <FormGroup>
                      {locations.map((location) => (
                        <FormControlLabel
                          key={location.value}
                          control={
                            <Checkbox
                              onChange={handleChange}
                              name="areasChecked"
                              value={location.value}
                            />
                          }
                          label={location.label}
                        />
                      ))}
                    </FormGroup>
                  </FormControl>
                </div>
                <GoogleReCaptcha onVerify={onVerifyRecaptcha} />
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
    </GoogleReCaptchaProvider>
  );
};

export default EmailForm;
