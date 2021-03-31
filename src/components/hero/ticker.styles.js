import { css } from '@emotion/react';

const styles = (theme) => css`
  overflow: hidden;
  background-color: ${theme.palette.supply.cream.main};
  display: flex;

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
    display: inline-block;
    padding-right: 15%;
    animation: marqueeMove 19s linear infinite;
  }

  @keyframes marqueeMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`;

export default styles;
