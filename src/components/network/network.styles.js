import { css } from '@emotion/react';
import {
  floatRight,
  floatLeft,
  scaleRotate,
  rotate1,
  rotate2,
  rotate3,
} from '../shared/animations.styles';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  .network-title {
    ${theme.breakpoints.down('sm')} {
      text-align: center;
    }
    h2 {
      ${initiallyHidden};
      ${theme.breakpoints.up('sm')} {
        line-height: 7.6rem;
      }
    }
  }

  .network-container-top {
    padding-top: 3rem;
    ${theme.breakpoints.up('sm')} {
      padding-top: 6rem;
    }
  }

  .network-desc {
    ${theme.breakpoints.down('sm')} {
      text-align: center;
      padding: 0 2.4rem;
    }
    p {
      ${initiallyHidden}
    }
  }

  .network-container {
    height: 0;
    padding-bottom: 60%;
    width: 100%;
    margin: 120px 0 160px;
    position: relative;
  }

  .network-ring-container {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 0;

    svg {
      width: 100%;
      display: block;

      path {
        animation: ${scaleRotate} 3.5s ease-out infinite;
      }

      path,
      circle {
        transform-origin: 50%;
      }

      circle {
        animation: ${floatLeft} 2s ease-out infinite;

        &:nth-of-type(even) {
          animation: ${floatRight} 2s ease-out infinite;
        }
        &:nth-of-type(3n) {
          animation-delay: 0.02s;
          animation-duration: 2s;
        }
        &:nth-of-type(4n) {
          animation-delay: 0.05s;
          animation-duration: 2s;
        }
      }
    }

    &.network-inner {
      width: 20%;
      padding-bottom: 23%;
      transform: translate(-50%, -50%) scale(0) rotate(10deg);
    }

    &.network-outer {
      width: 40%;
      padding-bottom: 40%;
      transform: translate(-50%, -50%) scale(0) rotate(-10deg);

      path {
        animation-duration: 4s;
        animation-delay: 0.5s;
      }

      path,
      circle {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }
  }

  .network-items-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    .svg-container {
      width: 25px;

      svg {
        display: block;
        width: 100%;
        height: 100%;
      }
      path {
        fill: ${theme.palette.supply.salmon.main};
      }
    }

    .network-item {
      position: absolute;
      left: 50%;
      top: 50%;
      transform-origin: center 100%;
      //start with opacity 0
      opacity: 0;

      .line {
        height: calc(100% - 15px);
        width: 1px;
        position: absolute;
        content: '';
        display: block;
        left: 50%;
        transform-origin: center 100%;
        //start with scaleY 0
        transform: translateX(-50%) scaleY(0);
        bottom: 15px;
        z-index: 1;
      }

      &:nth-of-type(1) {
        margin-left: -21%;
        margin-top: -8%;
        z-index: 5;
        //the starting position before it animates in
        transform: translate(-20%, -60%);
        ${theme.breakpoints.up('sm')} {
          margin-left: -23%;
          margin-top: -4%;
        }

        .network-item-inner-wrapper {
          transform: rotate(-6deg);
          animation: ${rotate1} 5s ease-out infinite;
        }
      }

      &:nth-of-type(2) {
        margin-left: 23%;
        margin-top: 43%;
        z-index: 4;
        //the starting position before it animates in
        transform: translate(-130%, -100%);
        ${theme.breakpoints.up('sm')} {
          margin-left: 32%;
          margin-top: 10%;
        }

        .network-item-inner-wrapper {
          transform: rotate(7deg);
          animation: ${rotate2} 5s ease-out infinite;
        }
      }

      &:nth-of-type(3) {
        margin-left: 22%;
        margin-top: -47%;
        z-index: 6;
        //the starting position before it animates in
        transform: translate(-100%, -70%);
        ${theme.breakpoints.up('sm')} {
          margin-left: 22%;
          margin-top: -17%;
        }

        .network-item-inner-wrapper {
          transform: rotate(7deg);
          animation: ${rotate3} 5s ease-out infinite;
        }
      }

      header {
        color: #fff;
        padding: 13px 25px;
        border-radius: 30px;
        cursor: pointer;
        z-index: 2;
        position: relative;
        white-space: nowrap;

        //start with scale 0
        transform: scale(0);

        &:hover {
          z-index: 2;
          + .item-description {
            transform: scale(1);
          }
        }
      }

      .item-description {
        z-index: 2;
        margin-top: 10px;
        position: absolute;
        background: #fff;
        padding: 20px;
        border-radius: 14px;
        transform-origin: 50% 0;
        transform: scale(0);
        width: 120%;
        margin-left: -10%;

        transition: ${theme.transitions.create(['transform'], {
          duration: '.25s',
          easing: theme.transitions.easing.inOutCirc,
        })};
      }

      .svg-container {
        margin: 50% auto 0;
        position: relative;
      }
    }

    .background-svg-container {
      position: absolute;
      width: 100%;
      height: 100%;

      .svg-container {
        left: 50%;
        top: 50%;
        position: absolute;
        z-index: 1;
        //start with opacity 0
        opacity: 0;

        svg {
          animation: ${floatLeft} 5s ease-out infinite;
        }
        &:nth-of-type(even) {
          svg {
            animation: ${floatRight} 5s ease-out infinite;
          }
        }

        &:nth-of-type(1) {
          margin-left: -33%;
          margin-top: -23%;
          //the starting position before it animates in
          transform: translate(411%, 320%);
        }
        &:nth-of-type(2) {
          margin-left: -14%;
          margin-top: -19%;
          //the starting position before it animates in
          transform: translate(241%, 140%);
        }
        &:nth-of-type(3) {
          margin-left: -39%;
          margin-top: 18%;
          //the starting position before it animates in
          transform: translate(400%, -280%);
        }
        &:nth-of-type(4) {
          margin-left: 0%;
          margin-top: 22%;
          //the starting position before it animates in
          transform: translate(-50%, -270%);
        }
        &:nth-of-type(5) {
          margin-left: 38%;
          margin-top: -5%;
          //the starting position before it animates in
          transform: translate(-400%, 20%);
        }
      }
    }
  }
`;

// export const networkItemStyles = (imgUrl) => css`
//   background-image: url(${imgUrl});
//   background-repeat: no-repeat;
//   background-size: 250px;
// `;

export const networkItemStyles = (color) => css`
  header,
  .line {
    background-color: ${color};
  }
`;

export default styles;
