import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};

  .rich-text-section {
    h1 {
      font-family: Whyte-Inktrap, Helvetica, sans-serif, sans-serif;
      font-size: 10rem;
      font-weight: normal;
    }

    h5 {
      font-family: Bogue-Bold, Garamond, Baskerville, sans-serif;
      font-size: 10rem;
      line-height: 8rem;
      letter-spacing: -2px;
      font-weight: normal;
      margin: 0;
    }
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .hero-logo {
    position: absolute;
    right: 40px;
    top: 20px;
    z-index: 2;
    width: 215px;
  }
`;

export const backgroundDotStyles = (theme) => css`
  background-image: radial-gradient(
    #e8e8e8 10%,
    ${theme.palette.supply.cream.main} 10%
  );
  background-position: 0 0;
  background-size: 45px 45px;
  height: 60%;
  width: 100%;
  position: absolute;
  top: 100px;
`;

export const backgroundStyles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  position: relative;
`;

export default styles;
