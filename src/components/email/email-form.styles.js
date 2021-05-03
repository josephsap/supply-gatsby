import { css } from '@emotion/react';

const styles = (theme) => css`
  padding: 4rem 2rem;
  ${theme.breakpoints.up('md')} {
    padding: 7rem 7rem 4rem 7rem;
  }
  .form-wrapper {
    display: flex;
    height: auto;
    overflow: inherit;
    flex-wrap: wrap;
    margin-bottom: 4rem;
    ${theme.breakpoints.up('sm')} {
      padding: 0 6rem;
    }
    ${theme.breakpoints.up('md')} {
      margin-bottom: 0;
      height: 80vh;
      overflow: auto;
      padding: 0 2rem;
    }
  }

  .form-item-left {
    ${theme.breakpoints.up('md')} {
      padding-right: 4rem;
    }
  }

  .form-copy {
    margin: 1rem 0 4rem;
  }

  .form-item-left,
  .form-item-right {
    width: 100%;
    ${theme.breakpoints.up('md')} {
      width: 50%;
    }
  }

  .form-item-right {
    ${theme.breakpoints.up('md')} {
      padding: 0 3rem;
    }
    .MuiFormGroup-root {
      flex-direction: row;
    }
  }

  .left-form-fields {
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    margin-bottom: 6rem;
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

  .form-sent-success {
    margin: 6rem 0 10rem 0;
  }

  .msg-textarea {
    background: transparent;
    outline: none;
    border: none;
    box-shadow: none;
    border-bottom: 1px solid;
    font-size: 18px;
    font-family: 'Whyte', Helvetica, sans-serif;
  }

  .btn-container {
    &:nth-of-type(2) {
      margin-left: auto;
      ${theme.breakpoints.down('sm')} {
        margin-top: 2rem;
      }
      .MuiButton-endIcon {
        ${theme.breakpoints.down('lg')} {
          display: none;
        }
      }
    }
  }
`;

export default styles;
