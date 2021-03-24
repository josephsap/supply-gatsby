import { css } from '@emotion/react';

const styles = (theme) => css`
  .chat-button {
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.supply.salmon.main};
    font-size: 2.4rem;
    letter-spacing: -1px;

    ${theme.breakpoints.up('md')} {
      padding-right: 14rem;
      padding-bottom: 7rem;
      padding-top: 2rem;
      font-size: 3rem;
    }

    .MuiButton-label {
      ${theme.breakpoints.down('sm')} {
        justify-content: flex-start;
      }
    }
  }

  .btn-italic-text {
    font-family: 'Bogue-Italic', Garamond, sans-serif;
    margin-bottom: -2px;
  }
`;

export const closeChatBtnStyles = (theme) => css`
  position: absolute;
  transform: rotate(-90deg);
  top: 32px;
  right: -8px;
  ${theme.breakpoints.up('md')} {
    top: 51px;
  }

  img {
    margin-left: 10px;
    margin-bottom: -4px;
  }
`;

export default styles;
