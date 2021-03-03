import { css } from '@emotion/react';

const styles = (theme) => css`
  .why-us-title {
    text-align: center;
    background-image: url('why-us-ellipse.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center top;
    background-size: 280px;
    padding-bottom: 9rem;
    position: relative;
    padding-top: 1rem;
    z-index: 2;
    &:after {
      content: '';
      position: absolute;
      height: 8rem;
      width: 2px;
      bottom: 0;
      left: 50%;
      margin-left: -1px;
      background-color: ${theme.palette.text.primary};
      z-index: -1;
    }
  }

  .why-us-intro-title {
    h2 {
      em {
        color: orange;
      }
    }
  }

  .second-section {
    border-top: 2px solid;
  }
`;

export default styles;
