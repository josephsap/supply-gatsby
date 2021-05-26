import { css, keyframes } from '@emotion/react';
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(20px) rotate(-90deg);
  }
  50% {
    opcaity: 0.5;
    transform: translateX(0px) rotate(-90deg);
  }
  100% {
    opacity: 1;
  }
`;
const styles = (theme) => css`
  ${theme.breakpoints.down(theme.breakpoints.values.tablet)} {
    display: none;
  }
  .nav-wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 6;
  }

  .nav-item {
    position: relative;
    display: flex;
    height: calc(100vh / 8);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-family: '"Whyte", Helvetica, sans-serif';
    font-size: 1.6rem;
    width: 54px;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:nth-of-type(1) {
      background-color: ${theme.palette.supply.cream.main};
    }

    &:nth-of-type(2) {
      background-color: ${theme.palette.supply.cement.main};
    }

    &:nth-of-type(3) {
      background-color: ${theme.palette.supply.eraser.main};
    }

    &:nth-of-type(4) {
      background-color: ${theme.palette.supply.desertTan.main};
    }

    &:nth-of-type(5) {
      background-color: ${theme.palette.supply.seaGreen.main};
    }

    &:nth-of-type(6) {
      background-color: ${theme.palette.supply.cream.main};
    }

    &:nth-of-type(7) {
      background-color: ${theme.palette.supply.seaGreen.main};
    }

    &:nth-of-type(8) {
      background-color: ${theme.palette.supply.cream.main};
    }

    &.active,
    &:hover {
      height: 45%;
      padding-top: 2rem;
    }

    span {
      padding-left: 2rem;
      overflow: hidden;
      white-space: nowrap;
      line-height: 1;
      font-size: 16px;
      transform: rotate(-90deg);
      transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
      transition-delay: 0;
      opacity: 0;
      font-weight: bold;
    }

    &:hover span,
    &.active span {
      transition-delay: 100ms;
      overflow: visible;
      animation: ${fadeIn} 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.1s;
    }

    &.active span {
      animation: ${fadeIn} 0.75s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      animation-delay: 0.1s;
    }
  }
`;

export default styles;
