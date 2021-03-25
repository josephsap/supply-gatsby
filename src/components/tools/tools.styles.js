import { css } from '@emotion/react';

const styles = (theme) => css`
  .tools-header-border {
    border: 3px solid;
    text-align: center;
    border-radius: 20px;
    padding: 4rem 4rem 4.5rem;
    ${theme.breakpoints.up('md')} {
      border-radius: 170px;
      padding-bottom: 7rem;
    }
  }

  .tools-title {
    margin-top: 0.5rem;
    div {
      display: inline-block;
      margin: 0 1rem;
    }
  }

  .line-separator {
    span {
      letter-spacing: -10px;
      margin: 0 2.5rem;
      font-family: helvetica, sans-serif;
      ${theme.breakpoints.down(theme.breakpoints.values.lg - 14)} {
        font-size: 0;
        margin: 0 1.5rem;
      }
    }
  }

  .tool-item-container {
    text-align: center;
    ${theme.breakpoints.up('md')} {
      text-align: left;
    }
  }

  .tool-name {
    margin: 0.5rem 0 1rem;
  }

  .tool-link {
    margin-top: 1.1rem;
  }
`;

export default styles;
