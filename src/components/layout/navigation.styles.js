import { css } from '@emotion/react';

const styles = (theme) => css`
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
    width: 60px;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:nth-of-type(1) {
      background-color: ${theme.palette.supply.cream.main};
    }

    &:nth-of-type(2) {
      background-color: ${theme.palette.supply.pink.main};
    }

    &:nth-of-type(3) {
      background-color: ${theme.palette.supply.goldLeather.main};
    }

    &:nth-of-type(4) {
      background-color: ${theme.palette.supply.lightPeach.main};
    }

    &:nth-of-type(5) {
      background-color: ${theme.palette.supply.lightPeach.main};
    }

    &:nth-of-type(6) {
      background-color: ${theme.palette.supply.lightPeach.main};
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
      font-size: 12px;
      transform: rotate(-90deg);
      transition: opacity 300ms cubic-bezier(0.4, 0, 0.2, 1);
      transition-delay: 0;
    }

    &:hover span,
    &.active span {
      opacity: 1;
      transition-delay: 100ms;
      overflow: visible;
    }
  }
`;

export default styles;
