import { useState } from 'react';
import axios from 'axios';
import EmailForm from './email-form';
import { useStaticQuery, graphql } from 'gatsby';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const EmailContainer = ({ setChecked }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const [serverState, setServerState] = useState();
  const handleServerResponse = (ok, msg) => {
    setServerState({ ok, msg });
  };

  const handleEmailFormSubmit = (values, actions) => {
    // e.preventDefault();
    console.log('submit stuff', values, '0000', actions);
    axios
      .post('https://formspree.io/f/xyylgenv', values, {
        headers: { Accept: 'application/json' },
      })
      .then(function (response) {
        actions.setSubmitting(false);
        actions.resetForm();
        handleServerResponse(
          true,
          'Thanks! We will review your email and get back to you shortly.'
        );
      })
      .catch(function (error) {
        console.log(error.response.data.error);
        actions.setSubmitting(false);
        handleServerResponse(
          false,
          'There has been an error. Please refresh the page and try again later.'
        );
      });
  };

  // const handleReCaptchaVerify = useCallback(
  //   (token) => {
  //     setToken(token);
  //   },
  //   [setToken]
  // );

  // const handleReCaptchaVerify = (token) =>
  //   token ? setRecaptchaToken(token) : console.log('recap error');

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
      onEmailFormSubmit={handleEmailFormSubmit}
      serverState={serverState}
      // onVerifyRecaptcha={handleReCaptchaVerify}
    />
  );
};

export default EmailContainer;
