import { css } from '@emotion/react';

const styles = (theme) => css`
  .chat-button {
    border-radius: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.supply.salmon.main};
    font-size: 2.4rem;
    letter-spacing: -1px;
    box-shadow: none;

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
  margin: 2rem 0.5rem 0 auto;
  ${theme.breakpoints.up('md')} {
    top: 51px;
    position: absolute;
    transform: rotate(-90deg);
    right: -2rem;
    margin: 0;
  }

  img {
    margin-left: 10px;
    margin-bottom: -4px;
  }
`;

export default styles;
