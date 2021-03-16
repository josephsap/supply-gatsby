import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  padding: 6rem 0 32rem;

  .top-images {
    z-index: 2;

    > div {
      display: flex;
      position: relative;
    }
  }

  .peach {
    position: absolute;
    left: 112px;
    top: -5px;
  }

  .star {
    position: absolute;
    left: 375px;
    top: 85px;
  }

  .rich-text-section {
    position: relative;
    z-index: 2;
    h1 {
      font-family: Whyte-Inktrap, Helvetica, sans-serif, sans-serif;
      font-size: 10rem;
      font-weight: normal;
      line-height: 11rem;
      margin-bottom: 2.5rem;
    }

    span {
      font-family: Bogue-Bold, Garamond, Baskerville, sans-serif;
      font-size: 10rem;
      line-height: 8rem;
      letter-spacing: -2px;
      font-weight: normal;
      display: inline-block;
      padding: 0 2.4rem 0 0;
    }
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .hero-logo {
    margin-left: auto;
    width: 225px;
  }
`;

export const backgroundDotStyles = (theme) => css`
  background-image: radial-gradient(
    #e8e8e8 10%,
    ${theme.palette.supply.cream.main} 10%
  );
  background-position: 0 0;
  background-size: 60px 60px;
  height: 58%;
  width: 94%;
  position: absolute;
  top: 200px;
  left: 3%;
`;

export const backgroundStyles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  position: relative;
`;

export const dragStyles = (theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.tablet)} {
    display: none;
  }
`;

export default styles;
