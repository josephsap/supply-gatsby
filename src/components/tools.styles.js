import { css } from '@emotion/react';

const styles = (theme) => css`
  .tools-header-border {
    border: 3px solid;
    text-align: center;
    border-radius: 170px;
  }

  .tools-description {
    font-size: 3.2rem;
    line-height: 4.2rem;
  }

  .tools-title {
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

  .tool-name {
    margin: 0.5rem 0 1rem;
  }

  .tool-link {
    margin-top: 1.1rem;
  }
`;

export default styles;
