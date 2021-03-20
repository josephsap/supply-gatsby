import { css } from '@emotion/react';

export const emailFormStyles = (theme) => css`
  .email-side-interior {
    h5 {
      width: 100%;
    }
  }
`;

const styles = css`
  .form-wrapper {
    display: flex;
  }

  .form-item-left,
  .form-item-right {
    width: 50%;
    border: 1px solid;
  }

  .form-item-right {
    .MuiFormGroup-root {
      flex-direction: row;
    }
  }

  .left-form-fields {
    display: flex;
    flex-direction: column;
  }

  .selectors-wrapper {
    display: flex;
    flex-direction: column;
  }
`;

export default styles;
