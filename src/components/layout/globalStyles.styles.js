import { css } from '@emotion/react';

const styles = css`
  html {
    font-size: 62.5%;
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
    padding-top: 12rem;
    padding-bottom: 12rem;
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
`;

export default styles;
