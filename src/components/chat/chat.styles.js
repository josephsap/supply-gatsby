import { css } from '@emotion/react';

export const chatBaseStyles = (theme) => css`
  background: ${theme.palette.supply.salmon.main};
  overflow-y: auto;
  overflow-x: hidden;

  .message-container {
    padding: 0 6rem;
    margin: 40px 0;
  }

  .message-interior {
    border: 3px solid;
    border-radius: 20px;
    overflow: auto;
    height: calc(80vh - 140px);
  }

  .loading-messages {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  .send-msg-btn {
    margin-top: 2rem;
  }

  .message-input-container {
    margin: 3rem 0 0;
    padding: 0 1rem;

    form {
      margin: 2rem 0 1rem;
    }
  }

  .email-side-container {
    padding: 4.8rem 6rem;
  }

  .email-btn {
    margin-top: auto;
  }

  .slide-styles {
    overflow-x: hidden;
  }

  .email-side-interior {
    margin-top: 2.75rem;
    padding-bottom: 2.4rem;
    display: flex;
    flex-direction: column;
    height: 100%;

    h5 {
      margin-bottom: 1rem;
      ${theme.breakpoints.up('md')} {
        width: 75%;
      }
    }
  }
`;

export const customerMsgStyles = css`
  justify-content: end;
  margin: 2rem 4rem 2rem auto;
  max-width: 60%;
`;

export const agentMsgStyles = css`
  margin: 4rem 8rem 2rem 2rem;
`;

export const agentPhotoStyles = (photoUrl) => css`
  background-position: center;
  background-size: cover;
  background-image: url(${photoUrl});
  height: 56px;
  width: 56px;
  border-radius: 50%;
  margin-right: 2.4rem;
`;

// export default styles;
