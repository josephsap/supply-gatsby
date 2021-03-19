import { useState, useCallback } from 'react';
import { Grid } from '@material-ui/core';
import EmailForm from './email-form';
import { chatBaseStyles } from '../chat/chat.styles';
import { emailFormStyles } from './email-form.styles';
import { useStaticQuery, graphql } from 'gatsby';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const EmailContainer = ({ setChecked }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  // const handleReCaptchaVerify = useCallback(
  //   (token) => {
  //     setToken(token);
  //   },
  //   [setToken]
  // );

  const handleReCaptchaVerify = (token) =>
    token ? setRecaptchaToken(token) : console.log('recap error');

  const data = useStaticQuery(graphql`
    query EmailDataQuery {
      contentfulEmailForm {
        title
        description
      }
      contentfulEmailFormLocation {
        locationsJson {
          label
          value
        }
      }
      contentfulEmailFormSkill {
        skillsJson {
          label
          value
        }
      }
    }
  `);

  const {
    contentfulEmailForm,
    contentfulEmailFormSkill: { skillsJson },
    contentfulEmailFormLocation: { locationsJson },
  } = data;

  console.log(skillsJson, locationsJson);

  return (
    <Grid container css={[chatBaseStyles, emailFormStyles]}>
      <Grid item xs={12} md={6} className="email-side-container">
        <EmailForm
          setChecked={setChecked}
          emailFormData={contentfulEmailForm}
          skills={skillsJson}
          locations={locationsJson}
          onVerifyRecaptcha={handleReCaptchaVerify}
        />
      </Grid>
    </Grid>
  );
};

export default EmailContainer;
