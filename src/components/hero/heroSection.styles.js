import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cream.main};
  padding: 6rem 0 8rem;
  overflow: hidden;
  ${theme.breakpoints.up('sm')} {
    padding-bottom: 32rem;
  }

  .mobile-dragbox {
    background-color: ${theme.palette.supply.lightPeach.main};
    transform: rotate(-1.5deg);
    padding: 1.6rem;
    border-radius: 8px;
  }

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
    display: none;
    ${theme.breakpoints.up('sm')} {
      display: block;
      width: 157px;
      height: 115px;
      opacity: 0;
      transform: scale(1.5) translateY(-50px);
    }
  }

  .peach {
    display: none;
    ${theme.breakpoints.up('sm')} {
      display: block;
      position: absolute;
      left: 112px;
      top: -35px;
      width: 219px;
      height: 113px;
      opacity: 0;
      transform: scale(3) translateY(-50px);
      z-index: 2;
    }
  }

  .star {
    display: none;
    ${theme.breakpoints.up('sm')} {
      display: block;
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
  }

  .rich-text-section {
    position: relative;
    z-index: 2;
    text-align: center;
    ${theme.breakpoints.up('sm')} {
      text-align: left;
    }
    h1 {
      font-family: Whyte-Inktrap, Helvetica, sans-serif, sans-serif;
      font-size: 4rem;
      font-weight: normal;
      line-height: 5rem;
      margin-bottom: 2.5rem;
      padding: 0 3rem;
      ${theme.breakpoints.up('sm')} {
        font-size: 10rem;
        line-height: 11rem;
        padding: 0;
        margin-top: 5rem;
      }
    }

    .bogue-font {
      font-family: Bogue-Bold, Garamond, Baskerville, sans-serif;
      font-size: 4rem;
      line-height: 5rem;
      letter-spacing: -2px;
      font-weight: normal;
      margin-right: 1rem;
      ${theme.breakpoints.up('sm')} {
        font-size: 10rem;
        line-height: 11rem;
        padding: 0 2.4rem 0 0;
      }
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
    width: 190px;
    height: 190px;
    margin-top: -60px;
    margin-left: -30px;
    opacity: 0;
    transform: scale(3) translateY(-50px);
    ${theme.breakpoints.up('md')} {
      margin-top: -30px;
      margin-left: auto;
      width: 210px;
      height: 210px;
    }
  }

  .clover {
    position: absolute;
    width: 40px;
    height: 40px;
    background: url(/images/clover-purple.svg);
    background-size: 100%;
    right: 20%;
    opacity: 0;
    transform: translateY(100%) rotate(800deg);
    display: block;
  }

  .chatbox-container {
    position: fixed;
    right: 0;
    bottom: -90px;
    z-index: 3;
    transform: translateY(100%);
    width: 100%;
    ${theme.breakpoints.up('md')} {
      right: -40px;
      width: auto;
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
      right: -40%;
      position: relative;
      background-color: ${theme.palette.supply.salmon.main};
      ${theme.breakpoints.up('sm')} {
        width: 476px;
        right: auto;
        height: 211px;
      }
    }

    .drag-box {
      transition: ${theme.transitions.create(['opacity'], {
        duration: '.2s',
        easing: theme.transitions.easing.outExpo,
      })};
    }
    .sticker-front {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      background: linear-gradient(
        to right,
        #feb29c 70%,
        #f9d9cf 80%,
        #f9d9cf 81%,
        #feb29c 100%
      );
      z-index: 2;
      clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      transform-origin: 100% 100%;
      transform: translateX(-100%) skewY(15deg);
    }
    .sticker-content {
      clip-path: polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%);
    }

    .sticker-content,
    .sticker-front {
      transition: ${theme.transitions.create(['all'], {
        duration: '.5s',
        easing: theme.transitions.easing.outExpo,
      })};
    }

    .sticker-content {
      width: 100%;
      height: 100%;
      background-color: #ffe8e1;
      borderradius: 8px;
      padding: 2rem;
    }

    &.shown {
      opacity: 1;
      .sticker-content {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
      }

      .sticker-front {
        clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
        transform: translateX(0%) rotate(0deg) skew(0deg, 15deg);
      }
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
  top: 92px;
  left: 3%;
  ${theme.breakpoints.up('md')} {
    top: 200px;
  }
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
