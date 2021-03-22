import { css } from '@emotion/react';

const styles = (theme) => css`
  .chat-button {
    border-radius: 0;
    width: 100%;
    height: 100%;
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

export const closeChatBtnStyles = css`
  position: absolute;
  transform: rotate(-90deg);
  top: 51px;
  right: -8px;

  img {
    margin-left: 10px;
    margin-bottom: -4px;
  }
`;

export default styles;
