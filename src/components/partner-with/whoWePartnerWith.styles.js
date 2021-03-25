import { css } from '@emotion/react';
import { initiallyHidden } from '../shared/shared.styles';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.pink.main};

  //pre-animated styles
  .headline,
  .partner-tabs,
  .category-container {
    ${initiallyHidden}
  }

  .tab-indicator-override {
    background: none;
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

  .category-title {
    display: inline-block;
    margin-bottom: 30px;
    text-decoration: none;
    cursor: pointer;

    h3 {
      display: inline-block;
      color: ${theme.palette.text.primary};
      position: relative;
      transition: ${theme.transitions.create(['opacity'], {
        duration: '.25s',
        easing: theme.transitions.easing.inOutCirc,
      })};

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
        display: block;
        width: 12px;
        margin: auto;
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
    font-size: 2rem;
    line-height: 1.4;
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

  .design {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 14%;
      padding-bottom: 9%;
      transform: translate(-50%, -50%) rotate(40deg) scale(0.25);
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 17%;
      padding-bottom: 4%;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-green.svg);
      width: 12%;
      padding-bottom: 4.5%;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 19%;
      padding-bottom: 7%;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 17%;
      padding-bottom: 4%;
      color: ${theme.palette.supply.pink.main};
      transform: translate(-50%, -50%) rotate(25deg) scale(0.25);
    }
    .category-item:nth-of-type(6) {
      background-image: url(/images/pill-bg-white-scalloped.svg);
      width: 11%;
      padding-bottom: 7%;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
    }
    .category-item:nth-of-type(7) {
      background-image: url(/images/pill-bg-gold.svg);
      width: 16%;
      padding-bottom: 5.5%;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
    }

    .category-icons {
      svg:nth-of-type(1) {
        transform: translate(-50%, -50%) rotate(400deg);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }

      svg:nth-of-type(2) {
        transform: translate(-50%, -50%) rotate(-400deg);
        path {
          fill: ${theme.palette.supply.seaGreen.main};
        }
      }

      svg:nth-of-type(3) {
        transform: translate(-50%, -50%) rotate(400deg);
        path {
          fill: ${theme.palette.supply.orange.main};
        }
      }
      svg:nth-of-type(4) {
        transform: translate(-50%, -50%) rotate(400deg);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-211%, -186%) rotate(17deg);
      }
      .category-item:nth-of-type(2) {
        transform: translate(-7%, -341%) rotate(-2deg);
      }
      .category-item:nth-of-type(3) {
        transform: translate(173%, -330%) rotate(9.6deg);
      }
      .category-item:nth-of-type(4) {
        transform: translate(-219%, -93%) rotate(-3deg);
      }
      .category-item:nth-of-type(5) {
        transform: translate(-172%, 49%) rotate(7deg);
      }
      .category-item:nth-of-type(6) {
        transform: translate(104%, 0%) rotate(-9deg);
      }
      .category-item:nth-of-type(7) {
        transform: translate(138%, -135%) rotate(-5deg);
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-480%, -310%) rotate(16deg);
        }

        svg:nth-of-type(2) {
          transform: translate(877%, -11%) rotate(-9deg);
        }

        svg:nth-of-type(3) {
          transform: translate(-870%, -140%);
        }
        svg:nth-of-type(4) {
          transform: translate(1300%, 0%);
        }
      }
    }
  }
  .technology {
    .category-item:nth-of-type(1) {
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
      background-image: url(/images/pill-bg-coral.svg);
      width: 22%;
      padding-bottom: 6%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-green.svg);
      width: 21%;
      padding-bottom: 7.5%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-purple-small.svg);
      width: 16%;
      padding-bottom: 7.7%;
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 19%;
      padding-bottom: 7%;
      transform: translate(-50%, -50%) rotate(45deg) scale(0.25);
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 18%;
      padding-bottom: 4%;
      transform: translate(-50%, -50%) rotate(-70deg) scale(0.25);
      color: ${theme.palette.supply.pink.main};
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
        transform: translate(-163%, -266%) rotate(-8.7deg) scale(1);
      }
      .category-item:nth-of-type(2) {
        transform: translate(-45%, -232%) rotate(13deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(123%, -225%) rotate(17deg) scale(1);
      }
      .category-item:nth-of-type(4) {
        transform: translate(-142%, 5%) rotate(9.3deg) scale(1);
      }
      .category-item:nth-of-type(5) {
        transform: translate(95%, 33%) rotate(-13deg) scale(1);
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-1480%, -120%) rotate(45deg) scale(1);
        }

        svg:nth-of-type(2) {
          transform: translate(1387%, -111%) rotate(-9deg) scale(1);
        }

        svg:nth-of-type(3) {
          transform: translate(830%, -260%) rotate(30deg) scale(1);
        }
        svg:nth-of-type(4) {
          transform: translate(-530%, -270%) scale(1);
        }
        svg:nth-of-type(5) {
          transform: translate(520%, -350%) scale(1);
        }
        svg:nth-of-type(6) {
          transform: translate(490%, 0%) scale(1);
        }
      }
    }
  }
  .management {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 18%;
      padding-bottom: 5%;
      transform: translate(-50%, -50%) rotate(25deg) scale(0.25);
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-purple-small.svg);
      width: 15%;
      padding-bottom: 7%;
      background-size: 100% 100%;
      transform: translate(-50%, -50%) rotate(-1deg) scale(0.25);
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-green.svg);
      width: 16%;
      padding-bottom: 5.5%;
      background-size: 100% 100%;
      transform: translate(-50%, -50%) rotate(-13.11deg) scale(0.25);
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 25%;
      padding-bottom: 5.5%;
      color: ${theme.palette.supply.pink.main};
      transform: translate(-50%, -50%) rotate(-11deg) scale(0.25);
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-white-scalloped-long.svg);
      width: 17%;
      padding-bottom: 8%;
      transform: translate(-50%, -50%) rotate(27deg) scale(0.25);
    }
    .category-item:nth-of-type(6) {
      background-image: url(/images/pill-bg-orange-long.svg);
      width: 18%;
      padding-bottom: 4.5%;
      transform: translate(-50%, -50%) rotate(-10deg) scale(0.25);
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
        transform: translate(-190%, -272%) rotate(-7.95deg) scale(1);
      }
      .category-item:nth-of-type(2) {
        transform: translate(-76%, -220%) rotate(-13deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(40%, -260%) rotate(17deg) scale(1);
      }
      .category-item:nth-of-type(4) {
        transform: translate(-131%, 47%) rotate(9.3deg) scale(1);
      }
      .category-item:nth-of-type(5) {
        transform: translate(49%, 27%) rotate(-13deg) scale(1);
      }
      .category-item:nth-of-type(6) {
        transform: translate(140%, 20%) rotate(10deg) scale(1);
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-590%, -260%) rotate(30deg) scale(1);
        }

        svg:nth-of-type(2) {
          transform: translate(1160%, -250%) rotate(-35deg) scale(1);
        }

        svg:nth-of-type(3) {
          transform: translate(260%, -10%) rotate(-22deg) scale(1);
        }
        svg:nth-of-type(4) {
          transform: translate(-1460%, 0%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(5) {
          transform: translate(-450%, -20%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(6) {
          transform: translate(910%, -210%) rotate(0deg) scale(1);
        }
      }
    }
  }

  .brands {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-white.svg);
      width: 13%;
      padding-bottom: 8.5%;
      transform: translate(-50%, -50%) rotate(10deg) scale(0.25);

      span {
        width: 60%;
      }
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 17%;
      padding-bottom: 6%;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-blue-scalloped.svg);
      width: 13%;
      padding-bottom: 7%;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
      color: ${theme.palette.supply.pink.main};
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
          fill: ${theme.palette.supply.goldLeather.main};
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
      }
      .category-item:nth-of-type(2) {
        transform: translate(-163%, 0%) rotate(13deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(90%, 0%) rotate(-8deg) scale(1);
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-420%, -280%) rotate(20deg) scale(1);
        }
        svg:nth-of-type(2) {
          transform: translate(-410%, -10%) rotate(-30deg) scale(1);
        }
        svg:nth-of-type(3) {
          transform: translate(350%, -10%) rotate(24deg) scale(1);
        }
        svg:nth-of-type(4) {
          transform: translate(410%, -260%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(5) {
          transform: translate(-770%, -130%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(6) {
          transform: translate(770%, -120%) rotate(0deg) scale(1);
        }
      }
    }
  }

  .agencies {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 19%;
      padding-bottom: 5%;
      transform: translate(-50%, -50%) rotate(10deg) scale(0.25);
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-green.svg);
      width: 15%;
      padding-bottom: 5.5%;
      transform: translate(-50%, -50%) rotate(30deg) scale(0.25);
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-gold.svg);
      width: 18%;
      padding-bottom: 6%;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 13%;
      padding-bottom: 8.2%;
      transform: translate(-50%, -50%) rotate(30deg) scale(0.25);

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
          fill: ${theme.palette.supply.goldLeather.main};
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
      }
      .category-item:nth-of-type(2) {
        transform: translate(80%, -280%) rotate(-21deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(-180%, -26%) rotate(19deg) scale(1);
      }
      .category-item:nth-of-type(4) {
        transform: translate(140%, -10%) rotate(-10deg) scale(1);
      }
      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-1190%, -180%) rotate(15deg) scale(1);
        }
        svg:nth-of-type(2) {
          transform: translate(-520%, 60%) rotate(-33deg) scale(1);
        }
        svg:nth-of-type(3) {
          transform: translate(80%, -320%) rotate(-20deg) scale(1);
        }
        svg:nth-of-type(4) {
          transform: translate(850%, -170%) rotate(20deg) scale(1);
        }
        svg:nth-of-type(5) {
          transform: translate(1020%, -230%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(6) {
          transform: translate(-170%, -240%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(7) {
          transform: translate(440%, 0%) rotate(0deg) scale(1);
        }
      }
    }
  }

  .startuptech {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-green-small.svg);
      width: 10%;
      padding-bottom: 5%;
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-blue-small.svg);
      width: 12%;
      padding-bottom: 7.5%;
      transform: translate(-50%, -50%) rotate(0deg) scale(0.25);
      color: ${theme.palette.supply.pink.main};
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 17%;
      padding-bottom: 4.7%;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 11%;
      padding-bottom: 7%;
      transform: translate(-50%, -50%) rotate(-20deg) scale(0.25);

      span {
        width: 60%;
      }
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-gold-small.svg);
      width: 13%;
      padding-bottom: 6.5%;
      transform: translate(-50%, -50%) rotate(20deg) scale(0.25);
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
          fill: ${theme.palette.supply.seaGreen.main};
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
        transform: translate(-50%, -50%) rotate(400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.goldLeather.main};
        }
      }
      svg:nth-of-type(7) {
        transform: translate(-50%, -50%) rotate(-400deg) scale(0.25);
        path {
          fill: ${theme.palette.supply.lilac.main};
        }
      }
    }

    &.active {
      .category-item:nth-of-type(1) {
        transform: translate(-340%, -280%) rotate(-21deg) scale(1);
      }
      .category-item:nth-of-type(2) {
        transform: translate(-80%, -220%) rotate(-16deg) scale(1);
      }
      .category-item:nth-of-type(3) {
        transform: translate(100%, -300%) rotate(11deg) scale(1);
      }
      .category-item:nth-of-type(4) {
        transform: translate(-240%, 16%) rotate(16deg) scale(1);
      }
      .category-item:nth-of-type(5) {
        transform: translate(130%, 30%) rotate(-23deg) scale(1);
      }

      .category-icons {
        svg:nth-of-type(1) {
          transform: translate(-550%, -300%) rotate(21deg) scale(1);
        }
        svg:nth-of-type(2) {
          transform: translate(-1231%, 0%) rotate(-30deg) scale(1);
        }
        svg:nth-of-type(3) {
          transform: translate(260%, -320%) rotate(20deg) scale(1);
        }
        svg:nth-of-type(4) {
          transform: translate(480%, 40%) rotate(-40deg) scale(1);
        }
        svg:nth-of-type(5) {
          transform: translate(-880%, -310%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(6) {
          transform: translate(-470%, 57%) rotate(0deg) scale(1);
        }
        svg:nth-of-type(7) {
          transform: translate(1260%, -50%) rotate(0deg) scale(1);
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

export default styles;
