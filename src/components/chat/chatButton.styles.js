import { css } from '@emotion/react';

const styles = (theme) => css`
  .chat-button {
    position: fixed;
    z-index: 9;
    bottom: -20px;
    right: -14px;
    border-radius: 0;
    transform: rotate(-5.23deg);
    background-color: ${theme.palette.supply.salmon.main};
    font-size: 3rem;
    letter-spacing: -1px;
    padding-right: 14rem;
    padding-bottom: 7rem;
    padding-top: 2rem;
  }

  .btn-italic-text {
    font-family: 'Bogue-Italic', Garamond, sans-serif;
    margin-bottom: -2px;
  }
`;

export default styles;
