import { useState, useCallback } from 'react';
// import { Box } from '@material-ui/core';
import EmailForm from './email-form';
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
    <EmailForm
      setChecked={setChecked}
      emailFormData={contentfulEmailForm}
      skills={skillsJson}
      locations={locationsJson}
      // onVerifyRecaptcha={handleReCaptchaVerify}
    />
  );
};

export default EmailContainer;
