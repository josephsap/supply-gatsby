import { css } from '@emotion/react';

export const emailFormStyles = css`
  .email-side-interior {
    h5 {
      width: 100%;
    }
  }
`;

const styles = (theme) => css`
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

  .location-select-item {
    margin: 0 1.6rem 1.6rem 0;
    .MuiFormControlLabel-label {
      border: 1px solid;
      border-radius: 100px;
      padding: 1rem 2rem;
    }
  }

  .Mui-checked + .MuiFormControlLabel-label {
    background-color: ${theme.palette.text.primary};
    color: ${theme.palette.supply.lightPeach.main};
  }
`;

export default styles;
