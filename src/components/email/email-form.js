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
} from '@material-ui/core';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import { chatBaseStyles } from '../chat/chat.styles';
import styles, { emailFormStyles } from './email-form.styles';
import { chatContainerPadding } from '../layout/margin-padding-utils.styles';
import ChatContainer from '../chat/chatContainer';

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

                {/* <div css={chatContainerPadding}> */}
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
                  <TextField
                    type="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Message"
                    multiline
                    label="Message"
                  />
                </div>
              </div>

              <div className="form-item-right">
                <div className="selectors-wrapper">
                  <FormControl component="fieldset">
                    <Typography variant="h4" className="select-headline">
                      You want
                    </Typography>
                    <RadioGroup
                      aria-label="want"
                      name="want"
                      value={values.skills}
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

                {/* <GoogleReCaptcha onVerify={onVerifyRecaptcha} /> */}
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Send
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
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
