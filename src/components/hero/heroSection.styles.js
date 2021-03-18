import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  padding: 6rem 0 32rem;
  overflow: hidden;

  .top-images {
    z-index: 2;

    > div {
      display: flex;
      position: relative;
    }

    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }
  }

  .top-image {
    position: relative;
  }

  .badge-green {
    width: 157px;
    height: 115px;
    opacity: 0;
    transform: scale(1.5) translateY(-50px);
  }

  .peach {
    position: absolute;
    left: 112px;
    top: -35px;
    width: 219px;
    height: 113px;
    opacity: 0;
    transform: scale(3) translateY(-50px);
    z-index: 2;
  }

  .star {
    position: absolute;
    left: 375px;
    top: 35px;
    width: 49px;
    height: 49px;
    opacity: 0;
    transform-origin: 50%;
    transform: rotate(-800deg);
    z-index: 1;
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
      margin-top: 5rem;
    }

    .bogue-font {
      font-family: Bogue-Bold, Garamond, Baskerville, sans-serif;
      font-size: 10rem;
      line-height: 8rem;
      letter-spacing: -2px;
      font-weight: normal;
      padding: 0 2.4rem 0 0;
    }

    span {
      opacity: 0;
      display: inline-block;
      transform: translateY(50px);
    }
  }

  .content {
    position: relative;
    z-index: 2;
  }

  .hero-logo {
    margin-left: auto;
    width:160px;
    height:160px;
    margin-top: -30px;

    //initial styles before animating in
    opacity: 0;
    transform: scale(3) translateY(-50px);
  }
  
  .chatbox-container {
    position: absolute;
    right: -40px;
    bottom: -90px;
    z-index: 3;
    transform: translateY(100%);

    .clover {
      position: absolute;
      width: 40px;
      height: 40px;
      background: url(/images/clover-purple.svg);
      background-size: 100%;
      top: -70px;
      left: 70px;
      opacity: 0;
      transform: translateY(100%) rotate(800deg);
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
      text-decoration: none;
      background: ${theme.palette.supply.salmon.main};
      width: 476px;
      height: 211px;
      transform: rotate(-5deg);
      padding: 40px;
      display: block;
    }

    .chatbox-cta {
      color: ${theme.palette.text.primary};
    }
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
