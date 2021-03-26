import { css } from '@emotion/react';

const styles = (theme) => css`
  ${'' /* @import './_variables'; */}

  body {
    font-family: 'brandon-grotesque', 'Helvetica Neue', Helvetica, Arial,
      sans-serif;
    font-weight: 400;
    font-style: normal;
    ${'' /* color: $darkGray; */}
    ${'' /* background-color: $backgroundGray; */}
  }

  .mobileSliderIndicator {
    display: block;
    width: 18px;
    height: 18px;
    background-color: #c7bda4;
    border-radius: 50%;
    margin: 0 auto 30px;
    position: relative;
    &:after {
      content: '';
      ${'' /* background: url('images/money-stack.png'); */}
      position: absolute;
      top: -47px;
      width: 45px;
      left: -50%;
      height: 45px;
      margin-left: -3px;
      background-size: cover;
      z-index: 2;
    }
    @media (min-width: 769px) {
      display: none;
    }
  }

  :global(select) {
    border: none;
    -webkit-appearance: none;
    border-radius: 0;
    ${'' /* color: $gold; */}
    text-transform: uppercase;
    font-weight: 700;
    position: relative;
    background-color: white;
    cursor: pointer;
    padding: 10px 25px 10px 10px;
  }

  .jobsLoading {
    margin: 0 auto;
    border-top: none !important;
  }

  .slider {
    margin-bottom: 10px;
    border-bottom: 2px solid;
    @media (min-width: 769px) {
      position: relative;
      margin-bottom: 30px;
    }
  }

  h1,
  h2 {
    ${'' /* color: $gold; */}
    font-weight: 700;
  }
`;

export const jobItemStyles = css`
  transition: 0.3s ease-in-out;
  &:hover {
    ${'' /* background-color: $backgroundGrayHover; */}
    transition: 0.3s ease-in-out;
  }
  &:focus {
    outline: none !important;
  }
`;

export default styles;
