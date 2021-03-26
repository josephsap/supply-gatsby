import { css } from '@emotion/react';

const styles = (theme) => css`
  .topBar {
    background-color: gray;
    position: static;
    height: 250px;
    display: table;
    width: 100%;
    @media (min-width: 769px) {
      margin-bottom: 2rem;
    }

    .container {
      vertical-align: middle;
      display: table-cell;
      height: 150px;
      position: relative;
      width: 100%;

      .mobile-show {
        display: block;
      }

      svg {
        position: absolute;
        fill: #000000;
        height: 26px;
        @media only screen and (min-width: 770px) and (-webkit-min-device-pixel-ratio: 1) {
          display: block;
        }
        @media only screen and (min-device-width: 770px) and (-webkit-min-device-pixel-ratio: 2) {
          display: block;
        }
      }
    }

    h1 {
      letter-spacing: 2px;
      font-size: 35px;
      margin-bottom: 1px;
      font-weight: 700;
    }
  }

  .aboutLink {
    text-transform: uppercase;
    display: block;
    margin: 30px auto 0;
    color: gray;
    cursor: pointer;
    text-decoration: underline;
    background: none;
    border: none;
    padding: 0;
    outline: inherit;
    &:hover {
      color: #757575;
    }
  }

  .textCenter {
    text-align: center;
  }

  .subhead {
    padding: 0 12px;
    font-weight: 300;
    margin: 0;
  }

  .modalButton {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    text-decoration: underline;
    text-transform: uppercase;
    margin-top: 15px;
  }

  .modalStyles {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modalTop {
    background: black;
    display: flex;
    padding: 0 20px;
  }

  .modalTop p {
    color: white;
    font-size: 20px;
    flex: 1 0 80%;
  }

  .modalCloseIcon {
    align-self: center;
    color: white;
    cursor: pointer;
    flex: 1 0 0;
  }

  .modalInner {
    padding: 5px 20px 20px 20px;
  }

  @media (max-width: 700px) {
    .svgWrapper svg {
      display: none !important;
    }
  }
  .svgWrapper span {
    position: absolute;
  }
  .svgWrapper .line1 {
    top: 5%;
    left: 31%;
  }
  .svgWrapper .line2 {
    left: 15%;
  }
  .svgWrapper .line3 {
    top: 18%;
    left: 4%;
    transform: rotate(-50deg);
  }
  .svgWrapper .line4 {
    right: 7%;
  }
  .svgWrapper .line5 {
    right: 23%;
    top: 64%;
    transform: rotate(-47deg);
  }
  .svgWrapper .square1 {
    left: 12%;
    top: 38%;
  }
  .svgWrapper .square2 {
    left: 23%;
    top: 18%;
    z-index: 1;
    transform: rotate(21deg);
  }
  .svgWrapper .square3 {
    right: 23.7%;
    top: 22.6%;
    transform: rotate(21deg);
    height: 30px;
    z-index: 1;
  }
  .svgWrapper .square4 {
    top: 7%;
    right: 11%;
  }
  .svgWrapper .triangle1 {
    left: 8.5%;
  }
  @media (min-width: 950px) {
    .svgWrapper .triangle1 {
      left: 24.5%;
    }
  }
  .svgWrapper .triangle2 {
    left: 22.3%;
    top: 14.5%;
    z-index: 0;
    transform: rotate(34deg);
  }
  .svgWrapper .triangle3 {
    right: 4%;
    top: 35%;
  }
  .svgWrapper .circle1 {
    right: 15%;
    top: 56%;
  }
  .svgWrapper .circle2 {
    right: 24.5%;
    top: 19%;
    z-index: 0;
    height: 30px;
  }
  @media (max-width: 769px) {
    .svgWrapper .circle2.mobile-show {
      left: 10%;
    }
  }
`;

export default styles;
