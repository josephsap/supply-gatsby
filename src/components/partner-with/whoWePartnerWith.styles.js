import { css } from '@emotion/react';

const styles = (theme) => css`
  background-color: ${theme.palette.supply.pink.main};

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
    margin: 3rem auto 4rem;
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
  .category-item {
    display: inline-block;
    background-size: 100% auto;
    background-repeat: no-repeat;
    position: relative;
    height: 0;

    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      text-align: center;
    }
  }

  .category-title {
    font-size: 1.5vw;
    line-height: 1.4;
  }

  .design {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 18%;
      padding-bottom: 12%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 21%;
      padding-bottom: 5%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-green.svg);
      width: 18%;
      padding-bottom: 6.5%;
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 23%;
      padding-bottom: 8.2%;
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 21%;
      padding-bottom: 4.5%;
      color: ${theme.palette.supply.pink.main};
    }
    .category-item:nth-of-type(6) {
      background-image: url(/images/pill-bg-white-scalloped.svg);
      width: 16%;
      padding-bottom: 10.5%;
    }
    .category-item:nth-of-type(7) {
      background-image: url(/images/pill-bg-gold.svg);
      width: 20%;
      padding-bottom: 7%;
    }

    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }

    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }

    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.orange.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }
  }
  .technology {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 22%;
      padding-bottom: 6%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-green.svg);
      width: 23%;
      padding-bottom: 8.5%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-purple-small.svg);
      width: 20%;
      padding-bottom: 9.7%;
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 23%;
      padding-bottom: 8.5%;
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 22%;
      padding-bottom: 5%;
      color: ${theme.palette.supply.pink.main};
    }

    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }

    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }

    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.orange.main};
      }
    }
    svg:nth-of-type(5) {
      path {
        fill: ${theme.palette.supply.salmon.main};
      }
    }
    svg:nth-of-type(6) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }
  }
  .management {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 22%;
      padding-bottom: 6%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-purple-small.svg);
      width: 23%;
      padding-bottom: 10%;
      background-size: 100% 100%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-green.svg);
      width: 23%;
      padding-bottom: 8.5%;
      background-size: 100% 100%; 
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-blue.svg);
      width: 35%;
      padding-bottom: 7.5%;
      color: ${theme.palette.supply.pink.main};
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-white-scalloped-long.svg);
      width: 22%;
      padding-bottom: 10%;
    }
    .category-item:nth-of-type(6) {
      background-image: url(/images/pill-bg-orange-long.svg);
      width: 24%;
      padding-bottom: 6%;
    }
    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }

    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }

    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.cobalt.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }
    svg:nth-of-type(5) {
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

  .brands {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-white.svg);
      width: 23%;
      padding-bottom: 14.5%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-orange.svg);
      width: 23%;
      padding-bottom: 8.5%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-blue-scalloped.svg);
      width: 16%;
      padding-bottom: 9%;
      color: ${theme.palette.supply.pink.main};
    }
    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }
    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }
    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.goldLeather.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.salmon.main};
      }
    }
    svg:nth-of-type(5) {
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

  .agencies {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 23%;
      padding-bottom: 6%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-green.svg);
      width: 21%;
      padding-bottom: 7.5%;
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-gold.svg);
      width: 23%;
      padding-bottom: 8%;  
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 18%;
      padding-bottom: 11.5%;

      span {
        width: 80%;
      }
    }
    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }
    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.cobalt.main};
      }
    }
    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.goldLeather.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.orange.main};
      }
    }
    svg:nth-of-type(5) {
      path {
        fill: ${theme.palette.supply.orange.main};
      }
    }
    svg:nth-of-type(6) {
      path {
        fill: ${theme.palette.supply.goldLeather.main};
      }
    }
  }

  .startuptech {
    .category-item:nth-of-type(1) {
      background-image: url(/images/pill-bg-green-small.svg);
      width: 13%;
      padding-bottom: 6.5%;
    }
    .category-item:nth-of-type(2) {
      background-image: url(/images/pill-bg-blue-small.svg);
      width: 16%;
      padding-bottom: 10.5%;
      color: ${theme.palette.supply.pink.main};
    }
    .category-item:nth-of-type(3) {
      background-image: url(/images/pill-bg-coral.svg);
      width: 23%;
      padding-bottom: 5.7%;
    }
    .category-item:nth-of-type(4) {
      background-image: url(/images/pill-bg-purple.svg);
      width: 16%;
      padding-bottom: 10%;

      span {
        width: 60%;
      }
    }
    .category-item:nth-of-type(5) {
      background-image: url(/images/pill-bg-gold-small.svg);
      width: 16%;
      padding-bottom: 7.5%;
    }
    svg:nth-of-type(1) {
      path {
        fill: ${theme.palette.supply.lilac.main};
      }
    }
    svg:nth-of-type(2) {
      path {
        fill: ${theme.palette.supply.cobalt.main};
      }
    }
    svg:nth-of-type(3) {
      path {
        fill: ${theme.palette.supply.seaGreen.main};
      }
    }
    svg:nth-of-type(4) {
      path {
        fill: ${theme.palette.supply.salmon.main};
      }
    }
    svg:nth-of-type(5) {
      path {
        fill: ${theme.palette.supply.orange.main};
      }
    }
    svg:nth-of-type(6) {
      path {
        fill: ${theme.palette.supply.goldLeather.main};
      }
    }
    svg:nth-of-type(7) {
      path {
        fill: ${theme.palette.supply.salmon.main};
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
