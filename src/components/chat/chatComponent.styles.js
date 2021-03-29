import { css } from '@emotion/react';

const styles = (theme) => css`
  .chatbox-container {
    position: fixed;
    right: 0;
    bottom: -60px;
    z-index: 6;
    transform: translateY(100%);
    width: 100%;
    ${theme.breakpoints.up('sm')} {
      right: -40px;
      width: 300px;
      bottom: -75px;
    }
    ${theme.breakpoints.up('md')} {
      width: auto;
      bottom: -90px;
    }

    .squiggly-arrow {
      width: 73px;
      height: 212px;
      position: absolute;
      top: -194px;
      right: 47px;
      z-index: 2;
      clip-path: inset(0% 0% 100% 0%);

      span {
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        background: url(/images/squiggly-arrow.png);
        background-size: 100%;
      }
    }

    .chatbox {
      margin-left: auto;
      width: 100%;
      height: 170px;
      transform: rotate(-5.23deg);
      right: -35vw;
      position: relative;
      background-color: ${theme.palette.supply.salmon.main};
      ${theme.breakpoints.up('sm')} {
        width: 476px;
        right: auto;
        height: 211px;
      }
    }
  }
`;

export default styles;
