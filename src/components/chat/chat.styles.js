import { css } from '@emotion/react';

export const chatBaseStyles = (theme) => css`
  background: ${theme.palette.supply.salmon.main};
  overflow-y: auto;
  overflow-x: hidden;
  margin-bottom: 3rem;
  ${theme.breakpoints.up('md')} {
    height: 89vh;
  }

  .msg-container {
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  > div h5 {
    ${theme.breakpoints.down('sm')} {
      text-align: center;
    }
  }

  .em-send-btn-container {
    &:nth-of-type(2) {
      margin-left: auto;
      ${theme.breakpoints.down('sm')} {
        margin-top: 2rem;
      }
    }
  }

  .chat-input {
    fieldset {
      border: 2px solid;
    }
    .MuiOutlinedInput-root {
      border-radius: 16px;
    }
  }

  .message-container {
    padding: 0 2rem 6rem;
    ${theme.breakpoints.up('md')} {
      padding: 0 6rem;
    }
  }

  .message-interior {
    border: 2px solid;
    border-radius: 20px;
    overflow: auto;
    margin: 40px 0 0;
    height: calc(80vh - 195px);
  }

  .loading-messages {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .send-msg-btn {
    height: 69px;
    ${theme.breakpoints.up('sm')} {
      margin-top: 14px;
    }
  }

  .message-input-container {
    margin: 3rem 0 0;
    padding-bottom: 4.6rem;
    ${theme.breakpoints.up('sm')} {
      padding-bottom: 0;
    }
    form {
      margin: 2rem 0 2.5rem;
    }
  }

  .email-side-container {
    padding: 2.8rem 2rem 0;
    ${theme.breakpoints.up('md')} {
      padding: 4.6rem 6rem 2.4rem;
    }
  }

  .email-btn {
    margin-top: auto;
    margin-bottom: 1.8rem;
    &.email-md {
      ${theme.breakpoints.down('sm')} {
        display: none;
      }
    }
    &.email-sm {
      ${theme.breakpoints.up('md')} {
        display: none;
      }
    }
  }

  .close-container {
    right: -2rem;
    top: 51px;
  }

  .slide-styles {
    overflow-x: hidden;
  }

  .email-side-interior {
    display: flex;
    flex-direction: column;
    height: 100%;
    text-align: center;
    ${theme.breakpoints.up('md')} {
      text-align: left;
    }

    h5 {
      margin-bottom: 1rem;
      margin-top: 2.75rem;
    }

    p {
      text-align: center;
      ${theme.breakpoints.up('md')} {
        text-align: left;
      }
    }
  }
`;

export const customerMsgStyles = css`
  justify-content: end;
  margin: 1rem 2rem 1rem 1.5rem;
  max-width: 60%;
  line-height: 1;

  .sent-at {
    font-size: 0.3rem;
    line-height: 1;
  }
`;

export const agentMsgStyles = (theme) => css`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0 1rem;
  align-items: flex-end;
  margin-left: auto;
  margin-bottom: 2rem;

  span {
    padding-left: 1rem;
  }

  span {
    font-size: 0.3rem;
    line-height: 1;
  }

  .intro-msg {
    max-width: 80%;
    line-height: 1;
    position: relative;
    padding: 1rem;
    &:after {
      content: '';
      background-color: ${theme.palette.text.primary};
      position: absolute;
      bottom: 0;
      left: 1rem;
      width: 50%;
      height: 2px;
    }
  }
`;

export const agentPhotoStyles = (theme, { photoUrl }) => css`
  background-position: center;
  background-size: cover;
  background-image: url(${photoUrl});
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const agentPhotoContainer = css`
  display: flex;
  align-items: baseline;
  width: 100%;
  flex-direction: row-reverse;
  span {
    padding-left: 0.5rem;
  }
`;
