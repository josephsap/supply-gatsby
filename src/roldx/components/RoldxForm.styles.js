import { css } from '@emotion/react';

const styles = (theme) => css`
  margin: 4rem 0;
  .form-sent-success {
    margin: 4rem auto;
  }

  .email-field {
    border-bottom: 3px solid;
    &:hover,
    &:focus {
      border-bottom: 3px solid;
    }
  }

  .button-send {
    width: 160px;
    height: 60px;
  }
`;

export default styles;
