import { css } from '@emotion/react';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.cement.main};
  overflow: hidden;
  .mobile-title {
    margin: 1rem 0rem 8rem;
  }

  .category-hide {
    em {
      opacity: 0 !important;
      pointer-events: none;
    }
  }

  //partner tabs styles
  .partner-tabs-wrapper {
    ${initiallyHidden}
    border-radius: 100px;
    border: 3px solid #162c29;
    display: inline-block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    opacity: 1;
    margin: 3rem auto 10rem;
    transform: translateY(0px);
    transition: all 0.25s;
  }
  .section-button {
    background: none;
    border: none;
    width: 173px;
    font-size: 1.5rem;
    color: rgba(1, 0, 0, 0.54);
    font-family: 'Whyte', Helvetica, sans-serif;
    font-weight: 500;
    z-index: 1;
    position: relative;
    transition: color 0.25s;
    padding: 1.5rem 0;
    cursor: pointer;
    ${theme.breakpoints.down('sm')} {
      width: 100px;
    }
    &:active,
    &:focus {
      outline: none;
    }
    &.active {
      color: ${theme.palette.supply.cement.main};
    }
  }

  .category-item-wrapper {
    display: inline;
  }

  .active-indicator {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 55%;
    background: #162c29;
    border-radius: 32px;
  }

  //pre-animated styles
  .headline,
  .partner-tabs,
  .category-container {
  }

  .tab-indicator-override {
    background: none;
  }
  .partner-with-headline {
    font-size: 2.3rem;
    ${theme.breakpoints.up('sm')} {
      font-size: 2.8rem;
    }
  }

  .partner-section-container {
    text-align: center;
  }

  .partner-tabs {
    border: 3px solid;
    text-align: center;
    display: table;
    margin: 3rem auto 10rem;
    border-radius: 32px;
    line-height: 0;
  }

  .single-tab-item {
    text-transform: capitalize;
  }

  .Mui-selected {
    background-color: ${theme.palette.text.primary};
  }

  .info-tooltip {
    height: 35px;
    display: block;
  }

  .tooltip-container {
    display: table;
    margin: 0 auto;
    cursor: pointer;
  }

  //the hovering items
  .category-container {
    position: relative;
    ${theme.breakpoints.down('md')} {
      margin-bottom: 18rem;
    }

    .category-cta,
    .category-item,
    .category-icons svg {
      transition: ${theme.transitions.create(['transform', 'opacity'], {
        duration: '.25s',
        easing: theme.transitions.easing.outExpo,
      })};
    }

    &.active {
      .category-cta,
      .category-item,
      .category-icons svg {
        transition: ${theme.transitions.create(['all'], {
          duration: '.25s',
          easing: theme.transitions.easing.inOutCirc,
        })};
        opacity: 1;
      }

      .category-cta {
        transform: translateY(0);
      }
    }

    &.inactive {
      h3 {
        opacity: 0.5;
      }
    }
  }

  .management.category-container {
    margin-bottom: 5rem;
  }

  .category-title {
    display: inline-block;
    margin-bottom: 30px;
    text-decoration: none;
    cursor: pointer;
    overflow: hidden;

    h3 {
      display: flex;
      overflow: hidden;
      color: ${theme.palette.text.primary};
      position: relative;
      font-size: 150px;
      /* transition: ${theme.transitions.create(['opacity'], {
        duration: '.25s',
        easing: theme.transitions.easing.inOutCirc,
      })}; */

      ${theme.breakpoints.down('md')} {
        font-size: 72px;
      }

      ${theme.breakpoints.down('sm')} {
        font-size: 60px;
      }

      .title-char {
        ${initiallyHidden}
        transform: translateY(100%) rotate(7deg);
        display: block;
      }

      &:after {
        width: 100%;
        height: 2px;
        background: currentColor;
        position: absolute;
        content: '';
        left: 0;
        bottom: 0.05em;
      }
    }

    .category-cta {
      margin-top: 15px;
      display: block;
      color: ${theme.palette.supply.purple.main};
      text-decoration: underline;
      text-align: center;
      opacity: 0;
      transform: translateY(-20px);

      svg {
        display: none;
        ${theme.breakpoints.up('md')} {
          display: block;
          width: 12px;
          margin: auto;
        }
      }

      em {
        display: block;
        font-style: normal;
      }
    }
  }

  .category-item {
    display: inline-block;
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.25);
    transform-origin: 50%;
    backface-visibility: hidden;
    height: 0;
    opacity: 0;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }

  .category-cta,
  .category-item-title {
    font-size: 1.4rem;
    ${theme.breakpoints.up('lg')} {
      font-size: 2rem;
      line-height: 1.4;
    }
  }

  .category-icons {
    svg {
      display: block;
      width: 2rem;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transform-origin: 50%;
      backface-visibility: hidden;
      opacity: 0;
    }
  }

  .animated {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
  }

  .design {
    .category-item:nth-of-type(1) {
      width: 110px;
      padding-bottom: 70px;
      transform: translate(-50%, -50%) rotate(40deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 14%;
        padding-bottom: 9%;
      }
      .animated {
        background-image: url(/images/pill-bg-purple.svg);
      }
    }
    .category-item:nth-of-type(2) {
      width: 140px;
      padding-bottom: 37px;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 17%;
        padding-bottom: 4%;
      }
      .animated {
        background-image: url(/images/pill-bg-coral.svg);
      }
    }
    .category-item:nth-of-type(3) {
      width: 95px;
      padding-bottom: 37px;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 12%;
        padding-bottom: 4.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-green.svg);
      }
    }
    .category-item:nth-of-type(4) {
      width: 120px;
      padding-bottom: 44px;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 19%;
        padding-bottom: 7%;
      }
      .animated {
        background-image: url(/images/pill-bg-orange.svg);
      }
    }
    .category-item:nth-of-type(5) {
      width: 155px;
      padding-bottom: 36px;
      color: ${theme.palette.supply.cement.main};
      transform: translate(-50%, -50%) rotate(25deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 17%;
        padding-bottom: 4%;
      }
      .animated {
        background-image: url(/images/pill-bg-blue.svg);
      }
    }
    .category-item:nth-of-type(6) {
      width: 88px;
      padding-bottom: 55px;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 11%;
        padding-bottom: 7%;
      }
      .animated {
        background-image: url(/images/pill-bg-white-scalloped.svg);
      }
    }
    .category-item:nth-of-type(7) {
      width: 111px;
      padding-bottom: 38px;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 16%;
        padding-bottom: 5.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-gold.svg);
      }
    }

    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(1);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }

      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(1);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(400deg) scale(1);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(400deg) scale(1);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-170%, -200%) rotate(17deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(-271%, -216%) rotate(17deg);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(-47%, -348%) rotate(-2deg);
      }
      .category-item:nth-of-type(3) {
        transform: translate(94%, -280%) rotate(9.6deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(173%, -330%) rotate(9.6deg);
        }
      }
      .category-item:nth-of-type(4) {
        transform: translate(-159%, -10%) rotate(-3deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(-249%, -73%) rotate(-3deg);
        }
      }
      .category-item:nth-of-type(5) {
        transform: translate(-122%, 189%) rotate(7deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(-192%, 129%) rotate(7deg);
        }
      }
      .category-item:nth-of-type(6) {
        transform: translate(85%, 67%) rotate(-9deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(144%, 70%) rotate(-9deg);
        }
      }
      .category-item:nth-of-type(7) {
        transform: translate(65%, -98%) rotate(-5deg);
        ${theme.breakpoints.up('md')} {
          transform: translate(138%, -135%) rotate(-5deg);
        }
      }
      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-480%, -310%) rotate(16deg) scale(2);
        }
        svg:nth-of-type(2) {
          transform: translate(777%, -11%) rotate(-9deg) scale(2);
          ${theme.breakpoints.up('md')} {
            transform: translate(977%, -101%) rotate(-9deg) scale(2);
          }
        }
        svg:nth-of-type(3) {
          transform: translate(-870%, -140%) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(300%, 0%) scale(2);
          ${theme.breakpoints.up('md')} {
            transform: translate(1300%, 0%) scale(2);
          }
        }
      }
    }
  }
  .technology {
    .category-item:nth-of-type(1) {
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
      width: 150px;
      padding-bottom: 40px;
      ${theme.breakpoints.up('md')} {
        width: 22%;
        padding-bottom: 6%;
      }
      .animated {
        background: url(/images/pill-bg-coral.svg) center / cover;
        height: 100%;
        width: 100%;
      }
    }
    .category-item:nth-of-type(2) {
      width: 130px;
      padding-bottom: 50px;
      ${theme.breakpoints.up('md')} {
        width: 21%;
        padding-bottom: 7.5%;
      }
      .animated {
        background: url(/images/pill-bg-green.svg) center / cover;
        height: 100%;
        width: 100%;
      }
    }
    .category-item:nth-of-type(3) {
      width: 117px;
      padding-bottom: 59px;
      ${theme.breakpoints.up('md')} {
        width: 16%;
        padding-bottom: 7.7%;
      }
      .animated {
        background: url(/images/pill-bg-purple-small.svg) center / cover;
        height: 100%;
        width: 100%;
      }
    }
    .category-item:nth-of-type(4) {
      width: 160px;
      padding-bottom: 60px;
      transform: translate(-50%, -50%) rotate(45deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 19%;
        padding-bottom: 7%;
      }
      .animated {
        background: url(/images/pill-bg-orange.svg) center / cover;
        height: 100%;
        width: 100%;
      }
    }
    .category-item:nth-of-type(5) {
      width: 150px;
      padding-bottom: 32px;
      transform: translate(-50%, -50%) rotate(-70deg) scale(0.25);
      color: ${theme.palette.supply.cement.main};
      ${theme.breakpoints.up('md')} {
        width: 18%;
        padding-bottom: 4%;
      }
      .animated {
        background: url(/images/pill-bg-blue.svg) center / cover;
        height: 100%;
        width: 100%;
      }
    }
    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(5) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.salmon.main};
        }
      }
      svg:nth-of-type(6) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-133%, -266%) rotate(-8.7deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-163%, -266%) rotate(-8.7deg) scale(1);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(-45%, -290%) rotate(13deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(59%, -196%) rotate(17deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(123%, -225%) rotate(17deg) scale(1);
        }
      }
      .category-item:nth-of-type(4) {
        transform: translate(-125%, 5%) rotate(19.3deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-142%, 5%) rotate(9.3deg) scale(1);
        }
      }
      .category-item:nth-of-type(5) {
        transform: translate(12%, 164%) rotate(-13deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(95%, 33%) rotate(-13deg) scale(1);
        }
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-1480%, -120%) rotate(45deg) scale(2);
        }

        svg:nth-of-type(2) {
          transform: translate(287%, -111%) rotate(-9deg) scale(2);
          ${theme.breakpoints.up('md')} {
            transform: translate(1387%, -111%) rotate(-9deg) scale(2);
          }
        }

        svg:nth-of-type(3) {
          transform: translate(830%, -260%) rotate(30deg) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(-530%, -270%) scale(2);
        }
        svg:nth-of-type(5) {
          transform: translate(520%, -350%) scale(2);
        }
        svg:nth-of-type(6) {
          transform: translate(490%, 0%) scale(2);
        }
      }
    }
  }
  .management {
    .category-item:nth-of-type(1) {
      transform: translate(-50%, -50%) rotate(25deg) scale(0.25);
      width: 150px;
      padding-bottom: 40px;
      ${theme.breakpoints.up('md')} {
        width: 18%;
        padding-bottom: 5%;
      }
      .animated {
        background-image: url(/images/pill-bg-coral.svg);
      }
    }
    .category-item:nth-of-type(2) {
      width: 180px;
      padding-bottom: 60px;
      background-size: 100% 100%;
      transform: translate(-50%, -50%) rotate(-1deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 15%;
        padding-bottom: 7%;
      }
      .animated {
        background-image: url(/images/pill-bg-purple-small.svg);
      }
    }
    .category-item:nth-of-type(3) {
      width: 185px;
      padding-bottom: 49px;
      background-size: 100% 100%;
      transform: translate(-50%, -50%) rotate(-13.11deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 16%;
        padding-bottom: 5.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-green.svg);
      }
    }
    .category-item:nth-of-type(4) {
      width: 185px;
      padding-bottom: 43px;
      line-height: 1.1;
      color: ${theme.palette.supply.cement.main};
      transform: translate(-50%, -50%) rotate(-11deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 25%;
        padding-bottom: 5.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-blue.svg);
      }
    }
    .category-item:nth-of-type(5) {
      width: 170px;
      padding-bottom: 80px;
      transform: translate(-50%, -50%) rotate(27deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 17%;
        padding-bottom: 8%;
      }
      .animated {
        background-image: url(/images/pill-bg-white-scalloped-long.svg);
      }
    }
    .category-item:nth-of-type(6) {
      width: 150px;
      padding-bottom: 40px;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 18%;
        padding-bottom: 4.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-orange-long.svg);
      }
    }

    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.cobalt.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }
      svg:nth-of-type(5) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(6) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-130%, -272%) rotate(-7.95deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-250%, -342%) rotate(-7.95deg) scale(1);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(-40%, -220%) rotate(-13deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-106%, -270%) rotate(-13deg) scale(1);
        }
      }
      .category-item:nth-of-type(3) {
        transform: translate(17%, -188%) rotate(17deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(170%, -300%) rotate(17deg) scale(1);
        }
      }
      .category-item:nth-of-type(4) {
        transform: translate(-110%, 47%) rotate(9.3deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-191%, 77%) rotate(9.3deg) scale(1);
        }
      }
      .category-item:nth-of-type(5) {
        transform: translate(7%, 27%) rotate(-13deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(49%, 57%) rotate(-13deg) scale(1);
        }
      }
      .category-item:nth-of-type(6) {
        transform: translate(10%, 250%) rotate(10deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(150%, 80%) rotate(10deg) scale(1);
        }
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-590%, -260%) rotate(30deg) scale(2);
        }

        svg:nth-of-type(2) {
          display: none;
          ${theme.breakpoints.up('md')} {
            transform: translate(1160%, -250%) rotate(-35deg) scale(2);
          }
        }

        svg:nth-of-type(3) {
          transform: translate(260%, -10%) rotate(-22deg) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(-1460%, 0%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(5) {
          transform: translate(-450%, -20%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(6) {
          display: none;
          ${theme.breakpoints.up('md')} {
            transform: translate(910%, -210%) rotate(0deg) scale(2);
          }
        }
      }
    }
  }

  .brands {
    .category-item:nth-of-type(1) {
      width: 111px;
      padding-bottom: 71px;
      line-height: 1;
      transform: translate(-50%, -50%) rotate(10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 13%;
        padding-bottom: 8.5%;
      }
      span {
        width: 60%;
      }
      .animated {
        background-image: url(/images/pill-bg-white.svg);
      }
    }
    .category-item:nth-of-type(2) {
      width: 150px;
      padding-bottom: 53px;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 17%;
        padding-bottom: 6%;
      }
      .animated {
        background-image: url(/images/pill-bg-orange.svg);
      }
    }
    .category-item:nth-of-type(3) {
      width: 110px;
      padding-bottom: 59px;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
      color: ${theme.palette.supply.cement.main};
      ${theme.breakpoints.up('md')} {
        width: 13%;
        padding-bottom: 7%;
      }
      .animated {
        background-image: url(/images/pill-bg-blue-scalloped.svg);
      }
    }
    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }
      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.eraser.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.salmon.main};
        }
      }
      svg:nth-of-type(5) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(6) {
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-50%, -182%) rotate(-10deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-50%, -222%) rotate(-10deg) scale(1);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(-135%, 0%) rotate(13deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-229%, 0%) rotate(13deg) scale(1);
        }
      }
      .category-item:nth-of-type(3) {
        transform: translate(60%, 0%) rotate(-8deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(150%, 40%) rotate(-8deg) scale(1);
        }
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-420%, -280%) rotate(20deg) scale(2);
        }
        svg:nth-of-type(2) {
          transform: translate(-410%, -10%) rotate(-30deg) scale(2);
        }
        svg:nth-of-type(3) {
          transform: translate(350%, -10%) rotate(24deg) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(410%, -260%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(5) {
          transform: translate(-770%, -130%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(6) {
          transform: translate(770%, -120%) rotate(0deg) scale(2);
        }
      }
    }
  }

  .agencies {
    .category-item:nth-of-type(1) {
      width: 150px;
      padding-bottom: 42px;
      transform: translate(-50%, -50%) rotate(10deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 19%;
        padding-bottom: 5%;
      }
      .animated {
        background-image: url(/images/pill-bg-coral.svg);
      }
    }
    .category-item:nth-of-type(2) {
      width: 138px;
      padding-bottom: 50px;
      transform: translate(-50%, -50%) rotate(30deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 15%;
        padding-bottom: 5.5%;
      }
      .animated {
        background-image: url(/images/pill-bg-green.svg);
      }
    }
    .category-item:nth-of-type(3) {
      width: 150px;
      padding-bottom: 50px;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 18%;
        padding-bottom: 6%;
      }
      .animated {
        background-image: url(/images/pill-bg-gold.svg);
      }
    }
    .category-item:nth-of-type(4) {
      width: 114px;
      padding-bottom: 73px;
      line-height: 1;
      transform: translate(-50%, -50%) rotate(30deg) scale(0.25);
      ${theme.breakpoints.up('md')} {
        width: 13%;
        padding-bottom: 8.2%;
      }
      .animated {
        background-image: url(/images/pill-bg-purple.svg);
      }

      span {
        width: 80%;
      }
    }

    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.cobalt.main};
        }
      }
      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.salmon.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
      svg:nth-of-type(5) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(6) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.eraser.main};
        }
      }
      svg:nth-of-type(7) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-140%, -280%) rotate(-12deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-180%, -290%) rotate(-21deg) scale(1);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(20%, -280%) rotate(-21deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(150%, -280%) rotate(-21deg) scale(1);
        }
      }
      .category-item:nth-of-type(3) {
        transform: translate(-130%, 6%) rotate(19deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-250%, 56%) rotate(19deg) scale(1);
        }
      }
      .category-item:nth-of-type(4) {
        transform: translate(67%, -10%) rotate(-10deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(200%, 40%) rotate(-10deg) scale(1);
        }
      }
      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-1190%, -180%) rotate(15deg) scale(2);
        }
        svg:nth-of-type(2) {
          transform: translate(-520%, 60%) rotate(-33deg) scale(2);
        }
        svg:nth-of-type(3) {
          transform: translate(80%, -320%) rotate(-20deg) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(850%, -170%) rotate(20deg) scale(2);
        }
        svg:nth-of-type(5) {
          display: none;
          ${theme.breakpoints.up('md')} {
            transform: translate(1020%, -230%) rotate(0deg) scale(2);
          }
        }
        svg:nth-of-type(6) {
          transform: translate(-170%, -240%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(7) {
          transform: translate(440%, 0%) rotate(0deg) scale(2);
        }
      }
    }
  }

  .startuptech {
    .category-item:nth-of-type(1) {
      width: 80px;
      padding-bottom: 40px;
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
      .animated {
        background-image: url(/images/pill-bg-green-small.svg);
      }
      ${theme.breakpoints.up('md')} {
        width: 10%;
        padding-bottom: 5%;
      }
    }
    .category-item:nth-of-type(2) {
      width: 85px;
      padding-bottom: 53px;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
      color: ${theme.palette.supply.cement.main};
      .animated {
        background-image: url(/images/pill-bg-blue-small.svg);
      }
      ${theme.breakpoints.up('md')} {
        width: 12%;
        padding-bottom: 7.5%;
      }
    }
    .category-item:nth-of-type(3) {
      width: 150px;
      padding-bottom: 40px;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
      .animated {
        background-image: url(/images/pill-bg-coral.svg);
      }
      ${theme.breakpoints.up('md')} {
        width: 17%;
        padding-bottom: 4.7%;
      }
    }
    .category-item:nth-of-type(4) {
      width: 90px;
      padding-bottom: 58px;
      line-height: 1.1;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
      .animated {
        background-image: url(/images/pill-bg-purple.svg);
      }
      ${theme.breakpoints.up('md')} {
        width: 11%;
        padding-bottom: 7%;
      }

      span {
        width: 60%;
      }
    }
    .category-item:nth-of-type(5) {
      width: 82px;
      padding-bottom: 40px;
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
      .animated {
        background-image: url(/images/pill-bg-gold-small.svg);
      }
      ${theme.breakpoints.up('md')} {
        width: 13%;
        padding-bottom: 6.5%;
      }
    }
    .category-icons {
      .animated:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        position: absolute;
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
      .animated:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.cobalt.main};
        }
      }
      .animated:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }
      .animated:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.salmon.main};
        }
      }
      .animated:nth-of-type(5) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      .animated:nth-of-type(6) {
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.eraser.main};
        }
      }
      .animated:nth-of-type(7) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-230%, -280%) rotate(-21deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-500%, -310%) rotate(-21deg) scale(1);
        }
      }
      .category-item:nth-of-type(2) {
        transform: translate(-80%, -220%) rotate(-16deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(25%, -300%) rotate(11deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(210%, -350%) rotate(11deg) scale(1);
        }
      }
      .category-item:nth-of-type(4) {
        transform: translate(-170%, 16%) rotate(16deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(-350%, 76%) rotate(16deg) scale(1);
        }
      }
      .category-item:nth-of-type(5) {
        transform: translate(110%, 30%) rotate(-23deg) scale(1);
        ${theme.breakpoints.up('md')} {
          transform: translate(240%, 70%) rotate(-23deg) scale(1);
        }
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-550%, -300%) rotate(21deg) scale(2);
        }
        svg:nth-of-type(2) {
          transform: translate(-1231%, 0%) rotate(-30deg) scale(2);
        }
        svg:nth-of-type(3) {
          transform: translate(260%, -320%) rotate(20deg) scale(2);
        }
        svg:nth-of-type(4) {
          transform: translate(480%, 40%) rotate(-40deg) scale(2);
        }
        svg:nth-of-type(5) {
          transform: translate(-880%, -310%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(6) {
          transform: translate(-470%, 57%) rotate(0deg) scale(2);
        }
        svg:nth-of-type(7) {
          transform: translate(260%, -50%) rotate(0deg) scale(2);
          ${theme.breakpoints.up('md')} {
            transform: translate(1260%, -50%) rotate(0deg) scale(2);
          }
        }
      }
    }
  }
`;

export const tabStyles = (value) => css`
  ${value === 0
    ? `
    .Mui-selected {
      border-top-right-radius: 32px;
      border-bottom-right-radius: 32px;
    }
  `
    : `
    .Mui-selected {
      border-top-left-radius: 32px;
      border-bottom-left-radius: 32px;
    }
  `}
`;

export const popoverStyles = (theme) => css`
  max-width: 340px;
  text-align: center;
  ${theme.breakpoints.up('sm')} {
    max-width: 100%;
    text-align: left;
  }
`;

export default styles;
