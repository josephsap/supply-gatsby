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

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleEmailFormSubmit = (values, actions) => {
    // e.preventDefault();
    console.log('submit stuff', values, '0000', actions);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'supply-email-form', ...values }),
    })
      .then((response) => {
        console.log(response, 'ressss');
        alert('Success!');
      })
      .catch((error) => alert(error));

    // axios
    //   .post('/', formBody, {
    //     headers: { Accept: 'application/x-www-form-urlencoded' },
    //   })
    //   .then(function(response) {
    //     console.log(response, 'hiohohihioho');
    //     actions.setSubmitting(false);
    //     actions.resetForm();
    //     handleServerResponse(
    //       true,
    //       'Thanks! We will review your email and get back to you shortly.'
    //     );
    //   })
    //   .catch(function(error) {
    //     console.log(error.response.data.error);
    //     actions.setSubmitting(false);
    //     handleServerResponse(
    //       false,
    //       'There has been an error. Please refresh the page and try again later.'
    //     );
    //   });
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
