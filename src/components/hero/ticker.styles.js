import { css } from '@emotion/react';

const styles = (theme) => css`
  overflow: hidden;
  background-color: ${theme.palette.supply.cream.main};

  .dot {
    font-size: 19px;
    display: inline-block;
    margin: 0 8px;
  }

  .divider-img {
    height: 1.1rem;
    width: 1.1rem;
    margin: 0 0.75rem;
  }

  .marquee {
    white-space: nowrap;
  }

  .marquee span {
    display: inline-block;
    padding-left: 45%;
    animation: marquee 19s linear infinite;
  }

  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

export default styles;
