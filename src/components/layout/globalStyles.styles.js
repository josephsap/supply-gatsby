import { css } from '@emotion/react';

const styles = (theme) => css`
  html {
    font-size: 62.5%;
    overflow-x: hidden;
    ${'' /* cursor: url('images/cursor.png'), auto; */}
  }
  body {
    font-size: 1.4rem;
  }
  .border-container {
    border: 3px solid;
    border-radius: 20px;
  }
  .section-padding {
    padding-top: 7rem;
    padding-bottom: 7rem;
    ${theme.breakpoints.up('sm')} {
      padding-top: 12rem;
      padding-bottom: 12rem;
    }
  }
  .section-padding-bottom {
    padding-bottom: 12rem;
  }
  .rich-text-body-copy {
    font-family: Whyte, Helvetica, sans-serif;
    font-size: 2.2rem;
    line-height: 3.2rem;
  }
  .rich-text-header {
    h1 {
      border: 1px solid;
    }
  }
  .side-padding {
    ${theme.breakpoints.between(
      theme.breakpoints.values.tablet,
      theme.breakpoints.values.lg + 70
    )} {
      padding-left: 6rem;
      padding-right: 6rem;
    }
  }
`;

export default styles;
