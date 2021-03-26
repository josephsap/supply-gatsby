import { css } from '@emotion/react';

const styles = (theme) => css`
  .loadingScreen {
    background: #f5f6f6;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    opacity: 1;
    transition: 2.5s ease-out;
  }

  .loader {
    font-size: 5px;
    margin: 50px auto;
    text-indent: -9999em;
    width: 11em;
    height: 11em;
    border-radius: 50%;
    background: #c7bda3;
    background: -moz-linear-gradient(
      left,
      #c7bda3 10%,
      rgba(199, 189, 163, 0) 42%
    );
    background: -webkit-linear-gradient(
      left,
      #c7bda3 10%,
      rgba(199, 189, 163, 0) 42%
    );
    background: -o-linear-gradient(
      left,
      #c7bda3 10%,
      rgba(199, 189, 163, 0) 42%
    );
    background: -ms-linear-gradient(
      left,
      #c7bda3 10%,
      rgba(199, 189, 163, 0) 42%
    );
    background: linear-gradient(
      to right,
      #c7bda3 10%,
      rgba(199, 189, 163, 0) 42%
    );
    position: relative;
    top: 50%;
    margin-top: -5.5em;
    -webkit-animation: load3 1.4s infinite linear;
    animation: load3 1.4s infinite linear;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
  }
  .loader:before {
    width: 50%;
    height: 50%;
    background: #c7bda3;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
  }
  .loader:after {
    background: #f5f6f6;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: '';
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  @-webkit-keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes load3 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .fade-enter {
    opacity: 1;
  }
  .fade-enter-active {
    opacity: 1;
  }
  .fade-exit {
    opacity: 1;
    transition: opacity 1.5s;
  }
  .alert-exit-active {
    opacity: 0;
    transition: opacity 1.5s;
  }
`;

export default styles;
