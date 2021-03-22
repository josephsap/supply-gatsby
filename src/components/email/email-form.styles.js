import { css } from '@emotion/react';

export const emailFormStyles = css`
  .email-side-interior {
    h5 {
      width: 100%;
    }
  }
`;

const styles = (theme) => css`
  padding: 7rem 7rem 4rem 7rem;
  .form-wrapper {
    display: flex;
    height: 80vh;
    overflow: auto;
  }

  .form-item-left {
    padding-right: 4rem;
  }

  .form-copy {
    margin: 1rem 0 4rem;
  }

  .form-item-left,
  .form-item-right {
    width: 50%;
  }

  .form-item-right {
    padding: 0 3rem;
    .MuiFormGroup-root {
      flex-direction: row;
    }
  }

  .left-form-fields {
    display: flex;
    flex-direction: column;
    div {
      margin-bottom: 1.4rem;
    }
  }

  .selectors-wrapper {
    display: flex;
    flex-direction: column;
  }

  .select-headline {
    margin-bottom: 1.8rem;
  }

  .select-group {
    margin-bottom: 3rem;
  }

  .select-item {
    margin: 0 1.6rem 1.6rem 0;
    transition: 0.25s ease;
    &:hover {
      .MuiFormControlLabel-label {
        background-color: #254a45;
        color: ${theme.palette.supply.lightPeach.main};
        transition: 0.25s ease;
        border-color: #254a45;
      }
    }
    .MuiFormControlLabel-label {
      border: 1px solid;
      border-radius: 100px;
      padding: 0.6rem 2rem;
    }
  }

  .Mui-checked + .MuiFormControlLabel-label {
    background-color: ${theme.palette.text.primary};
    color: ${theme.palette.supply.lightPeach.main};
    border-color: ${theme.palette.text.primary};
  }
`;

export default styles;
